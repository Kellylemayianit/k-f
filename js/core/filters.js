export const FDEF={type:{vals:['L1','L2'],get:n=>n.type,label:v=>v==='L1'?'Layer 1':'Layer 2',title:'Network type'},trend:{vals:['up','flat'],get:n=>n.trend,label:v=>v==='up'?'Growing':'Flat',title:'Trend'},size:{vals:['big','small'],get:n=>n.tvl>=5?'big':'small',label:v=>v==='big'?'Over $5B':'Under $5B',title:'Size'}};
export const read=q=>Object.fromEntries(Object.keys(FDEF).map(k=>[k,(q.get(k)||'').split(',').filter(Boolean)]));
const ok=(n,f,skip)=>Object.keys(FDEF).every(k=>k===skip||!f[k].length||f[k].includes(FDEF[k].get(n)));
export const apply=(items,f)=>items.filter(n=>ok(n,f));
export const counts=(items,f,k)=>Object.fromEntries(FDEF[k].vals.map(v=>[v,items.filter(n=>ok(n,f,k)&&FDEF[k].get(n)===v).length]));
export function toggle(q,k,v){const s=new Set(read(q)[k]);s.has(v)?s.delete(v):s.add(v);const p=new URLSearchParams(q);s.size?p.set(k,[...s].join(',')):p.delete(k);return p}