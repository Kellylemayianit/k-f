let idx=[];const cache={};
const KEYS=['bg','sb','card','c2','ink','mu','ln','ac','acf','hot','up','dn','sbi','sa'];
export async function init(){idx=window.__THEMES__?window.__THEMES__.index:await (await fetch('themes/index.json')).json();return idx}
export const list=()=>idx;
async function get(id){return cache[id]||(cache[id]=window.__THEMES__?window.__THEMES__[id]:await (await fetch(`themes/${id}.json`)).json())}
export function apply(t){const el=document.documentElement;el.classList.add('theming');for(const k of KEYS){t.tokens[k]?el.style.setProperty('--'+k,t.tokens[k]):el.style.removeProperty('--'+k)}el.style.colorScheme=t.scheme||'dark';el.dataset.theme=t.id;setTimeout(()=>el.classList.remove('theming'),450)}
export async function load(id,custom){if(id==='auto')id=matchMedia('(prefers-color-scheme: dark)').matches?'harbor':'ledger';const t=id==='custom'&&custom?custom:await get(id);apply(t);return t}
export function parse(text){let t;try{t=JSON.parse(text)}catch{throw Error('That file is not valid JSON. Check commas and quotes.')}
if(!t.name||!t.tokens)throw Error('Theme needs a "name" and a "tokens" object.');
for(const k of ['bg','sb','card','ink','mu','ln','ac'])if(!t.tokens[k]||!CSS.supports('color',t.tokens[k]))throw Error(`Token "${k}" must be a valid colour, like #38BDF8.`);
return{...t,id:'custom',scheme:t.scheme==='light'?'light':'dark'}}