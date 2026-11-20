"use strict";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const $ = (sel, root = document) => root.querySelector(sel);

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function hex(n, width) {
  return "0x" + Number(n).toString(16).toUpperCase().padStart(width, "0");
}

async function api(method, path, body) {
  const opts = { method, headers: {} };
  if (method !== "GET") {
    opts.headers["Content-Type"] = "application/json";
    opts.headers["X-VSCP-Editor"] = "1";
    opts.body = JSON.stringify(body || {});
  }
  const res = await fetch("/api" + path, opts);
  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error("The server did not answer (" + res.status + ")");
  }
  if (!res.ok) throw new Error(data.error || "Error " + res.status);
  return data;
}

let toastTimer;
function toast(text, isError) {
  const t = $("#toast");
  t.textContent = text;
  t.className = "toast" + (isError ? " err" : "");
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), isError ? 6000 : 2500);
}

function renderMarkdown(text) {
  if (window.marked && typeof window.marked.parse === "function") {
    return window.marked.parse(text || "");
  }
  return "<pre>" + esc(text) + "</pre><p class='muted small'>(Markdown preview needs the network; showing the text.)</p>";
}

// Split an argument string at spaces, keeping "quoted parts" together
function splitArgs(s) {
  const out = [];
  const re = /"([^"]*)"|(\S+)/g;
  let m;
  while ((m = re.exec(s))) out.push(m[1] !== undefined ? m[1] : m[2]);
  return out;
}

// ---------------------------------------------------------------------------
// Unsaved changes
// ---------------------------------------------------------------------------

let dirty = false;
let ignoreHash = false;
let currentHash = location.hash;

function setDirty(on) {
  dirty = on;
  document.querySelectorAll(".dirty-note").forEach(n => (n.hidden = !on));
}

window.addEventListener("beforeunload", e => {
  if (dirty) {
    e.preventDefault();
    e.returnValue = "";
  }
});

function navigate(hash) {
  if (location.hash === hash) route();
  else location.hash = hash;
}

// ---------------------------------------------------------------------------
// Dialog
// ---------------------------------------------------------------------------

// Shows a dialog. onOk(form) returns true/undefined to close or throws to show an error.
function dialog({ title, body, ok = "OK", danger = false, onOk }) {
  const dlg = $("#dlg");
  $("#dlgTitle").textContent = title;
  const b = $("#dlgBody");
  b.innerHTML = "";
  if (typeof body === "string") b.innerHTML = body;
  else if (body) b.appendChild(body);
  const err = $("#dlgError");
  err.hidden = true;
  const okBtn = $("#dlgOk");
  okBtn.textContent = ok;
  okBtn.className = danger ? "danger" : "primary";
  okBtn.disabled = false;
  return new Promise(resolve => {
    const onClick = async e => {
      e.preventDefault();
      if (!$("#dlgForm").reportValidity()) return;
      okBtn.disabled = true;
      try {
        const r = onOk ? await onOk(b) : true;
        cleanup();
        dlg.close();
        resolve(r === undefined ? true : r);
      } catch (ex) {
        err.textContent = ex.message;
        err.hidden = false;
        okBtn.disabled = false;
      }
    };
    const onClose = () => {
      cleanup();
      resolve(false);
    };
    function cleanup() {
      okBtn.removeEventListener("click", onClick);
      dlg.removeEventListener("close", onClose);
    }
    okBtn.addEventListener("click", onClick);
    dlg.addEventListener("close", onClose);
    dlg.showModal();
    const first = b.querySelector("input, select, textarea");
    if (first) first.focus();
  });
}

function confirmDialog(title, html, ok = "Delete") {
  return dialog({ title, body: html, ok, danger: true });
}

// ---------------------------------------------------------------------------
// Markdown editor
// ---------------------------------------------------------------------------

function mdEditor(label, value, rows = 14) {
  const wrap = document.createElement("div");
  wrap.className = "md-editor";
  wrap.innerHTML = `
    <div class="md-tabs">
      <span class="lbl">${esc(label)}</span>
      <button type="button" data-mode="edit-only">Edit</button>
      <button type="button" data-mode="split">Split</button>
      <button type="button" data-mode="preview-only">Preview</button>
    </div>
    <div class="md-split">
      <textarea class="mono" rows="${rows}" spellcheck="true"></textarea>
      <div class="md-preview"></div>
    </div>`;
  const ta = $("textarea", wrap);
  const pv = $(".md-preview", wrap);
  const split = $(".md-split", wrap);
  ta.value = value ?? "";
  const update = () => (pv.innerHTML = renderMarkdown(ta.value));
  let timer;
  ta.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(update, 200);
  });
  const setMode = mode => {
    split.className = "md-split " + mode;
    wrap.querySelectorAll(".md-tabs button").forEach(b => b.classList.toggle("on", b.dataset.mode === mode));
    try { localStorage.setItem("mdMode", mode); } catch {}
  };
  wrap.querySelectorAll(".md-tabs button").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
  let mode = "split";
  try { mode = localStorage.getItem("mdMode") || "split"; } catch {}
  setMode(mode);
  update();
  return { el: wrap, get: () => ta.value, textarea: ta };
}

