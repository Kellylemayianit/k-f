import {h,icon} from '../core/dom.js';import {state,set} from '../core/store.js';import {go} from '../core/router.js';import {ASSETS,FACETS,LABEL} from '../data/sample.js';import {readFilters,results,counts,toggle} from '../core/filters.js';
export const chg=a=>a.chg==null?'—':(a.chg>0?'▲ ':'▼ ')+Math.abs(a.chg)+'%';
export function Watchlist(route){
const q=route.q,f=readFilters(q),rows=results(f),n=Object.values(f).flat().length,sel=q.get('sel')||'EURUSD',nav=p=>go('/desk',p);
const facet=(k,t)=>{const c=counts(f,k);return h('div',{class:'fg'},h('div',{class:'mu'},t),h('div',{class:'fr'},...FACETS[k].map(v=>{const on=f[k].includes(v);return h('button',{class:'chip'+(on?' on':''),'aria-pressed':on,'data-fk':k+v,disabled:!c[v]&&!on,onclick:()=>nav(toggle(q,k,v))},`${LABEL[v]} ${c[v]}`)})))};
const pills=Object.entries(f).flatMap(([k,vs])=>vs.map(v=>h('button',{class:'chip','aria-label':`Remove filter ${LABEL[v]}`,'data-fk':'p'+k+v,onclick:()=>nav(toggle(q,k,v))},LABEL[v],icon('x'))));
const clear=()=>{const p=new URLSearchParams();q.get('sel')&&p.set('sel',sel);nav(p)};
const row=a=>{const sv=state.watch.includes(a.id),cm=state.compare.includes(a.id);return h('div',{class:'rw'+(a.id===sel?' sel':'')},
h('button',{class:'ib st'+(sv?' on':''),'aria-pressed':sv,'aria-label':`Save ${a.sym}`,'data-fk':'s'+a.id,onclick:()=>set({watch:sv?state.watch.filter(x=>x!==a.id):[...state.watch,a.id]})},icon('st')),
h('button',{class:'nm','data-fk':'n'+a.id,'aria-current':a.id===sel?'true':null,onclick:()=>{const p=new URLSearchParams(q);p.set('sel',a.id);nav(p)}},h('b',{},a.sym),h('span',{class:'mu'},a.name)),
h('span',{class:'n'},a.last),h('span',{class:'n '+(a.chg>0?'up':'dn')},chg(a)),
h('button',{class:'cb'+(cm?' on':''),role:'checkbox','aria-checked':cm,'aria-label':`Compare ${a.sym}`,'data-fk':'c'+a.id,disabled:!cm&&state.compare.length>=4,onclick:()=>set({compare:cm?state.compare.filter(x=>x!==a.id):[...state.compare,a.id]})},cm?icon('ck'):null))};
const byId=id=>ASSETS.find(a=>a.id===id);
return h('div',{class:'stack'},
h('section',{class:'pn flush'},h('div',{class:'pad'},h('div',{class:'hd'},h('b',{},'Watchlist'),h('span',{class:'mu'},`${rows.length} of ${ASSETS.length}`),h('button',{class:'btn fbtn','data-fk':'fb',onclick:()=>set({filtersOpen:!state.filtersOpen})},icon('f'),`Filter (${n})`)),
h('div',{class:'facets'+(state.filtersOpen?' open':'')},facet('cls','Asset class'),facet('bias','Bias'),facet('src','Data source'),h('button',{class:'btn p done',onclick:()=>set({filtersOpen:false})},`Show ${rows.length} results`)),
n?h('div',{class:'fr'},...pills,h('button',{class:'lnk',onclick:clear},'Clear all')):null),
rows.length?h('div',{},...rows.map(row)):h('div',{class:'pad mu'},'No assets match these filters. Remove a filter to see more.')),
h('section',{class:'pn'},h('div',{class:'hd'},h('b',{},'Compare'),h('span',{class:'mu'},`${state.compare.length} of 4`)),h('div',{class:'fr'},...state.compare.map(id=>h('button',{class:'chip','aria-label':`Remove ${byId(id).sym}`,'data-fk':'t'+id,onclick:()=>set({compare:state.compare.filter(x=>x!==id)})},byId(id).sym,icon('x')))),
h('button',{class:'btn p',disabled:state.compare.length<2,onclick:()=>go('/compare')},`Compare ${state.compare.length}`)))}