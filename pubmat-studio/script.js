const $=s=>document.querySelector(s);
const esc=s=>s.replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
function poster(w,big){
  if(w.id){
    const src="https://drive.google.com/thumbnail?id="+encodeURIComponent(w.id)+"&sz="+(big?"w1600":"w1000");
    return `<div class="poster img"><img src="${src}" alt="${esc(w.t)}" referrerpolicy="no-referrer"></div>`;
  }
  return `<div class="poster ${w.s}" style="--pbg:${w.c[0]};--pfg:${w.c[1]};--pac:${w.c[2]};--pac2:${w.c[3]}">
    <div class="s2"></div><div class="s1"></div>
    <div class="k">${esc(w.k)}</div><div class="t">${esc(w.t)}</div>
    <div class="m"><span>${esc(w.d)}</span><span>${esc(w.v)}</span></div></div>`;
}
$("#fan").innerHTML=WORKS.slice(0,3).map(w=>poster(w)).join("");
watchImages($("#fan"));

/* Photos: detect landscape, then size every card so rows stay tidy */
const ROW=10,GAP=24;
function layout(){
  document.querySelectorAll("#grid .card").forEach(c=>{
    c.style.gridRowEnd="span "+Math.ceil((c.offsetHeight+GAP)/ROW);
  });
}
function watchImages(root,onWide){
  root.querySelectorAll("img").forEach(img=>{
    const done=()=>{
      img.parentElement.classList.add("loaded");
      const wide=img.naturalWidth>img.naturalHeight*1.15;
      const card=img.closest(".card");
      if(card)card.classList.toggle("wide",wide);
      if(onWide)onWide(wide);
      layout();
    };
    const fail=()=>{
      img.parentElement.classList.add("loaded","broken");
      img.parentElement.innerHTML="<span>Image not showing. Check that the Drive file is shared as Anyone with the link, and that the ID is correct.</span>";
      layout();
    };
    if(img.complete&&img.naturalWidth)done();
    else if(img.complete)fail();
    else{img.addEventListener("load",done);img.addEventListener("error",fail);}
  });
}
addEventListener("resize",layout);

const kinds=["All",...new Set(WORKS.map(w=>w.kind))];
let active="All";
function renderFilters(){
  $("#filters").innerHTML=kinds.map(k=>`<button class="chip" aria-pressed="${k===active}" data-k="${k}">${k}</button>`).join("");
}
function renderGrid(){
  const list=WORKS.map((w,i)=>({w,i})).filter(o=>active==="All"||o.w.kind===active);
  $("#grid").innerHTML=list.map((o,n)=>`<button class="card rise" style="animation-delay:${n*50}ms" data-i="${o.i}" aria-label="Open ${esc(o.w.t)}">
    ${poster(o.w)}<div class="cap"><span>${esc(o.w.t)}</span><span>${esc(o.w.kind)}</span></div></button>`).join("");
  watchImages($("#grid"));
  layout();
}
$("#filters").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;active=b.dataset.k;renderFilters();renderGrid();
document.fonts&&document.fonts.ready.then(layout);});
let lastFocus=null;
function openLb(i){lastFocus=document.activeElement;const w=WORKS[i];
  $("#lb").classList.remove("wide");
  $("#lbposter").innerHTML=poster(w,true);
  watchImages($("#lbposter"),wide=>$("#lb").classList.toggle("wide",wide));
  $("#lbtitle").textContent=w.t;$("#lb").hidden=false;$("#lbx").focus();}
function closeLb(){$("#lb").hidden=true;if(lastFocus)lastFocus.focus();}
$("#grid").addEventListener("click",e=>{const c=e.target.closest(".card");if(c)openLb(+c.dataset.i);});
$("#lbx").addEventListener("click",closeLb);
$("#lb").addEventListener("click",e=>{if(e.target.id==="lb")closeLb();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#lb").hidden)closeLb();});

document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",async()=>{
  const el=document.getElementById(b.dataset.t);
  try{await navigator.clipboard.writeText(el.textContent);b.textContent="Copied";}
  catch(_){const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent="Selected";}
  setTimeout(()=>b.textContent="Copy",1600);
}));
renderFilters();renderGrid();
document.fonts&&document.fonts.ready.then(layout);