// ---------------------------------------------------------------------------
// Class list
// ---------------------------------------------------------------------------

let classes = [];
let currentClass = null; // detail of the open class
let renderSeq = 0; // A page that finishes loading after a newer navigation is dropped

async function loadClasses() {
  classes = await api("GET", "/classes");
  renderClassList();
}

// Colour class of a class id: Level I, Level I over Level II, Level II
function levelClass(id) {
  id = Number(id);
  return id < 512 ? "lvl1" : id < 1024 ? "bridge" : "lvl2";
}

function classLabel(c) {
  return `${c.id} ${c.token}`;
}

function renderClassList() {
  const f = $("#classFilter").value.trim().toLowerCase();
  const ul = $("#classList");
  ul.innerHTML = "";
  let lastGroup = null;
  for (const c of classes) {
    if (c.error) {
      if (!f || c.file.toLowerCase().includes(f)) {
        const li = document.createElement("li");
        li.innerHTML = `<span class="cid">?</span><span class="ctok">${esc(c.file)}</span><span class="cname"><span class="badge err">invalid</span> ${esc(c.error)}</span>`;
        li.addEventListener("click", () => navigate("#/check"));
        ul.appendChild(li);
      }
      continue;
    }
    const hay = `${c.id} ${hex(c.id, 2)} ${c.token} ${c.name} ${c.file}`.toLowerCase();
    if (f && !hay.includes(f)) continue;
    const group = c.id < 512 ? "Level I" : c.id < 1024 ? "Level I over Level II" : "Level II";
    if (group !== lastGroup && !f) {
      const g = document.createElement("li");
      g.className = "group " + levelClass(c.id);
      g.textContent = group;
      ul.appendChild(g);
      lastGroup = group;
    }
    const li = document.createElement("li");
    li.dataset.id = c.id;
    li.classList.add(levelClass(c.id));
    if (currentClass && currentClass.attrs.id == c.id) li.classList.add("active");
    let badges = "";
    if (c.events) badges += `<span class="badge" title="Uses the events of ${esc(c.events)}">→ ${esc(c.events.replace(/^class_(\d+)[._].*$/, "$1"))}</span>`;
    else badges += `<span class="badge" title="Events">${c.types}</span>`;
    if (!c.listed) badges += `<span class="badge warn" title="Not in list_class.xml">not listed</span>`;
    li.innerHTML = `<span class="cid">${c.id}</span><span class="ctok">${esc(c.token)}${badges}</span><span class="cname">${esc(c.name)}</span>`;
    li.addEventListener("click", () => navigate(`#/classes/${c.id}`));
    ul.appendChild(li);
  }
}

function markActiveClass() {
  document.querySelectorAll("#classList li[data-id]").forEach(li =>
    li.classList.toggle("active", currentClass && li.dataset.id == currentClass.attrs.id));
}

// ---------------------------------------------------------------------------
// Class view
// ---------------------------------------------------------------------------

function nextFreeId(types, start = 0) {
  const used = new Set(types.map(t => Number(t.attrs.id)));
  let i = start;
  while (used.has(i)) i++;
  return i;
}

