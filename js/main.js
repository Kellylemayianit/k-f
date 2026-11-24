import {Topbar} from './components/Topbar.js';import {BottomNav} from './components/BottomNav.js';import {mountPalette} from './components/SearchPalette.js';import {Desk} from './views/Desk.js';import {Compare} from './views/Compare.js';
import {SPRITE} from './core/dom.js';import {state,set,subscribe} from './core/store.js';import {onRoute} from './core/router.js';import {init,load} from './core/themes.js';
const app=document.getElementById('app');let route,key='';
function render(){const k=document.activeElement?.dataset?.fk;app.replaceChildren(Topbar(route),route.path==='/compare'?Compare(route):Desk(route),BottomNav(route));if(k)app.querySelector(`[data-fk="${k}"]`)?.focus();document.title=(route.path==='/compare'?'Compare':'Desk')+' · Research desk'}
async function sync(){const k=state.theme+JSON.stringify(state.custom);if(k===key)return;key=k;try{await load(state.theme,state.custom)}catch{set({theme:'ledger'})}}
(async()=>{await init();document.body.insertAdjacentHTML('afterbegin',SPRITE);await sync();mountPalette();
subscribe(async()=>{await sync();render()});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(state.theme==='auto'){key='';sync()}});
matchMedia('(max-width:720px)').addEventListener('change',()=>render());
let lp;onRoute(r=>{route=r;set(lp!==r.path?{filtersOpen:false}:{});lp=r.path})})();