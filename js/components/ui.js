import {h,icon} from '../core/dom.js';
export const Kpi=(i,v,l,s,o={})=>h('div',{class:'kpi rise'},h('div',{class:'ki'},icon(i)),h('div',{},h('b',{class:'n '+(o.c||''),...(o.to!=null?{'data-to':o.to,'data-dec':o.dec||0,'data-pre':o.pre||'','data-suf':o.suf||''}:{})},v),h('span',{},l),h('small',{},s)));
export const Panel=(t,link,body,cls='')=>h('section',{class:'panel rise'},h('div',{class:'ph'},h('h3',{},t),link),h('div',{class:'pb '+cls},body));
export const Box=(i,t,p,href)=>h('a',{class:'box rise',href:'#'+href},h('div',{class:'ki'},icon(i)),h('b',{},t),h('p',{},p),h('span',{class:'lk'},'Open'));
export const More=(href,t)=>h('a',{class:'pl',href:'#'+href},t);
export const arrow=v=>v==null?'—':(v>0?'▲ ':v<0?'▼ ':'')+Math.abs(v)+'%';
export const Skeleton=()=>h('div',{class:'vw',style:'padding:0;gap:18px','aria-busy':'true','aria-label':'Loading'},h('div',{class:'sk',style:'height:180px'}),h('div',{class:'kpis'},...[0,1,2,3].map(i=>h('div',{class:'sk',style:`height:76px;animation-delay:${i*.1}s`}))),h('div',{class:'sk',style:'height:260px;animation-delay:.2s'}));