async function showClass(id) {
  const content = $("#classContent");
  const seq = ++renderSeq;
  let detail;
  try {
    detail = await api("GET", `/classes/${id}`);
    if (seq !== renderSeq) return;
    currentClass = detail;
  } catch (ex) {
    if (seq !== renderSeq) return;
    currentClass = null;
    content.innerHTML = `<div class="empty error">${esc(ex.message)}</div>`;
    return;
  }
  markActiveClass();
  content.className = "content " + levelClass(id);
  const c = currentClass;
  const a = c.attrs;
  const isLevel1 = Number(a.id) < 512;
  const own = !c.events_class;

  content.innerHTML = `
    <div class="class-head">
      <div>
        <h1><span class="cidh">${esc(a.id)} · ${hex(a.id, isLevel1 ? 2 : 4)}</span> ${esc(a.name)}</h1>
        <div class="file">${esc(c.file)} · ${esc(a.id)}.md${c.listed ? "" : ' · <span class="badge warn">not in list_class.xml</span>'}</div>
      </div>
    </div>
    ${c.events_class ? `<div class="notice">This class uses the events of
        <a href="#/classes/${c.events_class.id}">class ${c.events_class.id} (${esc(c.events_class.token)})</a>
        (<code>events="${esc(c.events_class.file)}"</code>). The events and their descriptions
        (<code>${c.events_class.id}.&lt;type&gt;.md</code>) are edited there.</div>` : ""}
    ${c.users.length ? `<div class="notice warn">${c.users.length === 1 ? "Class" : "Classes"}
        ${c.users.map(u => `<a href="#/classes/${u.id}">${u.id} (${esc(u.token)})</a>`).join(", ")}
        ${c.users.length === 1 ? "uses" : "use"} the events of this class: changes to the events here apply there too.</div>` : ""}
    <div class="card" id="classCard">
      <div class="card-head"><h2>Class</h2></div>
      <div class="fields">
        <label>Id <input type="text" value="${esc(a.id)}" disabled title="Create a new class to use another id"></label>
        <label>Name <input type="text" id="cName" value="${esc(a.name)}" required></label>
        <label>Token <input type="text" id="cToken" value="${esc(a.token)}" required class="mono"></label>
        <label>Alternative token <input type="text" id="cAlt" value="${esc(a["alternative-token"] || "")}" class="mono"></label>
      </div>
      <div id="cDesc"></div>
      <div class="buttons">
        <button class="danger" id="btnDelClass">Delete class</button>
        <span class="spacer"></span>
        <span class="dirty-note" hidden>Unsaved changes</span>
        <button class="primary" id="btnSaveClass">Save class</button>
      </div>
    </div>
    <div class="card">
      <div class="card-head">
        <h2>Events (types) ${own ? "" : `<span class="muted">of class ${c.events_class.id}</span>`}</h2>
        ${own ? `<button class="primary" id="btnAddType">Add event</button>` : ""}
      </div>
      <div class="table-wrap">
      <table class="grid" id="typeTable">
        <thead><tr><th>Type</th><th>Name</th><th>Token</th><th></th></tr></thead>
        <tbody></tbody>
      </table>
      </div>
    </div>`;

  const desc = mdEditor(`Description (${a.id}.md)`, c.description ?? "", 12);
  $("#cDesc").appendChild(desc.el);
  if (c.description === null) {
    desc.el.insertAdjacentHTML("afterbegin", `<p class="muted small">${esc(a.id)}.md does not exist yet; saving creates it.</p>`);
  }
  const card = $("#classCard");
  card.addEventListener("input", () => setDirty(true));

  $("#btnSaveClass").addEventListener("click", async () => {
    try {
      await api("PUT", `/classes/${a.id}`, {
        name: $("#cName").value,
        token: $("#cToken").value,
        "alternative-token": $("#cAlt").value,
        description: desc.get(),
      });
      setDirty(false);
      toast("Class saved");
      await loadClasses();
      await showClass(a.id);
      refreshCounts();
    } catch (ex) {
      toast(ex.message, true);
    }
  });

  $("#btnDelClass").addEventListener("click", async () => {
    const n = own ? c.types.length : 0;
    const ok = await dialog({
      title: `Delete class ${a.id}?`,
      body: `<p>This deletes <code>${esc(c.file)}</code>, <code>${esc(a.id)}.md</code>${n ? ` and the ${n} event descriptions <code>${esc(a.id)}.*.md</code>` : ""}, and removes the class from <code>list_class.xml</code>.</p>
             <p class="muted">The files can be restored from git.</p>`,
      ok: "Delete class",
      danger: true,
      onOk: () => api("DELETE", `/classes/${a.id}`),
    });
    if (ok) {
      setDirty(false);
      toast(`Class ${a.id} deleted`);
      currentClass = null;
      await loadClasses();
      navigate("#/classes");
      refreshCounts();
    }
  });

  const tbody = $("#typeTable tbody");
  if (!c.types.length) {
    tbody.innerHTML = `<tr><td colspan="4" class="muted">No events yet.</td></tr>`;
  }
  for (const t of c.types) {
    const tid = Number(t.attrs.id);
    const tr = document.createElement("tr");
    tr.className = own ? "click" : "";
    tr.innerHTML = `
      <td class="num">${tid} <span class="muted">${hex(tid, 2)}</span></td>
      <td>${esc(t.attrs.name)}${t.has_md ? "" : ' <span class="badge warn" title="No description file">no .md</span>'}</td>
      <td class="tok">${esc(t.attrs.token)}</td>
      <td class="act">${own ? `<button class="link" data-act="edit">Edit</button><button class="link" data-act="copy">Copy</button><button class="link danger" data-act="del">Delete</button>`
                            : `<a href="#/classes/${c.events_class.id}/types/${tid}">Open in class ${c.events_class.id}</a>`}</td>`;
    if (own) {
      tr.addEventListener("click", e => {
        const act = e.target.dataset.act || "edit";
        if (act === "edit") navigate(`#/classes/${a.id}/types/${tid}`);
        else if (act === "copy") copyType(c, t);
        else if (act === "del") deleteType(c, t);
      });
    }
    tbody.appendChild(tr);
  }
  if (own) $("#btnAddType").addEventListener("click", () => navigate(`#/classes/${a.id}/types/new`));
}

