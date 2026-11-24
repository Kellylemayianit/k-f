import {h} from '../core/dom.js';import {state,set,subscribe} from '../core/store.js';import {go} from '../core/router.js';import {ASSETS,NETS} from '../data/sample.js';import {NAV} from './Sidebar.js';
export function mountPalette(){
const root=h('div',{class:'pal',hidden:true,role:'dialog','aria-modal':'true','aria-label':'Search'});let i=0,items=[],was=false;
const input=h('input',{class:'pi',role:'combobox','aria-expanded':'true','aria-controls':'pl',placeholder:'Search pages, assets and networks',autocomplete:'off'}),list=h('div',{id:'pl',role:'listbox'});
const close=()=>set({searchOpen:false});
const pick=x=>{close();go(x.to,x.q?new URLSearchParams(x.q):null)};
const all=()=>[...NAV.flatMap(([g,its])=>its.map(([p,,t])=>({l:t,s:'Page',to:p}))),...ASSETS.filter(a=>a.cls!=='crypto').map(a=>({l:a.sym,s:a.name,to:'/dollar',q:{sel:a.id}})),...NETS.map(n=>({l:n.name,s:'Network',to:'/networks'}))];
const draw=()=>{const t=input.value.trim().toLowerCase();items=all().filter(x=>!t||(x.l+' '+x.s).toLowerCase().includes(t)).slice(0,9);i=Math.min(i,Math.max(items.length-1,0));
list.replaceChildren(...(items.length?items.map((x,j)=>h('div',{role:'option',id:'o'+j,class:'op'+(j===i?' on':''),'aria-selected':j===i,onclick:()=>pick(x)},h('b',{},x.l),h('span',{class:'mu'},x.s))):[h('div',{class:'empty'},`No match for "${input.value}". Try EUR, Base, or thesis.`)]));input.setAttribute('aria-activedescendant','o'+i)};
input.addEventListener('input',()=>{i=0;draw()});
input.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){i=Math.min(i+1,items.length-1);draw();e.preventDefault()}else if(e.key==='ArrowUp'){i=Math.max(i-1,0);draw();e.preventDefault()}else if(e.key==='Enter'&&items[i])pick(items[i]);else if(e.key==='Escape')close()});
root.append(h('div',{class:'box2'},input,list));root.addEventListener('mousedown',e=>{if(e.target===root)close()});document.body.append(root);
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();set({searchOpen:!state.searchOpen})}});
subscribe(s=>{if(s.searchOpen===was)return;was=s.searchOpen;root.hidden=!was;if(was){input.value='';i=0;draw();input.focus()}})}