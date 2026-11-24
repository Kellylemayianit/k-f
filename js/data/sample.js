export const ASSETS=[
{id:'EURUSD',sym:'EUR/USD',name:'Euro / US dollar',cls:'fx',last:'1.0842',chg:.6,bias:'up',src:'cftc',thesis:true},
{id:'DXY',sym:'DXY',name:'Dollar index, calculated',cls:'index',last:'104.20',chg:-.8,bias:'down',src:'cftc'},
{id:'EXY',sym:'EXY',name:'Euro index, typed in',cls:'index',last:'—',chg:null,bias:'neutral',src:'manual'},
{id:'USDJPY',sym:'USD/JPY',name:'US dollar / yen',cls:'fx',last:'151.30',chg:.2,bias:'up',src:'cftc'},
{id:'GBPUSD',sym:'GBP/USD',name:'Pound / US dollar',cls:'fx',last:'1.2610',chg:.4,bias:'up',src:'cftc'},
{id:'XAUUSD',sym:'XAU/USD',name:'Gold',cls:'metals',last:'2,650',chg:1.1,bias:'up',src:'cftc'},
{id:'BTC',sym:'BTC',name:'Bitcoin',cls:'crypto',last:'[PRICE]',chg:-1.4,bias:'neutral',src:'defillama'},
{id:'ETH',sym:'ETH',name:'Ethereum',cls:'crypto',last:'[PRICE]',chg:.9,bias:'up',src:'defillama'},
{id:'SOL',sym:'SOL',name:'Solana',cls:'crypto',last:'[PRICE]',chg:3.2,bias:'up',src:'defillama'}];
export const NETS=[{id:'sol',name:'Solana',tvl:8.1,d7:4.2,vol:2.1,fees:14,apy:6.1,stable:'USDC'},{id:'base',name:'Base',tvl:4.3,d7:2.8,vol:.9,fees:6,apy:5.4,stable:'USDC'},{id:'arb',name:'Arbitrum',tvl:3,d7:.9,vol:.6,fees:4,apy:4.9,stable:'USDC'},{id:'eth',name:'Ethereum',tvl:62,d7:1.4,vol:1.8,fees:22,apy:3.8,stable:'USDC'}];
export const FACETS={cls:['fx','index','metals','crypto'],bias:['up','down','neutral'],src:['cftc','defillama','manual']};
export const LABEL={fx:'FX',index:'Index',metals:'Metals',crypto:'Crypto',up:'Up',down:'Down',neutral:'Neutral',cftc:'CFTC',defillama:'DefiLlama',manual:'Typed in'};
export function series(seed,n=60){let s=0;for(const c of String(seed))s=(s*31+c.charCodeAt(0))>>>0;const r=()=>(s=(s*1664525+1013904223)>>>0)/4294967296;let v=.5;const a=[];for(let i=0;i<n;i++){v+=(r()-.46)*.07;a.push(v)}const lo=Math.min(...a),hi=Math.max(...a);return a.map(x=>.1+.8*(x-lo)/(hi-lo))}
export const cot=seed=>series('c'+seed,13).map(x=>(x-.5)*48);