async function deleteType(c, t) {
  const cid = c.attrs.id;
  const tid = t.attrs.id;
  const ok = await dialog({
    title: `Delete event ${cid}.${tid}?`,
    body: `<p>Deletes type ${esc(tid)} <strong>${esc(t.attrs.name)}</strong> (<code>${esc(t.attrs.token)}</code>) from <code>${esc(c.file)}</code> and its description <code>${esc(cid)}.${esc(tid)}.md</code>.</p>
           ${c.users.length ? `<p>Classes ${c.users.map(u => u.id).join(", ")} use these events and lose it too.</p>` : ""}`,
    ok: "Delete event",
    danger: true,
    onOk: () => api("DELETE", `/classes/${cid}/types/${tid}`),
  });
  if (ok) {
    toast(`Event ${cid}.${tid} deleted`);
    await loadClasses();
    await showClass(cid);
    refreshCounts();
  }
}

async function copyType(c, t) {
  const own = classes.filter(x => !x.error && !x.events);
  const body = document.createElement("div");
  body.innerHTML = `
    <p class="muted">Copies the event with its XML content (render templates, units, ...) and its description.</p>
    <label>To class <select id="cpClass" required>
      ${own.map(x => `<option value="${x.id}" ${x.id == c.attrs.id ? "selected" : ""}>${x.id} ${esc(x.token)}</option>`).join("")}
    </select></label>
    <label>New type id <input id="cpId" type="text" required></label>
    <label>Name <input id="cpName" type="text" value="${esc(t.attrs.name)}" required></label>
    <label>Token <input id="cpToken" type="text" class="mono" value="${esc(t.attrs.token)}"></label>
    <p class="muted small" id="cpHint"></p>`;
  const sel = $("#cpClass", body);
  const setId = async () => {
    try {
      const target = await api("GET", `/classes/${sel.value}`);
      const next = nextFreeId(target.types, sel.value == c.attrs.id ? Number(t.attrs.id) + 1 : Number(t.attrs.id));
      $("#cpId", body).value = next;
      $("#cpHint", body).textContent = sel.value == c.attrs.id
        ? "Change the token: tokens must be unique in a class."
        : `Class ${sel.value} has ${target.types.length} events.`;
    } catch {}
  };
  sel.addEventListener("change", setId);
  setId();
  let result;
  const ok = await dialog({
    title: `Copy event ${c.attrs.id}.${t.attrs.id}`,
    body,
    ok: "Copy",
    onOk: async () => {
      result = await api("POST", `/classes/${c.attrs.id}/types/${t.attrs.id}/copy`, {
        to_class: Number(sel.value),
        id: $("#cpId", body).value,
        name: $("#cpName", body).value,
        token: $("#cpToken", body).value,
      });
    },
  });
  if (ok && result) {
    toast(`Copied to ${result.class}.${result.id}`);
    await loadClasses();
    navigate(`#/classes/${result.class}/types/${result.id}`);
    refreshCounts();
  }
}

// ---------------------------------------------------------------------------
// Type editor
// ---------------------------------------------------------------------------

const DEFAULT_INNER = `
        <render>
            <vscpworks
                variables=""
                template="No data"
            />
        </render>
    `;

