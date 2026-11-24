import {h} from '../core/dom.js';
export function toast(msg){const t=h('div',{class:'tst'},msg);document.getElementById('toast').append(t);setTimeout(()=>t.remove(),2900)}