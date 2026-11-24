const KEY='rd:v2',P=['theme','watch','compare','custom','alerts','nets','overlay','checkins','exy','tf'];
let saved={};try{saved=JSON.parse(localStorage.getItem(KEY))||{}}catch{}
export const state={theme:'harbor',watch:['EURUSD','DXY'],compare:['EURUSD','DXY'],custom:null,alerts:{},nets:['sol','base','arb'],overlay:true,checkins:[],exy:[],tf:'1D',searchOpen:false,dlg:false,drawer:false,themeError:'',...saved};
const subs=new Set();
export const subscribe=f=>(subs.add(f),()=>subs.delete(f));
export function set(p){Object.assign(state,p);try{localStorage.setItem(KEY,JSON.stringify(Object.fromEntries(P.map(k=>[k,state[k]]))))}catch{}subs.forEach(f=>f(state))}