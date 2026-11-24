let idx=[];const cache={};
const KEYS=['bg','pn','ink','mu','ln','ac','acf','bl','am','sel'];
export async function init(){idx=window.__THEMES__?window.__THEMES__.index:await (await fetch('themes/index.json')).json();return idx}
export const list=()=>idx;
async function get(id){return cache[id]||(cache[id]=window.__THEMES__?window.__THEMES__[id]:await (await fetch(`themes/${id}.json`)).json())}
export function apply(t){const el=document.documentElement;for(const k of KEYS){t.tokens[k]?el.style.setProperty('--'+k,t.tokens[k]):el.style.removeProperty('--'+k)}el.style.colorScheme=t.scheme||'light';el.dataset.theme=t.id}
export async function load(id,custom){if(id==='auto')id=matchMedia('(prefers-color-scheme: dark)').matches?'dusk':'ledger';const t=id==='custom'&&custom?custom:await get(id);apply(t);return t}
export function parse(text){let t;try{t=JSON.parse(text)}catch{throw Error('That file is not valid JSON. Check commas and quotes.')}
if(!t.name||!t.tokens)throw Error('Theme needs a "name" and a "tokens" object.');
for(const k of ['bg','pn','ink','mu','ln','ac'])if(!t.tokens[k]||!CSS.supports('color',t.tokens[k]))throw Error(`Token "${k}" must be a valid colour, like #1E5B45.`);
return{...t,id:'custom',scheme:t.scheme==='dark'?'dark':'light'}}