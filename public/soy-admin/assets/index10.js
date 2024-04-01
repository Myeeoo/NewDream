import{a as g,e as t,af as oe,g as I,i as W,l as ne,m as se,d as f,o as re,q as Q,c as Y,v as M,x as ie,bM as ae,h as c,bN as le,bO as ce,aP as h,aS as y,aT as d,aR as U,bF as N,aY as b,aZ as P,aW as D,aU as v,aQ as Z,a$ as X,ah as ee,bP as de,z as pe}from"./index.js";import{u as be}from"./use-compitable.js";import{g as ue,_ as me}from"./Space.js";import{N as ge}from"./Tag.js";function J(e,a="default",s=[]){const{children:i}=e;if(i!==null&&typeof i=="object"&&!Array.isArray(i)){const u=i[a];if(typeof u=="function")return u()}return s}const te="DESCRIPTION_ITEM_FLAG";function he(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[te]:!1}const ve=g([t("descriptions",{fontSize:"var(--n-font-size)"},[t("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[t("descriptions-table-header",{padding:"var(--n-th-padding)"}),t("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),oe("bordered",[t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[g("&:last-child",[t("descriptions-table-content",{paddingBottom:0})])])])])]),I("left-label-placement",[t("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),I("left-label-align",[g("th",{textAlign:"left"})]),I("center-label-align",[g("th",{textAlign:"center"})]),I("right-label-align",[g("th",{textAlign:"right"})]),I("bordered",[t("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[t("descriptions-table",[t("descriptions-table-row",[g("&:not(:last-child)",[t("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),t("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),t("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),t("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[t("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[t("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),t("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[W("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),W("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),ne(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),se(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),_e=Object.assign(Object.assign({},Q.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),L=f({name:"Descriptions",props:_e,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:s}=re(e),i=Q("Descriptions","-descriptions",ve,ce,e,a),u=Y(()=>{const{size:r,bordered:l}=e,{common:{cubicBezierEaseInOut:_},self:{titleTextColor:n,thColor:T,thColorModal:w,thColorPopover:$,thTextColor:A,thFontWeight:H,tdTextColor:B,tdColor:o,tdColorModal:C,tdColorPopover:O,borderColor:m,borderColorModal:x,borderColorPopover:z,borderRadius:k,lineHeight:S,[M("fontSize",r)]:V,[M(l?"thPaddingBordered":"thPadding",r)]:E,[M(l?"tdPaddingBordered":"tdPadding",r)]:j}}=i.value;return{"--n-title-text-color":n,"--n-th-padding":E,"--n-td-padding":j,"--n-font-size":V,"--n-bezier":_,"--n-th-font-weight":H,"--n-line-height":S,"--n-th-text-color":A,"--n-td-text-color":B,"--n-th-color":T,"--n-th-color-modal":w,"--n-th-color-popover":$,"--n-td-color":o,"--n-td-color-modal":C,"--n-td-color-popover":O,"--n-border-radius":k,"--n-border-color":m,"--n-border-color-modal":x,"--n-border-color-popover":z}}),p=s?ie("descriptions",Y(()=>{let r="";const{size:l,bordered:_}=e;return _&&(r+="a"),r+=l[0],r}),u,e):void 0;return{mergedClsPrefix:a,cssVars:s?void 0:u,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,compitableColumn:be(e,["columns","column"]),inlineThemeDisabled:s}},render(){const e=this.$slots.default,a=e?ae(e()):[];a.length;const{compitableColumn:s,labelPlacement:i,labelAlign:u,size:p,bordered:r,title:l,cssVars:_,mergedClsPrefix:n,separator:T,onRender:w}=this;w==null||w();const $=a.filter(o=>he(o)),A={span:0,row:[],secondRow:[],rows:[]},B=$.reduce((o,C,O)=>{const m=C.props||{},x=$.length-1===O,z=["label"in m?m.label:J(C,"label")],k=[J(C)],S=m.span||1,V=o.span;o.span+=S;const E=m.labelStyle||m["label-style"]||this.labelStyle,j=m.contentStyle||m["content-style"]||this.contentStyle;if(i==="left")r?o.row.push(c("th",{class:`${n}-descriptions-table-header`,colspan:1,style:E},z),c("td",{class:`${n}-descriptions-table-content`,colspan:x?(s-V)*2+1:S*2-1,style:j},k)):o.row.push(c("td",{class:`${n}-descriptions-table-content`,colspan:x?(s-V)*2:S*2},c("span",{class:`${n}-descriptions-table-content__label`,style:E},[...z,T&&c("span",{class:`${n}-descriptions-separator`},T)]),c("span",{class:`${n}-descriptions-table-content__content`,style:j},k)));else{const q=x?(s-V)*2:S*2;o.row.push(c("th",{class:`${n}-descriptions-table-header`,colspan:q,style:E},z)),o.secondRow.push(c("td",{class:`${n}-descriptions-table-content`,colspan:q,style:j},k))}return(o.span>=s||x)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),i!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},A).rows.map(o=>c("tr",{class:`${n}-descriptions-table-row`},o));return c("div",{style:_,class:[`${n}-descriptions`,this.themeClass,`${n}-descriptions--${i}-label-placement`,`${n}-descriptions--${u}-label-align`,`${n}-descriptions--${p}-size`,r&&`${n}-descriptions--bordered`]},l||this.$slots.header?c("div",{class:`${n}-descriptions-header`},l||ue(this,"header")):null,c("div",{class:`${n}-descriptions-table-wrapper`},c("table",{class:`${n}-descriptions-table`},c("tbody",null,i==="top"&&c("tr",{class:`${n}-descriptions-table-row`,style:{visibility:"collapse"}},le(s*2,c("td",null))),B))))}}),ye={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},F=f({name:"DescriptionsItem",[te]:!0,props:ye,render(){return null}}),fe=U("p",{class:"leading-24px"}," Soybean Admin 是一个基于 Vue3、Vite、Naive UI、TypeScript 的中后台解决方案，它使用了最新的前端技术栈，并提炼了典型的业务模型，页面，包括二次封装组件、动态菜单、权限校验、粒子化权限控制等功能，它可以帮助你快速搭建企业级中后台项目，相信不管是从新技术使用还是其他方面，都能帮助到你。 ",-1),xe=f({name:"ProjectIntroduction",__name:"project-introduction",setup(e){return(a,s)=>{const i=N;return h(),y(i,{title:"关于",bordered:!1,size:"large",class:"rounded-8px shadow-sm"},{default:d(()=>[fe]),_:1})}}}),Se="soybean-admin",we="0.10.4",Ce="A fresh and elegant admin template, based on Vue3、Vite3、TypeScript、NaiveUI and UnoCSS. 一个基于Vue3、Vite3、TypeScript、NaiveUI and UnoCSS的清新优雅的中后台模版。",ze={name:"Soybean",email:"soybeanjs@outlook.com",url:"https://github.com/soybeanjs"},ke="MIT",Ve="https://github.com/honghuangdc/soybean-admin",Ee={url:"https://github.com/honghuangdc/soybean-admin.git"},je={url:"https://github.com/honghuangdc/soybean-admin/issues"},Ie=["Vue","Vue3","admin","admin-template","vue-admin","vue-admin-template","Vite3","Vite","vite-admin","TypeScript","TS","NaiveUI","naive-ui","naive-admin","NaiveUI-Admin","naive-ui-admin","UnoCSS","yao","amis","yao-amis","amis-yao"],Te={dev:"cross-env VITE_SERVICE_ENV=dev vite","dev:test":"cross-env VITE_SERVICE_ENV=test vite","dev:prod":"cross-env VITE_SERVICE_ENV=prod vite",build:"npm run typecheck && cross-env VITE_SERVICE_ENV=prod vite build","build:dev":"npm run typecheck && cross-env VITE_SERVICE_ENV=dev vite build --mode development","build:test":"npm run typecheck && cross-env VITE_SERVICE_ENV=test vite build","build:vercel":"cross-env VITE_HASH_ROUTE=Y VITE_VERCEL=Y vite build",preview:"vite preview",typecheck:"vue-tsc --noEmit --skipLibCheck",lint:"eslint . --fix",format:"soy prettier-write",commit:"soy git-commit",cleanup:"soy cleanup","update-pkg":"soy ncu",release:"soy release",tsx:"tsx",logo:"tsx ./scripts/logo.ts",prepare:"soy init-simple-git-hooks"},$e={"@antv/data-set":"0.11.8","@antv/g2":"4.2.10","@better-scroll/core":"2.5.1","@soybeanjs/vue-materials":"0.2.0","@vueuse/core":"10.5.0",axios:"1.5.1",clipboard:"2.0.11",colord:"2.9.3","crypto-js":"4.1.1",dayjs:"1.11.10",echarts:"5.4.3","form-data":"4.0.0","lodash-es":"4.17.21","naive-ui":"2.35.0",nanoid:"^5.0.4",pinia:"2.1.6","print-js":"1.6.0",qs:"6.11.2","socket.io-client":"4.7.2",swiper:"10.3.1","ua-parser-js":"1.0.36",vditor:"3.9.6",vue:"3.3.4","vue-i18n":"9.5.0","vue-router":"4.2.5",vuedraggable:"4.1.0",wangeditor:"4.7.15",xgplayer:"3.0.9"},Re={"@amap/amap-jsapi-types":"0.0.13","@iconify/json":"2.2.128","@iconify/vue":"4.1.1","@soybeanjs/cli":"0.7.4","@soybeanjs/vite-plugin-vue-page-route":"0.0.10","@types/bmapgl":"0.0.7","@types/crypto-js":"4.1.2","@types/node":"20.8.4","@types/qs":"6.9.8","@types/ua-parser-js":"0.7.37","@unocss/preset-uno":"0.56.5","@unocss/transformer-directives":"0.56.5","@unocss/vite":"0.56.5","@vitejs/plugin-legacy":"^4.1.1","@vitejs/plugin-vue":"4.4.0","@vitejs/plugin-vue-jsx":"3.0.2","cross-env":"7.0.3",eslint:"8.51.0","eslint-config-soybeanjs":"0.5.7",mockjs:"1.1.0","rollup-plugin-visualizer":"5.9.2",sass:"1.69.3","simple-git-hooks":"2.9.0",tsx:"3.13.0",typescript:"5.2.2","unplugin-icons":"0.17.0","unplugin-vue-components":"0.25.2",vite:"4.4.11","vite-plugin-compression":"0.5.1","vite-plugin-mock":"2.9.8","vite-plugin-progress":"0.0.7","vite-plugin-pwa":"0.16.5","vite-plugin-svg-icons":"2.0.1","vite-plugin-vue-devtools":"1.0.0-rc.5","vue-tsc":"1.8.19"},Pe={patchedDependencies:{"mockjs@1.1.0":"patches/mockjs@1.1.0.patch"}},De={useSoybeanToken:!0},Ne={name:Se,version:we,description:Ce,author:ze,license:ke,homepage:Ve,repository:Ee,bugs:je,keywords:Ie,scripts:Te,dependencies:$e,devDependencies:Re,pnpm:Pe,"simple-git-hooks":{"commit-msg":"pnpm soy git-commit-verify","pre-commit":"pnpm typecheck && pnpm soy lint-staged"},soybean:De},R=Ne;function K(e){const[a,s]=e;return{name:a,version:s}}const G={name:R.name,version:R.version,dependencies:Object.entries(R.dependencies).map(e=>K(e)),devDependencies:Object.entries(R.devDependencies).map(e=>K(e))},Ae=U("a",{class:"text-primary",href:"https://github.com/honghuangdc/soybean-admin",target:"_blank"},"Github地址",-1),Be=U("a",{class:"text-primary",href:"https://admin.soybeanjs.cn",target:"_blank"},"预览地址",-1),Oe=f({name:"ProjectInfo",__name:"project-info",setup(e){const{version:a}=G,s="2024-03-25 22:35:35";return(i,u)=>{const p=ge,r=F,l=L,_=N;return h(),y(_,{title:"项目信息",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:d(()=>[b(l,{"label-placement":"left",bordered:"",size:"small",column:2},{default:d(()=>[b(r,{label:"版本"},{default:d(()=>[b(p,{type:"primary"},{default:d(()=>[P(D(v(a)),1)]),_:1})]),_:1}),b(r,{label:"最后编译时间"},{default:d(()=>[b(p,{type:"primary"},{default:d(()=>[P(D(v(s)),1)]),_:1})]),_:1}),b(r,{label:"Github地址"},{default:d(()=>[Ae]),_:1}),b(r,{label:"预览地址"},{default:d(()=>[Be]),_:1})]),_:1})]),_:1})}}}),Me=f({name:"ProDependency",__name:"pro-dependency",setup(e){const{dependencies:a}=G;return(s,i)=>{const u=F,p=L,r=N;return h(),y(r,{title:"生产环境依赖",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:d(()=>[b(p,{"label-placement":"left",bordered:"",size:"small"},{default:d(()=>[(h(!0),Z(ee,null,X(v(a),l=>(h(),y(u,{key:l.name,label:l.name},{default:d(()=>[P(D(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),Ue=f({name:"DevDependency",__name:"dev-dependency",setup(e){const{devDependencies:a}=G;return(s,i)=>{const u=F,p=L,r=N;return h(),y(r,{title:"开发环境依赖",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:d(()=>[b(p,{"label-placement":"left",bordered:"",size:"small"},{default:d(()=>[(h(!0),Z(ee,null,X(v(a),l=>(h(),y(u,{key:l.name,label:l.name},{default:d(()=>[P(D(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),qe=f({__name:"index",setup(e){return de(()=>{console.log("about page activated")}),pe(()=>{console.log("about page mounted")}),(a,s)=>{const i=me;return h(),y(i,{vertical:!0,size:16},{default:d(()=>[b(v(xe)),b(v(Oe)),b(v(Me)),b(v(Ue))]),_:1})}}});export{qe as default};
