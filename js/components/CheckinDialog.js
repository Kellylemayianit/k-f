import {h} from '../core/dom.js';import {state,set,subscribe} from '../core/store.js';import {toast} from './Toast.js';
export function mountDialog(){
const sel=h('select',{id:'ds'},...['Unchanged','Stronger','Weaker','Invalidated'].map(x=>h('option',{},x))),ta=h('textarea',{id:'dn',rows:4,placeholder:'What changed this week? Data, positioning, levels.'}),err=h('div',{class:'err2',role:'alert'});
const d=h('dialog',{class:'dlg','aria-labelledby':'dt'},h('h2',{id:'dt'},'Add a check-in'),h('div',{class:'field'},h('label',{for:'ds'},'Is your view still right?'),sel),h('div',{class:'field'},h('label',{for:'dn'},'Notes'),ta,err),
h('div',{class:'acts'},h('button',{class:'cta l',onclick:()=>set({dlg:false})},'Cancel'),h('button',{class:'cta',onclick:()=>{if(ta.value.trim().length<3){err.textContent='Write a few words about what changed.';ta.focus();return}
set({checkins:[{label:new Date().toLocaleDateString('en-KE',{day:'numeric',month:'short'}),status:sel.value,note:ta.value.trim()},...state.checkins],dlg:false});ta.value='';err.textContent='';toast('Check-in saved')}},'Save check-in')));
d.addEventListener('close',()=>{if(state.dlg)set({dlg:false})});d.addEventListener('click',e=>{if(e.target===d)set({dlg:false})});document.body.append(d);
subscribe(s=>{if(s.dlg&&!d.open){err.textContent='';d.showModal();ta.focus()}else if(!s.dlg&&d.open)d.close()})}