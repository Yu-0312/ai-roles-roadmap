/* AI 新興職位學習路線 — 共用程式
 * 職位資料在 assets/roles/*.js,每個檔案呼叫 registerRole({...})。
 * 進度只存在瀏覽器 localStorage(鍵名 ai-roles:<職位 id>)。 */
(function(){
'use strict';
const ROLES = window.ROLES || [];
const byId = id => ROLES.find(r => r.id === id);
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

const FIT = {
  engineer:'軟體工程師', data:'資料 / 分析', ops:'維運 / DevOps', security:'資安',
  pm:'產品經理', design:'設計 / UX', biz:'業務 / 顧問', legal:'法務 / 合規',
  domain:'領域專家', none:'非技術新手'
};
const LEVEL = {1:'低', 2:'中', 3:'高'};
const CAT = {tech:'技術', hybrid:'技術 × 商業', nontech:'非技術為主'};

/* ---------- 儲存 ---------- */
const KEY = id => 'ai-roles:' + id;
function load(id){
  try{
    const raw = localStorage.getItem(KEY(id));
    if(raw){ const s = JSON.parse(raw); return {done:s.done||{}, start:s.start||''}; }
    if(id === 'fde'){ // 沿用舊版 FDE 單頁的進度
      const old = localStorage.getItem('fde-roadmap-v1');
      if(old){ const s = JSON.parse(old); return {done:s.done||{}, start:s.start||''}; }
    }
  }catch(e){}
  return {done:{}, start:''};
}
function save(id, st){ try{ localStorage.setItem(KEY(id), JSON.stringify(st)); }catch(e){} }

function taskIds(role){
  const ids = [];
  role.stages.forEach(st => {
    st.items.forEach((it,i) => it.tasks.forEach((_,j) => ids.push(`${st.id}-${i}-${j}`)));
    if(st.extra) st.extra.tasks.forEach((_,j) => ids.push(`${st.id}-x-${j}`));
  });
  return ids;
}
function progress(role, st){
  const ids = taskIds(role), d = ids.filter(i => st.done[i]).length;
  return {d, t:ids.length, p: ids.length ? Math.round(d / ids.length * 100) : 0};
}
const wkLabel = w => w[0] === w[1] ? `第 ${w[0]} 週` : `第 ${w[0]}–${w[1]} 週`;
const lvlDots = n => '●'.repeat(n) + '○'.repeat(3 - n);

/* ---------- 深淺色 ---------- */
try{ const t = localStorage.getItem('ai-roles-theme'); if(t) document.documentElement.setAttribute('data-theme', t); }catch(e){}
function bindTheme(){
  const b = $('#theme'); if(!b) return;
  b.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const dark = cur ? cur === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try{ localStorage.setItem('ai-roles-theme', next); }catch(e){}
  });
}

