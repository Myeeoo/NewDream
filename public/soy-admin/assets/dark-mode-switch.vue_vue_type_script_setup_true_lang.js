import{aP as a,aQ as r,aR as m,d as h,c as p,aS as _}from"./index.js";const v={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},x=m("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),w=[x];function k(i,c){return a(),r("svg",v,w)}const f={name:"mdi-moon-waning-crescent",render:k},g={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},M=m("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),y=[M];function $(i,c){return a(),r("svg",g,y)}const B={name:"mdi-white-balance-sunny",render:$},T=h({name:"DarkModeSwitch",__name:"dark-mode-switch",props:{dark:{type:Boolean,default:!1},customizeTransition:{type:Boolean}},emits:["update:dark"],setup(i,{emit:c}){const l=i,e=p({get(){return l.dark},set(t){c("update:dark",t)}});async function u(t){const o=t.clientX,n=t.clientY;if(!l.customizeTransition||!document.startViewTransition){e.value=!e.value;return}const s=Math.hypot(Math.max(o,innerWidth-o),Math.max(n,innerHeight-n));await document.startViewTransition(()=>{e.value=!e.value}).ready;const d=[`circle(0px at ${o}px ${n}px)`,`circle(${s}px at ${o}px ${n}px)`];document.documentElement.animate({clipPath:e.value?d:[...d].reverse()},{duration:300,easing:"ease-in",pseudoElement:e.value?"::view-transition-new(root)":"::view-transition-old(root)"})}return(t,o)=>{const n=f,s=B;return a(),r("div",{class:"flex-center text-18px cursor-pointer",onClick:u},[e.value?(a(),_(n,{key:0})):(a(),_(s,{key:1}))])}}});export{B as _,f as a,T as b};