async function showType(cid, tidOrNew) {
  const content = $("#classContent");
  const seq = ++renderSeq;
  try {
    const detail = await api("GET", `/classes/${cid}`);
    if (seq !== renderSeq) return;
    currentClass = detail;
  } catch (ex) {
    if (seq !== renderSeq) return;
    content.innerHTML = `<div class="empty error">${esc(ex.message)}</div>`;
    return;
  }
  markActiveClass();
  content.className = "content " + levelClass(cid);
  const c = currentClass;
  if (c.events_class) {
    navigate(tidOrNew === "new" ? `#/classes/${c.events_class.id}` : `#/classes/${c.events_class.id}/types/${tidOrNew}`);
    return;
  }
  const isNew = tidOrNew === "new";
  let t;
  if (isNew) {
    t = { attrs: { id: String(nextFreeId(c.types)), name: "", token: "" }, inner: DEFAULT_INNER, description: "" };
  } else {
    try {
      t = await api("GET", `/classes/${cid}/types/${tidOrNew}`);
      if (seq !== renderSeq) return;
    } catch (ex) {
      if (seq !== renderSeq) return;
      content.innerHTML = `<div class="empty error">${esc(ex.message)}</div>`;
      return;
    }
  }
  const extras = Object.entries(t.attrs).filter(([k]) => !["id", "name", "token"].includes(k));
  const maxId = Number(cid) < 512 ? 255 : 65535;
  const prefix = (c.types.find(x => x.attrs.token) || {}).attrs?.token?.replace(/_[^_]*$/, "_") || "";

  content.innerHTML = `
    <div class="type-editor">
      <div class="crumbs"><a href="#/classes/${cid}">Class ${esc(cid)} · ${esc(c.attrs.token)}</a> ›
        ${isNew ? "New event" : `Type ${esc(t.attrs.id)}`}</div>
      <div class="class-head">
        <h1>${isNew ? "New event" : esc(t.attrs.name)}</h1>
      </div>
      ${c.users.length ? `<div class="notice warn">Also used by class ${c.users.map(u => `<a href="#/classes/${u.id}">${u.id}</a>`).join(", ")}.</div>` : ""}
      <div class="card" id="typeCard">
        <div class="fields">
          <label>Type id (0-${maxId}) <input id="tId" type="text" value="${esc(t.attrs.id)}" required></label>
          <label>Name <input id="tName" type="text" value="${esc(t.attrs.name)}" required></label>
          <label>Token <input id="tToken" type="text" class="mono" value="${esc(t.attrs.token)}" placeholder="${esc(prefix)}..."></label>
        </div>
        <h2>Other attributes</h2>
        <div class="attr-rows" id="attrRows"></div>
        <div class="buttons" style="justify-content:flex-start"><button type="button" id="btnAddAttr">Add attribute</button></div>
        <h2>XML content</h2>
        <p class="muted small">Everything between <code>&lt;type ...&gt;</code> and <code>&lt;/type&gt;</code>: render templates, units, ... It must be valid XML (write <code>&lt;</code> as <code>&amp;lt;</code> in attributes).</p>
        <textarea id="tInner" class="mono" rows="12" spellcheck="false"></textarea>
        <div id="tDesc"></div>
        <div class="buttons">
          ${isNew ? "" : `<button class="danger" id="btnDelType">Delete</button><button id="btnCopyType">Copy</button>`}
          <span class="spacer"></span>
          <span class="dirty-note" hidden>Unsaved changes</span>
          <button id="btnCancelType">Back</button>
          <button class="primary" id="btnSaveType">${isNew ? "Add event" : "Save event"}</button>
        </div>
      </div>
    </div>`;

  $("#tInner").value = t.inner || "";
  const desc = mdEditor(`Description (${cid}.${isNew ? "<type>" : t.attrs.id}.md)`, t.description ?? "", 16);
  $("#tDesc").appendChild(desc.el);
  if (!isNew && t.description === null) {
    desc.el.insertAdjacentHTML("afterbegin", `<p class="muted small">The description file does not exist yet; saving creates it.</p>`);
  }

  const rows = $("#attrRows");
  const addRow = (k = "", v = "") => {
    const row = document.createElement("div");
    row.className = "attr-row";
    row.innerHTML = `<input type="text" class="mono k" placeholder="name (e.g. comment)" value="${esc(k)}">
                     <input type="text" class="v" placeholder="value" value="${esc(v)}">
                     <button type="button" class="link danger" title="Remove">Remove</button>`;
    $("button", row).addEventListener("click", () => {
      row.remove();
      setDirty(true);
    });
    rows.appendChild(row);
  };
  extras.forEach(([k, v]) => addRow(k, v));
  $("#btnAddAttr").addEventListener("click", () => addRow());
  $("#typeCard").addEventListener("input", () => setDirty(true));
  if (isNew) setDirty(false);

  const collect = () => {
    const extra = {};
    rows.querySelectorAll(".attr-row").forEach(r => {
      const k = $(".k", r).value.trim();
      if (k) extra[k] = $(".v", r).value;
    });
    return {
      id: $("#tId").value,
      name: $("#tName").value,
      token: $("#tToken").value,
      extra,
      inner: $("#tInner").value,
      description: desc.get(),
    };
  };

  $("#btnSaveType").addEventListener("click", async () => {
    if (!$("#tName").value.trim()) {
      toast("The event needs a name", true);
      return;
    }
    try {
      const r = isNew
        ? await api("POST", `/classes/${cid}/types`, collect())
        : await api("PUT", `/classes/${cid}/types/${t.attrs.id}`, collect());
      setDirty(false);
      toast(isNew ? `Event ${cid}.${r.id} added` : "Event saved");
      await loadClasses();
      refreshCounts();
      if (isNew || String(r.id) !== String(t.attrs.id)) navigate(`#/classes/${cid}/types/${r.id}`);
      else showType(cid, r.id);
    } catch (ex) {
      toast(ex.message, true);
    }
  });
  $("#btnCancelType").addEventListener("click", () => navigate(`#/classes/${cid}`));
  if (!isNew) {
    $("#btnDelType").addEventListener("click", async () => {
      if (dirty && !confirm("Discard the unsaved changes?")) return;
      setDirty(false);
      await deleteType(c, t);
      navigate(`#/classes/${cid}`);
    });
    $("#btnCopyType").addEventListener("click", () => {
      if (dirty) {
        toast("Save the event before copying it", true);
        return;
      }
      copyType(c, t);
    });
  }
}

