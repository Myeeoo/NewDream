import{d as N,r as u,c as d,b9 as P,aP as f,aQ as h,aY as o,aT as n,aZ as i,aU as v,aR as l,b3 as m,bE as S,ae as X,bF as $}from"./index.js";import{_ as A}from"./GradientText.js";import"./use-houdini.js";import"./format-length.js";const F={class:"wh-full flex-col-center"},T={class:"flex-center py-12px"},W={class:"flex-center"},z={class:"w-full h-full"},B=["cx","cy","rx","ry"],I=60,D=N({__name:"index",setup(L){const y=S("root"),e={cX:202,cY:102,rX:200,rY:100,strokeWidth:2},g=(()=>{const{rX:r,rY:c,strokeWidth:s}=e,t=(r+s)*2,p=(c+s)*2;return`width:${t}px;height:${p}px;`})(),_=u(0),b=d(()=>{const{rX:r,rY:c}=e,s=r*Math.sin(_.value),t=c*Math.cos(_.value);return`transform: translate3d(${s}px,${t}px,0px)`}),k=u(2),w=2*Math.PI,C=d(()=>w/k.value/I),a=u(null),M=d(()=>a.value!==null),x=()=>{_.value+=C.value,a.value=window.requestAnimationFrame(x)},Y=()=>{a.value!==null&&(window.cancelAnimationFrame(a.value),a.value=null)};return(r,c)=>{const s=A,t=X,p=P("router-link"),E=$;return f(),h("div",F,[o(s,{class:"mb-24px",type:"primary",size:28},{default:n(()=>[i("Custom Constant Page")]),_:1}),o(p,{to:{name:v(y)}},{default:n(()=>[o(t,{type:"primary"},{default:n(()=>[i("回到首页")]),_:1})]),_:1},8,["to"]),o(E,{bordered:!1,size:"small",class:"mt-24px rounded-8px shadow-sm"},{default:n(()=>[l("div",T,[o(t,{type:"primary",class:"mr-24px",disabled:M.value,onClick:x},{default:n(()=>[i("开始")]),_:1},8,["disabled"]),o(t,{type:"error",onClick:Y},{default:n(()=>[i("暂停")]),_:1})]),l("div",W,[l("div",{class:"relative bg-primary_active",style:m(v(g))},[(f(),h("svg",z,[l("ellipse",{cx:e.cX,cy:e.cY,rx:e.rX,ry:e.rY,style:m({strokeWidth:e.strokeWidth+"px"}),class:"fill-none stroke-primary"},null,12,B)])),l("div",{class:"absolute left-182px top-82px w-40px h-40px bg-red rounded-20px",style:m(b.value)},null,4)],4)])]),_:1})])}}});export{D as default};
