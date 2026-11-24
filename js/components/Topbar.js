import {h,icon} from '../core/dom.js';import {set} from '../core/store.js';import {ThemeSwitcher} from './ThemeSwitcher.js';
const lk=(r,p,t)=>h('a',{href:'#'+p,class:'lk'+(r.path===p?' on':''),'aria-current':r.path===p?'page':null},t);
export const Topbar=r=>h('header',{class:'tb'},h('b',{class:'brand'},'Research desk'),h('nav',{class:'nav','aria-label':'Main'},lk(r,'/desk','Desk'),lk(r,'/compare','Compare')),
h('button',{class:'sf','aria-label':'Search assets and networks',onclick:()=>set({searchOpen:true})},icon('s'),h('span',{},'Search assets and networks'),h('kbd',{class:'n'},'Ctrl K')),
h('span',{class:'mu'},'Sample data'),ThemeSwitcher());