import{d as i,bj as d,bk as p,aP as m,aS as f,aT as e,aY as t,aR as a,aW as s,aU as _,aZ as b,bE as h,ae as v,bF as x}from"./index.js";import{_ as T}from"./Space.js";const g=a("div",null,"当前路由的描述数据(meta)：",-1),k=a("div",null,"当前路由的查询数据(query)：",-1),P=i({__name:"index",setup(N){const n=d(),{routerPush:u}=p();function c(){u({name:h("function_tab")})}return(y,z)=>{const r=v,o=T,l=x;return m(),f(o,{vertical:!0,size:16},{default:e(()=>[t(l,{title:"Tab Detail",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:e(()=>[t(o,{vertical:!0,size:12},{default:e(()=>[g,a("div",null,s(_(n).meta),1),k,a("div",null,s(_(n).query),1),t(r,{onClick:c},{default:e(()=>[b("返回Tab")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{P as default};