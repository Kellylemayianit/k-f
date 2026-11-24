export const parse=()=>{let[p,q='']=location.hash.slice(1).split('?');if(!p||p==='/')p='/home';return{path:p,q:new URLSearchParams(q)}};
export const go=(path,q)=>{const s=q?q.toString():'';location.hash=path+(s?'?'+s:'')};
export const onRoute=f=>{addEventListener('hashchange',()=>f(parse()));f(parse())};