// ---------------------------------------------------------------------------
// New class
// ---------------------------------------------------------------------------

async function newClass() {
  const own = classes.filter(x => !x.error && !x.events);
  const used = new Set(classes.map(c => c.id));
  const body = document.createElement("div");
  body.innerHTML = `
    <div class="fields">
      <label>Class id <input id="ncId" type="text" required placeholder="0-511 Level I, 512- Level II"></label>
      <label>File name part <input id="ncSuffix" type="text" class="mono" placeholder="from the token"></label>
    </div>
    <label>Name <input id="ncName" type="text" required></label>
    <label>Token <input id="ncToken" type="text" class="mono" required placeholder="CLASS1.SOMETHING"></label>
    <label>Alternative token <input id="ncAlt" type="text" class="mono"></label>
    <label>Events
      <select id="ncEvents">
        <option value="">Own events (added after creating the class)</option>
        ${own.map(x => `<option value="${esc(x.file)}">Use the events of ${x.id} ${esc(x.token)}</option>`).join("")}
      </select>
    </label>
    <p class="muted small" id="ncFile"></p>`;
  const upd = () => {
    const id = $("#ncId", body).value.trim();
    let suffix = $("#ncSuffix", body).value.trim().toLowerCase();
    if (!suffix) suffix = ($("#ncToken", body).value.split(".").pop() || "").toLowerCase();
    suffix = suffix.replace(/[^a-z0-9_]+/g, "_").replace(/^_|_$/g, "");
    const taken = id !== "" && used.has(Number(id));
    $("#ncFile", body).innerHTML = taken
      ? `<span class="error">Class ${esc(id)} already exists.</span>`
      : id && suffix ? `Creates <code>class_${esc(id)}_${esc(suffix)}.xml</code> and <code>${esc(id)}.md</code> and adds the class to <code>list_class.xml</code>.` : "";
  };
  body.addEventListener("input", upd);
  let created;
  const ok = await dialog({
    title: "New class",
    body,
    ok: "Create class",
    onOk: async () => {
      const r = await api("POST", "/classes", {
        id: $("#ncId", body).value,
        name: $("#ncName", body).value,
        token: $("#ncToken", body).value,
        "alternative-token": $("#ncAlt", body).value,
        suffix: $("#ncSuffix", body).value,
        events: $("#ncEvents", body).value,
        description: "## Description\n\n",
      });
      created = r.id;
    },
  });
  if (ok && created !== undefined) {
    toast(`Class ${created} created`);
    await loadClasses();
    navigate(`#/classes/${created}`);
    refreshCounts();
  }
}

// ---------------------------------------------------------------------------
// Check
// ---------------------------------------------------------------------------

