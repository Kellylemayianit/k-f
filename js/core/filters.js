import {ASSETS,FACETS} from '../data/sample.js';
export const readFilters=q=>Object.fromEntries(Object.keys(FACETS).map(k=>[k,(q.get(k)||'').split(',').filter(Boolean)]));
const ok=(a,f,skip)=>Object.keys(f).every(k=>k===skip||!f[k].length||f[k].includes(a[k]));
export const results=f=>ASSETS.filter(a=>ok(a,f));
export const counts=(f,k)=>Object.fromEntries(FACETS[k].map(v=>[v,ASSETS.filter(a=>ok(a,f,k)&&a[k]===v).length]));
export function toggle(q,k,v){const s=new Set(readFilters(q)[k]);s.has(v)?s.delete(v):s.add(v);const p=new URLSearchParams(q);s.size?p.set(k,[...s].join(',')):p.delete(k);return p}