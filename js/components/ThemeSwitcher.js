import {h,icon} from '../core/dom.js';import {state,set} from '../core/store.js';import {list,parse} from '../core/themes.js';
const sw=t=>h('span',{class:'sw','aria-hidden':'true'},...(t.sw||[]).map(c=>h('i',{style:`background:${c}`})));
export function ThemeSwitcher(){const d=h('details',{class:'tm'}),c=state.custom;
const items=[...list(),{id:'auto',name:'Match device'},...(c?[{id:'custom',name:c.name,sw:[c.tokens.bg,c.tokens.ink,c.tokens.ac]}]:[])];
const file=h('input',{type:'file',accept:'.json,application/json',hidden:true,onchange:async e=>{const f=e.target.files[0];if(!f)return;try{set({custom:parse(await f.text()),theme:'custom',themeError:''})}catch(x){set({themeError:x.message})}}});
d.append(h('summary',{class:'sbtn'},'Theme'),h('div',{class:'menu',role:'menu'},...items.map(t=>h('button',{class:'mi',role:'menuitemradio','aria-checked':state.theme===t.id,onclick:()=>{d.open=false;set({theme:t.id,themeError:''})}},sw(t),t.name)),h('button',{class:'mi',role:'menuitem',onclick:()=>file.click()},'Load theme file…'),file,state.themeError?h('div',{class:'err',role:'alert'},state.themeError):null));
if(state.themeError)d.open=true;return d}