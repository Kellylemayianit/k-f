export const parse=()=>{const[p,q='']=location.hash.slice(1).split('?');return{path:p||'/desk',q:new URLSearchParams(q)}};
export const go=(path,q)=>{const s=q?q.toString():'';location.hash=path+(s?'?'+s:'')};
export const onRoute=f=>{addEventListener('hashchange',()=>f(parse()));f(parse())};