/* ---------- 匯出 / 匯入 ---------- */
function download(obj, name){
  const blob = new Blob([JSON.stringify(obj, null, 2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
function exportAll(){
  const out = {version:2, roles:{}};
  ROLES.forEach(r => { const s = load(r.id); if(Object.keys(s.done).length || s.start) out.roles[r.id] = s; });
  download(out, 'ai-roles-progress.json');
}
function importFile(file, done){
  const fr = new FileReader();
  fr.onload = () => {
    try{
      const s = JSON.parse(fr.result);
      if(s && s.roles){ Object.entries(s.roles).forEach(([id, v]) => { if(byId(id)) save(id, {done:v.done||{}, start:v.start||''}); }); }
      else if(s && s.done){ save('fde', {done:s.done, start:s.start||''}); } // 舊版 FDE 檔
      else throw 0;
      done();
    }catch(_){ alert('檔案格式不正確'); }
  };
  fr.readAsText(file);
}

/* =================================================================
 * 首頁
 * ================================================================= */
function renderHub(){
  const grid = $('#grid'), info = $('#filterInfo');
  let fit = 'all', sort = 'default';

  $('#chips').innerHTML = `<button data-fit="all" aria-pressed="true">全部</button>` +
    Object.entries(FIT).map(([k,v]) => `<button data-fit="${k}" aria-pressed="false">${v}</button>`).join('');

  function draw(){
    let list = ROLES.filter(r => fit === 'all' || r.fit.includes(fit));
    if(sort === 'weeks') list = [...list].sort((a,b) => a.weeks - b.weeks);
    if(sort === 'level') list = [...list].sort((a,b) => a.level - b.level || a.weeks - b.weeks);
    if(sort === 'progress') list = [...list].sort((a,b) => progress(b, load(b.id)).p - progress(a, load(a.id)).p);
    info.textContent = fit === 'all' ? `共 ${ROLES.length} 個職位` : `適合「${FIT[fit]}」背景:${list.length} 個職位`;
    grid.innerHTML = list.length ? list.map(r => {
      const pr = progress(r, load(r.id));
      return `<a class="card rcard" href="role.html?r=${r.id}">
        <div><h3>${r.name}</h3><div class="en">${r.en}</div></div>
        <p>${r.tagline}</p>
        <div class="meta"><span class="pill strong">${CAT[r.category]}</span><span class="pill">${r.weeks} 週</span><span class="pill">技術門檻 <span class="lvl">${lvlDots(r.level)}</span></span></div>
        <div class="prog"><span>${pr.d ? '進行中' : '尚未開始'}</span><span>${pr.d}/${pr.t} · ${pr.p}%</span></div>
        <div class="bar thin"><i style="width:${pr.p}%"></i></div>
      </a>`;
    }).join('') : `<div class="empty card">這個背景目前沒有對應職位。</div>`;
  }

  $('#chips').addEventListener('click', e => {
    const b = e.target.closest('button[data-fit]'); if(!b) return;
    fit = b.dataset.fit;
    $$('#chips button').forEach(x => x.setAttribute('aria-pressed', x === b));
    draw();
  });
  $('#sort').addEventListener('change', e => { sort = e.target.value; draw(); });

  $('#compare').innerHTML = ROLES.map(r => `<tr>
    <td><a href="role.html?r=${r.id}">${r.name}</a><div class="note">${r.en}</div></td>
    <td>${r.tagline}</td>
    <td><span class="lvl">${lvlDots(r.level)}</span> ${LEVEL[r.level]}</td>
    <td>${r.fit.map(f => FIT[f]).join('、')}</td>
    <td>${r.weeks} 週</td></tr>`).join('');

  $('#exportAll').addEventListener('click', exportAll);
  $('#importAll').addEventListener('click', () => $('#importFile').click());
  $('#importFile').addEventListener('change', e => { const f = e.target.files[0]; if(f) importFile(f, draw); e.target.value = ''; });
  draw();
}

/* =================================================================
 * 職位頁
 * ================================================================= */
function renderRole(){
  const id = new URLSearchParams(location.search).get('r');
  const role = byId(id);
  if(!role){
    $('#app').innerHTML = `<div class="card pad" style="margin-top:40px">找不到這個職位。<a href="index.html">回到全部職位</a></div>`;
    return;
  }
  document.title = `${role.name}學習路線 · AI 新興職位`;
  let state = load(role.id);
  const N = role.weeks;

  const currentWeek = () => {
    if(!state.start) return 0;
    const d = new Date(state.start + 'T00:00:00'); if(isNaN(d)) return 0;
    return Math.floor((Date.now() - d.getTime()) / (7 * 864e5)) + 1;
  };

  /* --- 靜態區塊 --- */
  const ov = role.overview;
  $('#app').innerHTML = `
  <nav class="crumb"><a href="index.html">← 全部 AI 新興職位</a></nav>
  <header class="hero">
    <h1>${role.name}</h1>
    <p class="en">${role.en}</p>
    <p class="lead">${role.tagline}</p>
    <div class="pills"><span class="pill strong">${CAT[role.category]}</span><span class="pill">${N} 週</span>
      <span class="pill">技術門檻 <span class="lvl">${lvlDots(role.level)}</span> ${LEVEL[role.level]}</span>
      ${role.fit.map(f => `<span class="pill">適合:${FIT[f]}</span>`).join('')}</div>
    <div class="toolbar">
      <label class="inline">開始日期 <input type="date" id="start" aria-label="學習開始日期"></label>
      <button id="toggleDone" aria-pressed="false">只看未完成</button>
      <button id="expand">全部展開</button>
      <button id="exportBtn">匯出進度</button>
      <button id="importBtn">匯入進度</button>
      <button id="resetBtn">重設此職位</button>
      <button id="theme" aria-label="切換深淺色">深淺色</button>
      <input type="file" id="importFile" accept="application/json" hidden>
    </div>
  </header>
  <div class="sticky" role="status" aria-live="polite">
    <div class="row"><span>總進度 <b id="pct">0%</b>(<b id="cnt">0/0</b> 項)</span><span id="weekInfo"></span></div>
    <div class="bar"><i id="fill"></i></div>
  </div>

  <h2>職位概覽</h2>
  <div class="ov">
    <div class="card pad full"><h3>這個職位在做什麼</h3><p>${ov.what}</p></div>
    <div class="card pad"><h3>日常工作</h3><ul>${ov.daily.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div class="card pad"><h3>核心技能</h3><ul>${ov.skills.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div class="card pad"><h3>誰適合轉入</h3><p>${ov.entry}</p></div>
    <div class="card pad"><h3>薪資與需求參考</h3><p>${ov.pay}</p></div>
    ${ov.prereq ? `<div class="card pad full"><h3>開始前你需要</h3><p>${ov.prereq}</p></div>` : ''}
  </div>

  <h2>時間表</h2>
  <div class="card gantt"><div class="g-grid" id="gantt"></div>
    <p class="g-note">點擊色條可跳到該階段,色條內深色為完成比例。${role.marker ? `橘色虛線:第 ${role.marker.week} 週起${role.marker.label}。` : ''}設定開始日期後,最下排會標出本週。</p></div>

  <h2>學習流程</h2>
  <div id="stages"></div>

  ${(role.tables||[]).map(t => `<h2>${t.title}</h2><div class="card tbl"><table>
    <thead><tr>${t.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
    ${t.note ? `<p class="note">${t.note}</p>` : ''}`).join('')}

  <h2>資源清單</h2>
  <div class="card tbl"><table><thead><tr><th>階段</th><th>資源</th><th>用途</th></tr></thead><tbody>
    ${role.resources.map(r => `<tr><td>${r.stage}</td><td>${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${r.name}</a>` : r.name}</td><td>${r.use}</td></tr>`).join('')}
  </tbody></table></div>
  <p class="note">課程內容與價格請自行確認。</p>

  ${role.related && role.related.length ? `<h2>相關職位</h2><div class="related">${role.related.map(rid => byId(rid)).filter(Boolean).map(r => `<a href="role.html?r=${r.id}">${r.name}</a>`).join('')}</div>` : ''}

  <h2>資料來源</h2>
  <ul class="src">${role.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>${s.note ? `(${s.note})` : ''}</li>`).join('')}</ul>
  <p class="note">資料整理於 2026 年 10 月。薪資與比例多來自非官方統計或業者部落格,僅供參考;實際要求以各公司職缺為準。</p>
  <footer>進度只存在這台瀏覽器的 localStorage,換裝置請用「匯出進度」。</footer>`;

  /* --- 動態區塊 --- */
  const taskHTML = (tid, text) =>
    `<label class="task${state.done[tid] ? ' done' : ''}"><input type="checkbox" data-id="${tid}"${state.done[tid] ? ' checked' : ''}><span>${text}</span></label>`;

  function renderStages(){
    const cw = currentWeek();
    $('#stages').innerHTML = role.stages.map(st => {
      const weeks = st.items.map((it,i) => {
        const now = cw && cw >= it.w[0] && cw <= it.w[1];
        const ids = it.tasks.map((_,j) => `${st.id}-${i}-${j}`);
        const all = ids.every(x => state.done[x]);
        return `<section class="week${now ? ' now' : ''}${all ? ' all-done' : ''}" id="${st.id}-w${i}">
          <h3>${it.title}<span class="wk">${wkLabel(it.w)}${now ? ' · 本週' : ''}</span></h3>
          ${it.tasks.map((t,j) => taskHTML(ids[j], t)).join('')}
          ${it.accept ? `<p class="accept"><b>驗收:</b>${it.accept}</p>` : ''}</section>`;
      }).join('');
      const extra = st.extra ? `<section class="week"><h3>${st.extra.title}</h3>${st.extra.tasks.map((t,j) => taskHTML(`${st.id}-x-${j}`, t)).join('')}</section>` : '';
      const stageNow = cw && cw >= st.range[0] && cw <= st.range[1];
      return `<details class="card stage" id="${st.id}"${stageNow ? ' open' : ''}>
        <summary><div class="s-top"><div class="s-title">${st.name}:${st.title}<small>${wkLabel(st.range)}${st.note ? '(' + st.note + ')' : ''}</small>${stageNow ? '<span class="badge">本週</span>' : ''}</div><span class="s-prog" data-prog="${st.id}"></span></div>
        <div class="bar"><i data-fill="${st.id}"></i></div></summary>
        <div class="s-body"><p class="goal">${st.goal}</p>${weeks}${extra}${st.output ? `<p class="output"><b>階段產出:</b>${st.output}</p>` : ''}</div></details>`;
    }).join('');
  }

  function renderGantt(){
    const cw = currentWeek(), g = $('#gantt');
    g.style.gridTemplateColumns = `120px repeat(${N}, minmax(${N > 16 ? 22 : 28}px, 1fr))`;
    g.style.minWidth = (120 + N * (N > 16 ? 26 : 32)) + 'px';
    let h = '<div></div>';
    for(let w = 1; w <= N; w++) h += `<div class="g-h">${w}</div>`;
    role.stages.forEach(st => {
      h += `<div class="g-name" title="${st.name} ${st.title}">${st.name} ${st.short}</div>`;
      for(let w = 1; w <= N; w++){
        if(w === st.range[0]){
          const span = st.range[1] - st.range[0] + 1;
          h += `<a class="g-bar" href="#${st.id}" data-open="${st.id}" style="grid-column:span ${span}" aria-label="${st.name} ${wkLabel(st.range)}"><i data-gfill="${st.id}" style="width:0"></i><span>${st.range[0]}–${st.range[1]}</span></a>`;
          w = st.range[1];
        } else h += '<div class="g-cell"></div>';
      }
    });
    h += `<div class="g-name" style="color:var(--warn)">${role.marker ? role.marker.short + ' · ' : ''}本週</div>`;
    for(let w = 1; w <= N; w++){
      const m = role.marker && w === role.marker.week;
      h += `<div class="g-cell" style="height:14px;${m ? 'border-left:2px dashed var(--warn);' : ''}">${w === cw ? '<div class="mark-now"></div>' : ''}</div>`;
    }
    g.innerHTML = h;
  }

  function updateProgress(){
    let total = 0, done = 0;
    role.stages.forEach(st => {
      const ids = taskIds({stages:[st]}), d = ids.filter(x => state.done[x]).length;
      total += ids.length; done += d;
      const p = ids.length ? Math.round(d / ids.length * 100) : 0;
      const f = $(`[data-fill="${st.id}"]`); if(f) f.style.width = p + '%';
      const gf = $(`[data-gfill="${st.id}"]`); if(gf) gf.style.width = p + '%';
      const t = $(`[data-prog="${st.id}"]`); if(t) t.textContent = `${d}/${ids.length} · ${p}%`;
    });
    const p = total ? Math.round(done / total * 100) : 0;
    $('#pct').textContent = p + '%'; $('#cnt').textContent = `${done}/${total}`; $('#fill').style.width = p + '%';
    const cw = currentWeek();
    $('#weekInfo').textContent = !state.start ? '尚未設定開始日期' : cw < 1 ? '尚未開始' : cw > N ? `已超過 ${N} 週(第 ${cw} 週)` : `現在是第 ${cw} 週`;
  }
  function refreshWeekDone(){
    role.stages.forEach(st => st.items.forEach((it,i) => {
      const el = document.getElementById(`${st.id}-w${i}`); if(!el) return;
      el.classList.toggle('all-done', it.tasks.every((_,j) => state.done[`${st.id}-${i}-${j}`]));
    }));
  }
  function draw(keepOpen){
    const open = keepOpen ? $$('details.stage').filter(d => d.open).map(d => d.id) : null;
    $('#start').value = state.start || '';
    renderStages(); renderGantt();
    if(open) $$('details.stage').forEach(d => { d.open = open.includes(d.id) || d.open; });
    updateProgress();
  }

  document.addEventListener('change', e => {
    const t = e.target;
    if(t.matches('input[data-id]')){
      if(t.checked) state.done[t.dataset.id] = true; else delete state.done[t.dataset.id];
      t.closest('.task').classList.toggle('done', t.checked);
      save(role.id, state); refreshWeekDone(); updateProgress();
    }
  });
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-open]');
    if(a){ const d = document.getElementById(a.dataset.open); if(d) d.open = true; }
  });
  $('#start').addEventListener('change', e => { state.start = e.target.value; save(role.id, state); draw(true); });
  $('#toggleDone').addEventListener('click', e => {
    const on = document.body.classList.toggle('hide-done');
    e.target.setAttribute('aria-pressed', on); e.target.textContent = on ? '顯示全部' : '只看未完成';
  });
  let expanded = false;
  $('#expand').addEventListener('click', e => {
    expanded = !expanded; $$('details.stage').forEach(d => d.open = expanded);
    e.target.textContent = expanded ? '全部收合' : '全部展開';
  });
  $('#exportBtn').addEventListener('click', () => download({version:2, roles:{[role.id]:state}}, `${role.id}-progress.json`));
  $('#importBtn').addEventListener('click', () => $('#importFile').click());
  $('#importFile').addEventListener('change', e => {
    const f = e.target.files[0]; if(!f) return;
    importFile(f, () => { state = load(role.id); draw(true); }); e.target.value = '';
  });
  $('#resetBtn').addEventListener('click', () => {
    if(confirm(`確定清除「${role.name}」的所有進度?`)){ state = {done:{}, start:''}; save(role.id, state); draw(true); }
  });
  bindTheme();
  draw(false);
  if(location.hash){ const d = document.getElementById(location.hash.slice(1)); if(d && d.tagName === 'DETAILS'){ d.open = true; d.scrollIntoView(); } }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if(page === 'hub'){ bindTheme(); renderHub(); }
  if(page === 'role') renderRole();
});
})();