async function showCheck() {
  const tbody = $("#checkTable tbody");
  tbody.innerHTML = `<tr><td colspan="3"><span class="spinner"></span> Checking...</td></tr>`;
  try {
    const problems = await api("GET", "/check");
    $("#checkCount").textContent = problems.length || "";
    tbody.innerHTML = problems.length ? "" : `<tr><td colspan="3" class="run-ok">No problems found.</td></tr>`;
    for (const p of problems) {
      const tr = document.createElement("tr");
      const m = p.file.match(/^class_(\d+)[._]/) || p.file.match(/^(\d+)(?:\.\d+)?\.md$/);
      const known = m && classes.some(c => c.id == m[1]);
      tr.innerHTML = `<td class="lvl-${p.level}">${p.level}</td>
        <td class="tok">${known ? `<a href="#/classes/${m[1]}">${esc(p.file)}</a>` : esc(p.file)}</td>
        <td>${esc(p.message)}</td>`;
      tbody.appendChild(tr);
    }
  } catch (ex) {
    tbody.innerHTML = `<tr><td colspan="3" class="error">${esc(ex.message)}</td></tr>`;
  }
}

// ---------------------------------------------------------------------------
// Scripts
// ---------------------------------------------------------------------------

let scriptsLoaded = false;
let running = false;

async function showScripts() {
  if (scriptsLoaded) return;
  const info = await api("GET", "/scripts");
  scriptsLoaded = true;
  const tbody = $("#presetTable tbody");
  tbody.innerHTML = "";
  for (const p of info.presets) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${esc(p.title)}</td>
      <td class="tok">${esc(p.script)} ${esc(p.args.join(" "))}</td>
      <td class="tok">${esc(p.writes)}${p.sqlite && !info.have_sqlite3 ? ' <span class="badge warn">sqlite3 not installed</span>' : ""}</td>
      <td class="act"><button data-id="${esc(p.id)}">Run</button></td>`;
    $("button", tr).addEventListener("click", () => runPresets([p]));
    tbody.appendChild(tr);
  }
  $("#btnRunAll").onclick = () => runPresets(info.presets);
  const sel = $("#scriptSelect");
  sel.innerHTML = info.scripts.filter(s => s !== "dowork.sh").map(s => `<option>${esc(s)}</option>`).join("");
}

function setRunning(on) {
  running = on;
  document.querySelectorAll("#view-scripts button").forEach(b => (b.disabled = on));
}

function addRunBox(title) {
  const out = $("#scriptOutput");
  if (out.querySelector(".muted:only-child")) out.innerHTML = "";
  const box = document.createElement("div");
  box.className = "run";
  box.innerHTML = `<div class="run-head"><span class="spinner"></span> <strong>${esc(title)}</strong></div>`;
  out.prepend(box);
  return box;
}

function fillRunBox(box, title, r) {
  const ok = r.returncode === 0;
  box.innerHTML = `
    <div class="run-head">
      <span class="${ok ? "run-ok" : "run-fail"}">${ok ? "OK" : "Failed (" + r.returncode + ")"}</span>
      <strong>${esc(title)}</strong>
      <code>${esc(r.command)}</code>
      <span class="muted">${r.seconds} s</span>
      ${r.saved ? `<span class="muted">→ ${esc(r.saved)}</span>` : ""}
    </div>
    ${r.stdout ? `<pre>${esc(r.stdout)}</pre>` : ""}
    ${r.stderr ? `<pre class="stderr">${esc(r.stderr)}</pre>` : ""}`;
}

async function runPresets(list) {
  if (running) return;
  setRunning(true);
  let failed = 0;
  for (const p of list) {
    const box = addRunBox(p.title);
    try {
      const r = await api("POST", "/scripts/preset", { id: p.id });
      fillRunBox(box, p.title, r);
      if (r.returncode !== 0) failed++;
    } catch (ex) {
      box.innerHTML = `<div class="run-head"><span class="run-fail">Error</span> <strong>${esc(p.title)}</strong> ${esc(ex.message)}</div>`;
      failed++;
    }
  }
  setRunning(false);
  if (list.length > 1) toast(failed ? `${failed} of ${list.length} failed` : `All ${list.length} generators ran`, failed > 0);
}

async function runScript(script, args, title) {
  if (running) return;
  setRunning(true);
  const box = addRunBox(title || script);
  try {
    const r = await api("POST", "/scripts/run", { script, args });
    fillRunBox(box, title || script, r);
  } catch (ex) {
    box.innerHTML = `<div class="run-head"><span class="run-fail">Error</span> <strong>${esc(script)}</strong> ${esc(ex.message)}</div>`;
  }
  setRunning(false);
}

// ---------------------------------------------------------------------------
// Changes
// ---------------------------------------------------------------------------

async function refreshCounts() {
  try {
    const g = await api("GET", "/git");
    $("#changeCount").textContent = g.available && g.files.length ? g.files.length : "";
  } catch {}
}

async function showChanges() {
  const ul = $("#changeList");
  const diff = $("#diffView");
  ul.innerHTML = "";
  diff.textContent = "";
  const g = await api("GET", "/git");
  $("#changeCount").textContent = g.available && g.files.length ? g.files.length : "";
  if (!g.available) {
    ul.innerHTML = `<li class="muted">git is not available.</li>`;
    return;
  }
  if (!g.files.length) {
    ul.innerHTML = `<li class="muted">No changes since the last commit.</li>`;
    return;
  }
  for (const f of g.files) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="st">${esc(f.status)}</span>${esc(f.path.replace(/^classes\//, ""))}`;
    li.addEventListener("click", async () => {
      ul.querySelectorAll("li").forEach(x => x.classList.remove("active"));
      li.classList.add("active");
      if (f.status === "D") {
        diff.textContent = "(deleted)";
        return;
      }
      if (f.path.endsWith("/")) {
        diff.textContent = "(new folder)";
        return;
      }
      try {
        const d = await api("POST", "/git/diff", { path: f.path });
        diff.innerHTML = d.diff.split("\n").map(line => {
          const cls = line.startsWith("@@") ? "hunk" : line.startsWith("+") && !line.startsWith("+++") ? "add"
            : line.startsWith("-") && !line.startsWith("---") ? "del" : "";
          return cls ? `<span class="${cls}">${esc(line)}</span>` : esc(line);
        }).join("\n");
      } catch (ex) {
        diff.textContent = ex.message;
      }
    });
    ul.appendChild(li);
  }
}

// ---------------------------------------------------------------------------
// Routing
// ---------------------------------------------------------------------------

function showView(name) {
  for (const v of ["classes", "check", "scripts", "changes"]) $("#view-" + v).hidden = v !== name;
  document.querySelectorAll("#tabs a").forEach(a => a.classList.toggle("active", a.dataset.tab === name));
}

async function route() {
  const h = location.hash || "#/classes";
  let m;
  if ((m = h.match(/^#\/classes\/(\d+)\/types\/(\d+|new)$/))) {
    showView("classes");
    await showType(m[1], m[2]);
  } else if ((m = h.match(/^#\/classes\/(\d+)$/))) {
    showView("classes");
    await showClass(m[1]);
  } else if (h === "#/check") {
    showView("check");
    await showCheck();
  } else if (h === "#/scripts") {
    showView("scripts");
    await showScripts();
  } else if (h === "#/changes") {
    showView("changes");
    await showChanges();
  } else {
    showView("classes");
    if (!currentClass) $("#classContent").innerHTML = `<div class="empty">Select a class, or create one with <strong>New class</strong>.</div>`;
  }
  currentHash = location.hash;
}

window.addEventListener("hashchange", () => {
  if (ignoreHash) {
    ignoreHash = false;
    return;
  }
  if (dirty && !confirm("You have unsaved changes. Leave without saving?")) {
    ignoreHash = true;
    location.hash = currentHash;
    return;
  }
  setDirty(false);
  route().catch(ex => toast(ex.message, true));
});

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

$("#classFilter").addEventListener("input", renderClassList);
$("#btnNewClass").addEventListener("click", () => {
  if (dirty && !confirm("You have unsaved changes. Continue without saving?")) return;
  newClass();
});
$("#btnCheck").addEventListener("click", showCheck);
$("#btnChanges").addEventListener("click", showChanges);
$("#btnRunScript").addEventListener("click", () => {
  const s = $("#scriptSelect").value;
  if (s) runScript(s, splitArgs($("#scriptArgs").value));
});
$("#btnDowork").addEventListener("click", async () => {
  const host = $("#dwHost").value.trim();
  const user = $("#dwUser").value.trim();
  const pass = $("#dwPass").value;
  if (!host || !user || !pass) {
    toast("dowork.sh needs the FTP host, user and password", true);
    return;
  }
  const ok = await confirmDialog("Run dowork.sh?",
    `<p>This deletes <code>generated/*</code>, uploads all generated files to <code>${esc(host)}</code>
     and copies them into the neighbouring projects. Continue?</p>`, "Run dowork.sh");
  if (!ok) return;
  const args = [host, user, pass];
  if ($("#dwSave").checked) args.push("save");
  await runScript("dowork.sh", args, "dowork.sh (publish)");
  $("#dwPass").value = "";
});

(async () => {
  try {
    await loadClasses();
    await route();
    refreshCounts();
    api("GET", "/check").then(p => ($("#checkCount").textContent = p.length || "")).catch(() => {});
  } catch (ex) {
    $("#classContent").innerHTML = `<div class="empty error">${esc(ex.message)}</div>`;
  }
})();
