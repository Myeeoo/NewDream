import{d as de,cf as kt,z as ze,bP as nn,cg as on,c as V,r as P,aA as Le,aH as lt,aG as Ee,h as f,K as ln,V as ht,n as ut,aX as rn,ch as vt,B as Ot,p as Ft,az as Se,M as an,J as Rt,e as E,i as Y,g as oe,a as ae,af as rt,G as Mt,q as Te,t as te,ci as sn,w as Ce,v as be,cj as Je,S as gt,x as dt,D as un,aJ as dn,ap as cn,C as fn,ck as hn,A as vn,cl as gn,ah as bn,o as pn,a8 as mn,I as yn,ab as wn,an as xn,ac as bt,cm as Sn,aa as Cn,cn as Tn,ad as re}from"./index.js";import{u as pt}from"./use-merged-state.js";import{N as kn,u as On}from"./Suffix.js";import{u as Fn}from"./use-compitable.js";import{N as Ze}from"./Tag.js";import{c as Pt,a as Ke}from"./cssr.js";import{i as ct,d as Rn,_ as Mn,c as Pn,u as at,V as zn,a as In,b as _n}from"./Popover.js";import{b as An}from"./next-frame-once.js";function De(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function Bn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Qe(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}function mt(e){return e&-e}class Nn{constructor(t,n){this.l=t,this.min=n;const o=new Array(t+1);for(let l=0;l<t+1;++l)o[l]=0;this.ft=o}add(t,n){if(n===0)return;const{l:o,ft:l}=this;for(t+=1;t<=o;)l[t]+=n,t+=mt(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:o,l}=this;if(t>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=t*o;for(;t>0;)s+=n[t],t-=mt(t);return s}getBound(t){let n=0,o=this.l;for(;o>n;){const l=Math.floor((n+o)/2),s=this.sum(l);if(s>t){o=l;continue}else if(s<t){if(n===l)return this.sum(n+1)<=t?n+1:l;n=l}else return l}return n}}let $e;function En(){return $e===void 0&&("matchMedia"in window?$e=window.matchMedia("(pointer:coarse)").matches:$e=!1),$e}let et;function yt(){return et===void 0&&(et="chrome"in window?window.devicePixelRatio:1),et}const $n=Ke(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ke("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ke("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Ln=de({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=kt();$n.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Pt,ssr:t}),ze(()=>{const{defaultScrollIndex:v,defaultScrollKey:w}=e;v!=null?b({index:v}):w!=null&&b({key:w})});let n=!1,o=!1;nn(()=>{if(n=!1,!o){o=!0;return}b({top:x.value,left:y})}),on(()=>{n=!0,o||(o=!0)});const l=V(()=>{const v=new Map,{keyField:w}=e;return e.items.forEach((B,U)=>{v.set(B[w],U)}),v}),s=P(null),a=P(void 0),r=new Map,p=V(()=>{const{items:v,itemSize:w,keyField:B}=e,U=new Nn(v.length,w);return v.forEach((q,G)=>{const K=q[B],X=r.get(K);X!==void 0&&U.add(G,X)}),U}),c=P(0);let y=0;const x=P(0),M=Le(()=>Math.max(p.value.getBound(x.value-lt(e.paddingTop))-1,0)),A=V(()=>{const{value:v}=a;if(v===void 0)return[];const{items:w,itemSize:B}=e,U=M.value,q=Math.min(U+Math.ceil(v/B+1),w.length-1),G=[];for(let K=U;K<=q;++K)G.push(w[K]);return G}),b=(v,w)=>{if(typeof v=="number"){k(v,w,"auto");return}const{left:B,top:U,index:q,key:G,position:K,behavior:X,debounce:u=!0}=v;if(B!==void 0||U!==void 0)k(B,U,X);else if(q!==void 0)T(q,X,u);else if(G!==void 0){const g=l.value.get(G);g!==void 0&&T(g,X,u)}else K==="bottom"?k(0,Number.MAX_SAFE_INTEGER,X):K==="top"&&k(0,0,X)};let O,W=null;function T(v,w,B){const{value:U}=p,q=U.sum(v)+lt(e.paddingTop);if(!B)s.value.scrollTo({left:0,top:q,behavior:w});else{O=v,W!==null&&window.clearTimeout(W),W=window.setTimeout(()=>{O=void 0,W=null},16);const{scrollTop:G,offsetHeight:K}=s.value;if(q>G){const X=U.get(v);q+X<=G+K||s.value.scrollTo({left:0,top:q+X-K,behavior:w})}else s.value.scrollTo({left:0,top:q,behavior:w})}}function k(v,w,B){s.value.scrollTo({left:v,top:w,behavior:B})}function $(v,w){var B,U,q;if(n||e.ignoreItemResize||L(w.target))return;const{value:G}=p,K=l.value.get(v),X=G.get(K),u=(q=(U=(B=w.borderBoxSize)===null||B===void 0?void 0:B[0])===null||U===void 0?void 0:U.blockSize)!==null&&q!==void 0?q:w.contentRect.height;if(u===X)return;u-e.itemSize===0?r.delete(v):r.set(v,u-e.itemSize);const j=u-X;if(j===0)return;G.add(K,j);const ee=s.value;if(ee!=null){if(O===void 0){const se=G.sum(K);ee.scrollTop>se&&ee.scrollBy(0,j)}else if(K<O)ee.scrollBy(0,j);else if(K===O){const se=G.sum(K);u+se>ee.scrollTop+ee.offsetHeight&&ee.scrollBy(0,j)}Z()}c.value++}const m=!En();let S=!1;function R(v){var w;(w=e.onScroll)===null||w===void 0||w.call(e,v),(!m||!S)&&Z()}function D(v){var w;if((w=e.onWheel)===null||w===void 0||w.call(e,v),m){const B=s.value;if(B!=null){if(v.deltaX===0&&(B.scrollTop===0&&v.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&v.deltaY>=0))return;v.preventDefault(),B.scrollTop+=v.deltaY/yt(),B.scrollLeft+=v.deltaX/yt(),Z(),S=!0,An(()=>{S=!1})}}}function H(v){if(n||L(v.target)||v.contentRect.height===a.value)return;a.value=v.contentRect.height;const{onResize:w}=e;w!==void 0&&w(v)}function Z(){const{value:v}=s;v!=null&&(x.value=v.scrollTop,y=v.scrollLeft)}function L(v){let w=v;for(;w!==null;){if(w.style.display==="none")return!0;w=w.parentElement}return!1}return{listHeight:a,listStyle:{overflow:"auto"},keyToIndex:l,itemsStyle:V(()=>{const{itemResizable:v}=e,w=Ee(p.value.sum());return c.value,[e.itemsStyle,{boxSizing:"content-box",height:v?"":w,minHeight:v?w:"",paddingTop:Ee(e.paddingTop),paddingBottom:Ee(e.paddingBottom)}]}),visibleItemsStyle:V(()=>(c.value,{transform:`translateY(${Ee(p.value.sum(M.value))})`})),viewportItems:A,listElRef:s,itemsElRef:P(null),scrollTo:b,handleListResize:H,handleListScroll:R,handleListWheel:D,handleItemResize:$}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:o}=this;return f(ht,{onResize:this.handleListResize},{default:()=>{var l,s;return f("div",ln(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?f("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[f(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(a=>{const r=a[t],p=n.get(r),c=this.$slots.default({item:a,index:p})[0];return e?f(ht,{key:r,onResize:y=>this.handleItemResize(r,y)},{default:()=>c}):(c.key=r,c)})})]):(s=(l=this.$slots).empty)===null||s===void 0?void 0:s.call(l)])}})}}),ge="v-hidden",Kn=Ke("[v-hidden]",{display:"none!important"}),wt=de({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=P(null),o=P(null);function l(){const{value:a}=n,{getCounter:r,getTail:p}=e;let c;if(r!==void 0?c=r():c=o.value,!a||!c)return;c.hasAttribute(ge)&&c.removeAttribute(ge);const{children:y}=a,x=a.offsetWidth,M=[],A=t.tail?p==null?void 0:p():null;let b=A?A.offsetWidth:0,O=!1;const W=a.children.length-(t.tail?1:0);for(let k=0;k<W-1;++k){if(k<0)continue;const $=y[k];if(O){$.hasAttribute(ge)||$.setAttribute(ge,"");continue}else $.hasAttribute(ge)&&$.removeAttribute(ge);const m=$.offsetWidth;if(b+=m,M[k]=m,b>x){const{updateCounter:S}=e;for(let R=k;R>=0;--R){const D=W-1-R;S!==void 0?S(D):c.textContent=`${D}`;const H=c.offsetWidth;if(b-=M[R],b+H<=x||R===0){O=!0,k=R-1,A&&(k===-1?(A.style.maxWidth=`${x-H}px`,A.style.boxSizing="border-box"):A.style.maxWidth="");break}}}}const{onUpdateOverflow:T}=e;O?T!==void 0&&T(!0):(T!==void 0&&T(!1),c.setAttribute(ge,""))}const s=kt();return Kn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Pt,ssr:s}),ze(l),{selfRef:n,counterRef:o,sync:l}},render(){const{$slots:e}=this;return ut(this.sync),f("div",{class:"v-overflow",ref:"selfRef"},[rn(e,"default"),e.counter?e.counter():f("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function zt(e,t){t&&(ze(()=>{const{value:n}=e;n&&vt.registerHandler(n,t)}),Ot(()=>{const{value:n}=e;n&&vt.unregisterHandler(n)}))}const Dn=de({name:"Checkmark",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},f("g",{fill:"none"},f("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Vn=de({props:{onFocus:Function,onBlur:Function},setup(e){return()=>f("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function xt(e){return Array.isArray(e)?e:[e]}const st={STOP:"STOP"};function It(e,t){const n=t(e);e.children!==void 0&&n!==st.STOP&&e.children.forEach(o=>It(o,t))}function Wn(e,t={}){const{preserveGroup:n=!1}=t,o=[],l=n?a=>{a.isLeaf||(o.push(a.key),s(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),s(a.children))};function s(a){a.forEach(l)}return s(e),o}function jn(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function Hn(e){return e.children}function Gn(e){return e.key}function Un(){return!1}function qn(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function Yn(e){return e.disabled===!0}function Xn(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function tt(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function nt(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Jn(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function Zn(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function Qn(e){return(e==null?void 0:e.type)==="group"}function eo(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class to extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function no(e,t,n,o){return Ve(t.concat(e),n,o,!1)}function oo(e,t){const n=new Set;return e.forEach(o=>{const l=t.treeNodeMap.get(o);if(l!==void 0){let s=l.parent;for(;s!==null&&!(s.disabled||n.has(s.key));)n.add(s.key),s=s.parent}}),n}function io(e,t,n,o){const l=Ve(t,n,o,!1),s=Ve(e,n,o,!0),a=oo(e,n),r=[];return l.forEach(p=>{(s.has(p)||a.has(p))&&r.push(p)}),r.forEach(p=>l.delete(p)),l}function ot(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:l,indeterminateKeys:s,cascade:a,leafOnly:r,checkStrategy:p,allowNotLoaded:c}=e;if(!a)return o!==void 0?{checkedKeys:Jn(n,o),indeterminateKeys:Array.from(s)}:l!==void 0?{checkedKeys:Zn(n,l),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:y}=t;let x;l!==void 0?x=io(l,n,t,c):o!==void 0?x=no(o,n,t,c):x=Ve(n,t,c,!1);const M=p==="parent",A=p==="child"||r,b=x,O=new Set,W=Math.max.apply(null,Array.from(y.keys()));for(let T=W;T>=0;T-=1){const k=T===0,$=y.get(T);for(const m of $){if(m.isLeaf)continue;const{key:S,shallowLoaded:R}=m;if(A&&R&&m.children.forEach(L=>{!L.disabled&&!L.isLeaf&&L.shallowLoaded&&b.has(L.key)&&b.delete(L.key)}),m.disabled||!R)continue;let D=!0,H=!1,Z=!0;for(const L of m.children){const v=L.key;if(!L.disabled){if(Z&&(Z=!1),b.has(v))H=!0;else if(O.has(v)){H=!0,D=!1;break}else if(D=!1,H)break}}D&&!Z?(M&&m.children.forEach(L=>{!L.disabled&&b.has(L.key)&&b.delete(L.key)}),b.add(S)):H&&O.add(S),k&&A&&b.has(S)&&b.delete(S)}}return{checkedKeys:Array.from(b),indeterminateKeys:Array.from(O)}}function Ve(e,t,n,o){const{treeNodeMap:l,getChildren:s}=t,a=new Set,r=new Set(e);return e.forEach(p=>{const c=l.get(p);c!==void 0&&It(c,y=>{if(y.disabled)return st.STOP;const{key:x}=y;if(!a.has(x)&&(a.add(x),r.add(x),Xn(y.rawNode,s))){if(o)return st.STOP;if(!n)throw new to}})}),r}function lo(e,{includeGroup:t=!1,includeSelf:n=!0},o){var l;const s=o.treeNodeMap;let a=e==null?null:(l=s.get(e))!==null&&l!==void 0?l:null;const r={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return r.treeNode=null,r;for(;a;)!a.ignored&&(t||!a.isGroup)&&r.treeNodePath.push(a),a=a.parent;return r.treeNodePath.reverse(),n||r.treeNodePath.pop(),r.keyPath=r.treeNodePath.map(p=>p.key),r}function ro(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function ao(e,t){const n=e.siblings,o=n.length,{index:l}=e;return t?n[(l+1)%o]:l===n.length-1?null:n[l+1]}function St(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const l=t==="prev"?so:ao,s={reverse:t==="prev"};let a=!1,r=null;function p(c){if(c!==null){if(c===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){r=e;return}}else if((!c.disabled||o)&&!c.ignored&&!c.isGroup){r=c;return}if(c.isGroup){const y=ft(c,s);y!==null?r=y:p(l(c,n))}else{const y=l(c,!1);if(y!==null)p(y);else{const x=uo(c);x!=null&&x.isGroup?p(l(x,n)):n&&p(l(c,!0))}}}}return p(e),r}function so(e,t){const n=e.siblings,o=n.length,{index:l}=e;return t?n[(l-1+o)%o]:l===0?null:n[l-1]}function uo(e){return e.parent}function ft(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:l}=o,s=n?l-1:0,a=n?-1:l,r=n?-1:1;for(let p=s;p!==a;p+=r){const c=o[p];if(!c.disabled&&!c.ignored)if(c.isGroup){const y=ft(c,t);if(y!==null)return y}else return c}}return null}const co={getChild(){return this.ignored?null:ft(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return St(this,"next",e)},getPrev(e={}){return St(this,"prev",e)}};function fo(e,t){const n=t?new Set(t):void 0,o=[];function l(s){s.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&l(a.children)})}return l(e),o}function ho(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function _t(e,t,n,o,l,s=null,a=0){const r=[];return e.forEach((p,c)=>{var y;const x=Object.create(o);if(x.rawNode=p,x.siblings=r,x.level=a,x.index=c,x.isFirstChild=c===0,x.isLastChild=c+1===e.length,x.parent=s,!x.ignored){const M=l(p);Array.isArray(M)&&(x.children=_t(M,t,n,o,l,x,a+1))}r.push(x),t.set(x.key,x),n.has(a)||n.set(a,[]),(y=n.get(a))===null||y===void 0||y.push(x)}),r}function vo(e,t={}){var n;const o=new Map,l=new Map,{getDisabled:s=Yn,getIgnored:a=Un,getIsGroup:r=Qn,getKey:p=Gn}=t,c=(n=t.getChildren)!==null&&n!==void 0?n:Hn,y=t.ignoreEmptyChildren?m=>{const S=c(m);return Array.isArray(S)?S.length?S:null:S}:c,x=Object.assign({get key(){return p(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return r(this.rawNode)},get isLeaf(){return jn(this.rawNode,y)},get shallowLoaded(){return qn(this.rawNode,y)},get ignored(){return a(this.rawNode)},contains(m){return ho(this,m)}},co),M=_t(e,o,l,x,y);function A(m){if(m==null)return null;const S=o.get(m);return S&&!S.isGroup&&!S.ignored?S:null}function b(m){if(m==null)return null;const S=o.get(m);return S&&!S.ignored?S:null}function O(m,S){const R=b(m);return R?R.getPrev(S):null}function W(m,S){const R=b(m);return R?R.getNext(S):null}function T(m){const S=b(m);return S?S.getParent():null}function k(m){const S=b(m);return S?S.getChild():null}const $={treeNodes:M,treeNodeMap:o,levelTreeNodeMap:l,maxLevel:Math.max(...l.keys()),getChildren:y,getFlattenedNodes(m){return fo(M,m)},getNode:A,getPrev:O,getNext:W,getParent:T,getChild:k,getFirstAvailableNode(){return ro(M)},getPath(m,S={}){return lo(m,S,$)},getCheckedKeys(m,S={}){const{cascade:R=!0,leafOnly:D=!1,checkStrategy:H="all",allowNotLoaded:Z=!1}=S;return ot({checkedKeys:tt(m),indeterminateKeys:nt(m),cascade:R,leafOnly:D,checkStrategy:H,allowNotLoaded:Z},$)},check(m,S,R={}){const{cascade:D=!0,leafOnly:H=!1,checkStrategy:Z="all",allowNotLoaded:L=!1}=R;return ot({checkedKeys:tt(S),indeterminateKeys:nt(S),keysToCheck:m==null?[]:xt(m),cascade:D,leafOnly:H,checkStrategy:Z,allowNotLoaded:L},$)},uncheck(m,S,R={}){const{cascade:D=!0,leafOnly:H=!1,checkStrategy:Z="all",allowNotLoaded:L=!1}=R;return ot({checkedKeys:tt(S),indeterminateKeys:nt(S),keysToUncheck:m==null?[]:xt(m),cascade:D,leafOnly:H,checkStrategy:Z,allowNotLoaded:L},$)},getNonLeafKeys(m={}){return Wn(M,m)}};return $}function go(e,t){return f(Rt,{name:"fade-in-scale-up-transition"},{default:()=>e?f(an,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>f(Dn)}):null})}const Ct=de({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:l,renderLabelRef:s,renderOptionRef:a,labelFieldRef:r,valueFieldRef:p,showCheckmarkRef:c,nodePropsRef:y,handleOptionClick:x,handleOptionMouseEnter:M}=Ft(ct),A=Le(()=>{const{value:T}=n;return T?e.tmNode.key===T.key:!1});function b(T){const{tmNode:k}=e;k.disabled||x(T,k)}function O(T){const{tmNode:k}=e;k.disabled||M(T,k)}function W(T){const{tmNode:k}=e,{value:$}=A;k.disabled||$||M(T,k)}return{multiple:o,isGrouped:Le(()=>{const{tmNode:T}=e,{parent:k}=T;return k&&k.rawNode.type==="group"}),showCheckmark:c,nodeProps:y,isPending:A,isSelected:Le(()=>{const{value:T}=t,{value:k}=o;if(T===null)return!1;const $=e.tmNode.rawNode[p.value];if(k){const{value:m}=l;return m.has($)}else return T===$}),labelField:r,renderLabel:s,renderOption:a,handleMouseMove:W,handleMouseEnter:O,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:l,showCheckmark:s,nodeProps:a,renderOption:r,renderLabel:p,handleClick:c,handleMouseEnter:y,handleMouseMove:x}=this,M=go(n,e),A=p?[p(t,n),s&&M]:[Se(t[this.labelField],t,n),s&&M],b=a==null?void 0:a(t),O=f("div",Object.assign({},b,{class:[`${e}-base-select-option`,t.class,b==null?void 0:b.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:s}],style:[(b==null?void 0:b.style)||"",t.style||""],onClick:Qe([c,b==null?void 0:b.onClick]),onMouseenter:Qe([y,b==null?void 0:b.onMouseenter]),onMousemove:Qe([x,b==null?void 0:b.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},A));return t.render?t.render({node:O,option:t,selected:n}):r?r({node:O,option:t,selected:n}):O}}),Tt=de({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=Ft(ct);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:l}}=this,s=o==null?void 0:o(l),a=t?t(l,!1):Se(l[this.labelField],l,!1),r=f("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),a);return l.render?l.render({node:r,option:l}):n?n({node:r,option:l,selected:!1}):r}}),bo=E("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[E("scrollbar",`
 max-height: var(--n-height);
 `),E("virtual-list",`
 max-height: var(--n-height);
 `),E("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[Y("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),E("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),E("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),Y("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),Y("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),Y("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),E("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),E("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[oe("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ae("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ae("&:active",`
 color: var(--n-option-text-color-pressed);
 `),oe("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),oe("pending",[ae("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),oe("selected",`
 color: var(--n-option-text-color-active);
 `,[ae("&::before",`
 background-color: var(--n-option-color-active);
 `),oe("pending",[ae("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),oe("disabled",`
 cursor: not-allowed;
 `,[rt("selected",`
 color: var(--n-option-text-color-disabled);
 `),oe("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),Y("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Mt({enterScale:"0.5"})])])]),po=de({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=Te("InternalSelectMenu","-internal-select-menu",bo,sn,e,te(e,"clsPrefix")),n=P(null),o=P(null),l=P(null),s=V(()=>e.treeMate.getFlattenedNodes()),a=V(()=>eo(s.value)),r=P(null);function p(){const{treeMate:u}=e;let g=null;const{value:j}=e;j===null?g=u.getFirstAvailableNode():(e.multiple?g=u.getNode((j||[])[(j||[]).length-1]):g=u.getNode(j),(!g||g.disabled)&&(g=u.getFirstAvailableNode())),v(g||null)}function c(){const{value:u}=r;u&&!e.treeMate.getNode(u.key)&&(r.value=null)}let y;Ce(()=>e.show,u=>{u?y=Ce(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?p():c(),ut(w)):c()},{immediate:!0}):y==null||y()},{immediate:!0}),Ot(()=>{y==null||y()});const x=V(()=>lt(t.value.self[be("optionHeight",e.size)])),M=V(()=>Je(t.value.self[be("padding",e.size)])),A=V(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),b=V(()=>{const u=s.value;return u&&u.length===0});function O(u){const{onToggle:g}=e;g&&g(u)}function W(u){const{onScroll:g}=e;g&&g(u)}function T(u){var g;(g=l.value)===null||g===void 0||g.sync(),W(u)}function k(){var u;(u=l.value)===null||u===void 0||u.sync()}function $(){const{value:u}=r;return u||null}function m(u,g){g.disabled||v(g,!1)}function S(u,g){g.disabled||O(g)}function R(u){var g;De(u,"action")||(g=e.onKeyup)===null||g===void 0||g.call(e,u)}function D(u){var g;De(u,"action")||(g=e.onKeydown)===null||g===void 0||g.call(e,u)}function H(u){var g;(g=e.onMousedown)===null||g===void 0||g.call(e,u),!e.focusable&&u.preventDefault()}function Z(){const{value:u}=r;u&&v(u.getNext({loop:!0}),!0)}function L(){const{value:u}=r;u&&v(u.getPrev({loop:!0}),!0)}function v(u,g=!1){r.value=u,g&&w()}function w(){var u,g;const j=r.value;if(!j)return;const ee=a.value(j.key);ee!==null&&(e.virtualScroll?(u=o.value)===null||u===void 0||u.scrollTo({index:ee}):(g=l.value)===null||g===void 0||g.scrollTo({index:ee,elSize:x.value}))}function B(u){var g,j;!((g=n.value)===null||g===void 0)&&g.contains(u.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,u))}function U(u){var g,j;!((g=n.value)===null||g===void 0)&&g.contains(u.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,u)}gt(ct,{handleOptionMouseEnter:m,handleOptionClick:S,valueSetRef:A,pendingTmNodeRef:r,nodePropsRef:te(e,"nodeProps"),showCheckmarkRef:te(e,"showCheckmark"),multipleRef:te(e,"multiple"),valueRef:te(e,"value"),renderLabelRef:te(e,"renderLabel"),renderOptionRef:te(e,"renderOption"),labelFieldRef:te(e,"labelField"),valueFieldRef:te(e,"valueField")}),gt(Rn,n),ze(()=>{const{value:u}=l;u&&u.sync()});const q=V(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:g},self:{height:j,borderRadius:ee,color:se,groupHeaderTextColor:ke,actionDividerColor:Oe,optionTextColorPressed:pe,optionTextColor:me,optionTextColorDisabled:ue,optionTextColorActive:ne,optionOpacityDisabled:ye,optionCheckColor:ce,actionTextColor:Fe,optionColorPending:he,optionColorActive:ve,loadingColor:Re,loadingSize:Me,optionColorActivePending:Pe,[be("optionFontSize",u)]:we,[be("optionHeight",u)]:xe,[be("optionPadding",u)]:ie}}=t.value;return{"--n-height":j,"--n-action-divider-color":Oe,"--n-action-text-color":Fe,"--n-bezier":g,"--n-border-radius":ee,"--n-color":se,"--n-option-font-size":we,"--n-group-header-text-color":ke,"--n-option-check-color":ce,"--n-option-color-pending":he,"--n-option-color-active":ve,"--n-option-color-active-pending":Pe,"--n-option-height":xe,"--n-option-opacity-disabled":ye,"--n-option-text-color":me,"--n-option-text-color-active":ne,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":pe,"--n-option-padding":ie,"--n-option-padding-left":Je(ie,"left"),"--n-option-padding-right":Je(ie,"right"),"--n-loading-color":Re,"--n-loading-size":Me}}),{inlineThemeDisabled:G}=e,K=G?dt("internal-select-menu",V(()=>e.size[0]),q,e):void 0,X={selfRef:n,next:Z,prev:L,getPendingTmNode:$};return zt(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:o,scrollbarRef:l,itemSize:x,padding:M,flattenedNodes:s,empty:b,virtualListContainer(){const{value:u}=o;return u==null?void 0:u.listElRef},virtualListContent(){const{value:u}=o;return u==null?void 0:u.itemsElRef},doScroll:W,handleFocusin:B,handleFocusout:U,handleKeyUp:R,handleKeyDown:D,handleMouseDown:H,handleVirtualListResize:k,handleVirtualListScroll:T,cssVars:G?void 0:q,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender},X)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:l,onRender:s}=this;return s==null||s(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,l,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?f("div",{class:`${n}-base-select-menu__loading`},f(dn,{clsPrefix:n,strokeWidth:20})):this.empty?f("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0,"data-action":!0},fn(e.empty,()=>[f(Mn,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):f(cn,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?f(Ln,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?f(Tt,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:f(Ct,{clsPrefix:n,key:a.key,tmNode:a})}):f("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?f(Tt,{key:a.key,clsPrefix:n,tmNode:a}):f(Ct,{clsPrefix:n,key:a.key,tmNode:a})))}),un(e.action,a=>a&&[f("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),f(Vn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),mo=ae([E("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[E("base-loading",`
 color: var(--n-loading-color);
 `),E("base-selection-tags","min-height: var(--n-height);"),Y("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),Y("state-border",`
 z-index: 1;
 border-color: #0000;
 `),E("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[Y("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),E("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[Y("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),E("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[Y("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),E("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),E("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[E("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[Y("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),Y("render-label",`
 color: var(--n-text-color);
 `)]),rt("disabled",[ae("&:hover",[Y("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),oe("focus",[Y("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),oe("active",[Y("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),E("base-selection-label","background-color: var(--n-color-active);"),E("base-selection-tags","background-color: var(--n-color-active);")])]),oe("disabled","cursor: not-allowed;",[Y("arrow",`
 color: var(--n-arrow-color-disabled);
 `),E("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[E("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),Y("render-label",`
 color: var(--n-text-color-disabled);
 `)]),E("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),E("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),E("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[Y("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),Y("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>oe(`${e}-status`,[Y("state-border",`border: var(--n-border-${e});`),rt("disabled",[ae("&:hover",[Y("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),oe("active",[Y("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),E("base-selection-label",`background-color: var(--n-color-active-${e});`),E("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),oe("focus",[Y("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),E("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),E("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ae("&:last-child","padding-right: 0;"),E("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[Y("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),yo=de({name:"InternalSelection",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const t=P(null),n=P(null),o=P(null),l=P(null),s=P(null),a=P(null),r=P(null),p=P(null),c=P(null),y=P(null),x=P(!1),M=P(!1),A=P(!1),b=Te("InternalSelection","-internal-selection",mo,hn,e,te(e,"clsPrefix")),O=V(()=>e.clearable&&!e.disabled&&(A.value||e.active)),W=V(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Se(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),T=V(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),k=V(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function $(){var d;const{value:C}=t;if(C){const{value:J}=n;J&&(J.style.width=`${C.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=c.value)===null||d===void 0||d.sync()))}}function m(){const{value:d}=y;d&&(d.style.display="none")}function S(){const{value:d}=y;d&&(d.style.display="inline-block")}Ce(te(e,"active"),d=>{d||m()}),Ce(te(e,"pattern"),()=>{e.multiple&&ut($)});function R(d){const{onFocus:C}=e;C&&C(d)}function D(d){const{onBlur:C}=e;C&&C(d)}function H(d){const{onDeleteOption:C}=e;C&&C(d)}function Z(d){const{onClear:C}=e;C&&C(d)}function L(d){const{onPatternInput:C}=e;C&&C(d)}function v(d){var C;(!d.relatedTarget||!(!((C=o.value)===null||C===void 0)&&C.contains(d.relatedTarget)))&&R(d)}function w(d){var C;!((C=o.value)===null||C===void 0)&&C.contains(d.relatedTarget)||D(d)}function B(d){Z(d)}function U(){A.value=!0}function q(){A.value=!1}function G(d){!e.active||!e.filterable||d.target!==n.value&&d.preventDefault()}function K(d){H(d)}function X(d){if(d.key==="Backspace"&&!u.value&&!e.pattern.length){const{selectedOptions:C}=e;C!=null&&C.length&&K(C[C.length-1])}}const u=P(!1);let g=null;function j(d){const{value:C}=t;if(C){const J=d.target.value;C.textContent=J,$()}e.ignoreComposition&&u.value?g=d:L(d)}function ee(){u.value=!0}function se(){u.value=!1,e.ignoreComposition&&L(g),g=null}function ke(d){var C;M.value=!0,(C=e.onPatternFocus)===null||C===void 0||C.call(e,d)}function Oe(d){var C;M.value=!1,(C=e.onPatternBlur)===null||C===void 0||C.call(e,d)}function pe(){var d,C;if(e.filterable)M.value=!1,(d=a.value)===null||d===void 0||d.blur(),(C=n.value)===null||C===void 0||C.blur();else if(e.multiple){const{value:J}=l;J==null||J.blur()}else{const{value:J}=s;J==null||J.blur()}}function me(){var d,C,J;e.filterable?(M.value=!1,(d=a.value)===null||d===void 0||d.focus()):e.multiple?(C=l.value)===null||C===void 0||C.focus():(J=s.value)===null||J===void 0||J.focus()}function ue(){const{value:d}=n;d&&(S(),d.focus())}function ne(){const{value:d}=n;d&&d.blur()}function ye(d){const{value:C}=r;C&&C.setTextContent(`+${d}`)}function ce(){const{value:d}=p;return d}function Fe(){return n.value}let he=null;function ve(){he!==null&&window.clearTimeout(he)}function Re(){e.active||(ve(),he=window.setTimeout(()=>{k.value&&(x.value=!0)},100))}function Me(){ve()}function Pe(d){d||(ve(),x.value=!1)}Ce(k,d=>{d||(x.value=!1)}),ze(()=>{vn(()=>{const d=a.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=M.value?-1:0)})}),zt(o,e.onResize);const{inlineThemeDisabled:we}=e,xe=V(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:C},self:{borderRadius:J,color:Ie,placeholderColor:je,textColor:He,paddingSingle:Ge,paddingMultiple:Ue,caretColor:_e,colorDisabled:Ae,textColorDisabled:Be,placeholderColorDisabled:qe,colorActive:Ye,boxShadowFocus:Ne,boxShadowActive:fe,boxShadowHover:i,border:h,borderFocus:F,borderHover:N,borderActive:I,arrowColor:z,arrowColorDisabled:_,loadingColor:Q,colorActiveWarning:le,boxShadowFocusWarning:Xe,boxShadowActiveWarning:Bt,boxShadowHoverWarning:Nt,borderWarning:Et,borderFocusWarning:$t,borderHoverWarning:Lt,borderActiveWarning:Kt,colorActiveError:Dt,boxShadowFocusError:Vt,boxShadowActiveError:Wt,boxShadowHoverError:jt,borderError:Ht,borderFocusError:Gt,borderHoverError:Ut,borderActiveError:qt,clearColor:Yt,clearColorHover:Xt,clearColorPressed:Jt,clearSize:Zt,arrowSize:Qt,[be("height",d)]:en,[be("fontSize",d)]:tn}}=b.value;return{"--n-bezier":C,"--n-border":h,"--n-border-active":I,"--n-border-focus":F,"--n-border-hover":N,"--n-border-radius":J,"--n-box-shadow-active":fe,"--n-box-shadow-focus":Ne,"--n-box-shadow-hover":i,"--n-caret-color":_e,"--n-color":Ie,"--n-color-active":Ye,"--n-color-disabled":Ae,"--n-font-size":tn,"--n-height":en,"--n-padding-single":Ge,"--n-padding-multiple":Ue,"--n-placeholder-color":je,"--n-placeholder-color-disabled":qe,"--n-text-color":He,"--n-text-color-disabled":Be,"--n-arrow-color":z,"--n-arrow-color-disabled":_,"--n-loading-color":Q,"--n-color-active-warning":le,"--n-box-shadow-focus-warning":Xe,"--n-box-shadow-active-warning":Bt,"--n-box-shadow-hover-warning":Nt,"--n-border-warning":Et,"--n-border-focus-warning":$t,"--n-border-hover-warning":Lt,"--n-border-active-warning":Kt,"--n-color-active-error":Dt,"--n-box-shadow-focus-error":Vt,"--n-box-shadow-active-error":Wt,"--n-box-shadow-hover-error":jt,"--n-border-error":Ht,"--n-border-focus-error":Gt,"--n-border-hover-error":Ut,"--n-border-active-error":qt,"--n-clear-size":Zt,"--n-clear-color":Yt,"--n-clear-color-hover":Xt,"--n-clear-color-pressed":Jt,"--n-arrow-size":Qt}}),ie=we?dt("internal-selection",V(()=>e.size[0]),xe,e):void 0;return{mergedTheme:b,mergedClearable:O,patternInputFocused:M,filterablePlaceholder:W,label:T,selected:k,showTagsPanel:x,isComposing:u,counterRef:r,counterWrapperRef:p,patternInputMirrorRef:t,patternInputRef:n,selfRef:o,multipleElRef:l,singleElRef:s,patternInputWrapperRef:a,overflowRef:c,inputTagElRef:y,handleMouseDown:G,handleFocusin:v,handleClear:B,handleMouseEnter:U,handleMouseLeave:q,handleDeleteOption:K,handlePatternKeyDown:X,handlePatternInputInput:j,handlePatternInputBlur:Oe,handlePatternInputFocus:ke,handleMouseEnterCounter:Re,handleMouseLeaveCounter:Me,handleFocusout:w,handleCompositionEnd:se,handleCompositionStart:ee,onPopoverUpdateShow:Pe,focus:me,focusInput:ue,blur:pe,blurInput:ne,updateCounter:ye,getCounter:ce,getTail:Fe,renderLabel:e.renderLabel,cssVars:we?void 0:xe,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:l,maxTagCount:s,bordered:a,clsPrefix:r,onRender:p,renderTag:c,renderLabel:y}=this;p==null||p();const x=s==="responsive",M=typeof s=="number",A=x||M,b=f(gn,null,{default:()=>f(kn,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var W,T;return(T=(W=this.$slots).arrow)===null||T===void 0?void 0:T.call(W)}})});let O;if(t){const{labelField:W}=this,T=w=>f("div",{class:`${r}-base-selection-tag-wrapper`,key:w.value},c?c({option:w,handleClose:()=>{this.handleDeleteOption(w)}}):f(Ze,{size:n,closable:!w.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(w)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>y?y(w,!0):Se(w[W],w,!0)})),k=()=>(M?this.selectedOptions.slice(0,s):this.selectedOptions).map(T),$=l?f("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),f("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,m=x?()=>f("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},f(Ze,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let S;if(M){const w=this.selectedOptions.length-s;w>0&&(S=f("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},f(Ze,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${w}`})))}const R=x?l?f(wt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:m,tail:()=>$}):f(wt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:m}):M?k().concat(S):k(),D=A?()=>f("div",{class:`${r}-base-selection-popover`},x?k():this.selectedOptions.map(T)):void 0,H=A?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,L=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?f("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},f("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,v=l?f("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},R,x?null:$,b):f("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:o?void 0:0},R,b);O=f(bn,null,A?f(Pn,Object.assign({},H,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>v,default:D}):v,L)}else if(l){const W=this.pattern||this.isComposing,T=this.active?!W:!this.selected,k=this.active?!1:this.selected;O=f("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),k?f("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},f("div",{class:`${r}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):y?y(this.selectedOption,!0):Se(this.label,this.selectedOption,!0))):null,T?f("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,b)}else O=f("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?f("div",{class:`${r}-base-selection-input`,title:Bn(this.label),key:"input"},f("div",{class:`${r}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):y?y(this.selectedOption,!0):Se(this.label,this.selectedOption,!0))):f("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),b);return f("div",{ref:"selfRef",class:[`${r}-base-selection`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,a?f("div",{class:`${r}-base-selection__border`}):null,a?f("div",{class:`${r}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function At(e){return e.type==="ignored"}function it(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function wo(e,t){return{getIsGroup:We,getIgnored:At,getKey(o){return We(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function xo(e,t,n,o){if(!t)return e;function l(s){if(!Array.isArray(s))return[];const a=[];for(const r of s)if(We(r)){const p=l(r[o]);p.length&&a.push(Object.assign({},r,{[o]:p}))}else{if(At(r))continue;t(n,r)&&a.push(r)}return a}return l(e)}function So(e,t,n){const o=new Map;return e.forEach(l=>{We(l)?l[n].forEach(s=>{o.set(s[t],s)}):o.set(l[t],l)}),o}const Co=ae([E("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),E("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Mt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),To=Object.assign(Object.assign({},Te.props),{to:at.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),_o=de({name:"Select",props:To,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:l}=pn(e),s=Te("Select","-select",Co,Sn,e,t),a=P(e.defaultValue),r=te(e,"value"),p=pt(r,a),c=P(!1),y=P(""),x=V(()=>{const{valueField:i,childrenField:h}=e,F=wo(i,h);return vo(w.value,F)}),M=V(()=>So(L.value,e.valueField,e.childrenField)),A=P(!1),b=pt(te(e,"show"),A),O=P(null),W=P(null),T=P(null),{localeRef:k}=On("Select"),$=V(()=>{var i;return(i=e.placeholder)!==null&&i!==void 0?i:k.value.placeholder}),m=Fn(e,["items","options"]),S=[],R=P([]),D=P([]),H=P(new Map),Z=V(()=>{const{fallbackOption:i}=e;if(i===void 0){const{labelField:h,valueField:F}=e;return N=>({[h]:String(N),[F]:N})}return i===!1?!1:h=>Object.assign(i(h),{value:h})}),L=V(()=>D.value.concat(R.value).concat(m.value)),v=V(()=>{const{filter:i}=e;if(i)return i;const{labelField:h,valueField:F}=e;return(N,I)=>{if(!I)return!1;const z=I[h];if(typeof z=="string")return it(N,z);const _=I[F];return typeof _=="string"?it(N,_):typeof _=="number"?it(N,String(_)):!1}}),w=V(()=>{if(e.remote)return m.value;{const{value:i}=L,{value:h}=y;return!h.length||!e.filterable?i:xo(i,v.value,h,e.childrenField)}});function B(i){const h=e.remote,{value:F}=H,{value:N}=M,{value:I}=Z,z=[];return i.forEach(_=>{if(N.has(_))z.push(N.get(_));else if(h&&F.has(_))z.push(F.get(_));else if(I){const Q=I(_);Q&&z.push(Q)}}),z}const U=V(()=>{if(e.multiple){const{value:i}=p;return Array.isArray(i)?B(i):[]}return null}),q=V(()=>{const{value:i}=p;return!e.multiple&&!Array.isArray(i)?i===null?null:B([i])[0]||null:null}),G=mn(e),{mergedSizeRef:K,mergedDisabledRef:X,mergedStatusRef:u}=G;function g(i,h){const{onChange:F,"onUpdate:value":N,onUpdateValue:I}=e,{nTriggerFormChange:z,nTriggerFormInput:_}=G;F&&re(F,i,h),I&&re(I,i,h),N&&re(N,i,h),a.value=i,z(),_()}function j(i){const{onBlur:h}=e,{nTriggerFormBlur:F}=G;h&&re(h,i),F()}function ee(){const{onClear:i}=e;i&&re(i)}function se(i){const{onFocus:h,showOnFocus:F}=e,{nTriggerFormFocus:N}=G;h&&re(h,i),N(),F&&ue()}function ke(i){const{onSearch:h}=e;h&&re(h,i)}function Oe(i){const{onScroll:h}=e;h&&re(h,i)}function pe(){var i;const{remote:h,multiple:F}=e;if(h){const{value:N}=H;if(F){const{valueField:I}=e;(i=U.value)===null||i===void 0||i.forEach(z=>{N.set(z[I],z)})}else{const I=q.value;I&&N.set(I[e.valueField],I)}}}function me(i){const{onUpdateShow:h,"onUpdate:show":F}=e;h&&re(h,i),F&&re(F,i),A.value=i}function ue(){X.value||(me(!0),A.value=!0,e.filterable&&Be())}function ne(){me(!1)}function ye(){y.value="",D.value=S}const ce=P(!1);function Fe(){e.filterable&&(ce.value=!0)}function he(){e.filterable&&(ce.value=!1,b.value||ye())}function ve(){X.value||(b.value?e.filterable?Be():ne():ue())}function Re(i){var h,F;!((F=(h=T.value)===null||h===void 0?void 0:h.selfRef)===null||F===void 0)&&F.contains(i.relatedTarget)||(c.value=!1,j(i),ne())}function Me(i){se(i),c.value=!0}function Pe(i){c.value=!0}function we(i){var h;!((h=O.value)===null||h===void 0)&&h.$el.contains(i.relatedTarget)||(c.value=!1,j(i),ne())}function xe(){var i;(i=O.value)===null||i===void 0||i.focus(),ne()}function ie(i){var h;b.value&&(!((h=O.value)===null||h===void 0)&&h.$el.contains(Cn(i))||ne())}function d(i){if(!Array.isArray(i))return[];if(Z.value)return Array.from(i);{const{remote:h}=e,{value:F}=M;if(h){const{value:N}=H;return i.filter(I=>F.has(I)||N.has(I))}else return i.filter(N=>F.has(N))}}function C(i){J(i.rawNode)}function J(i){if(X.value)return;const{tag:h,remote:F,clearFilterAfterSelect:N,valueField:I}=e;if(h&&!F){const{value:z}=D,_=z[0]||null;if(_){const Q=R.value;Q.length?Q.push(_):R.value=[_],D.value=S}}if(F&&H.value.set(i[I],i),e.multiple){const z=d(p.value),_=z.findIndex(Q=>Q===i[I]);if(~_){if(z.splice(_,1),h&&!F){const Q=Ie(i[I]);~Q&&(R.value.splice(Q,1),N&&(y.value=""))}}else z.push(i[I]),N&&(y.value="");g(z,B(z))}else{if(h&&!F){const z=Ie(i[I]);~z?R.value=[R.value[z]]:R.value=S}Ae(),ne(),g(i[I],i)}}function Ie(i){return R.value.findIndex(F=>F[e.valueField]===i)}function je(i){b.value||ue();const{value:h}=i.target;y.value=h;const{tag:F,remote:N}=e;if(ke(h),F&&!N){if(!h){D.value=S;return}const{onCreate:I}=e,z=I?I(h):{[e.labelField]:h,[e.valueField]:h},{valueField:_,labelField:Q}=e;m.value.some(le=>le[_]===z[_]||le[Q]===z[Q])||R.value.some(le=>le[_]===z[_]||le[Q]===z[Q])?D.value=S:D.value=[z]}}function He(i){i.stopPropagation();const{multiple:h}=e;!h&&e.filterable&&ne(),ee(),h?g([],[]):g(null,null)}function Ge(i){!De(i,"action")&&!De(i,"empty")&&i.preventDefault()}function Ue(i){Oe(i)}function _e(i){var h,F,N,I,z;if(!e.keyboard){i.preventDefault();return}switch(i.key){case" ":if(e.filterable)break;i.preventDefault();case"Enter":if(!(!((h=O.value)===null||h===void 0)&&h.isComposing)){if(b.value){const _=(F=T.value)===null||F===void 0?void 0:F.getPendingTmNode();_?C(_):e.filterable||(ne(),Ae())}else if(ue(),e.tag&&ce.value){const _=D.value[0];if(_){const Q=_[e.valueField],{value:le}=p;e.multiple&&Array.isArray(le)&&le.some(Xe=>Xe===Q)||J(_)}}}i.preventDefault();break;case"ArrowUp":if(i.preventDefault(),e.loading)return;b.value&&((N=T.value)===null||N===void 0||N.prev());break;case"ArrowDown":if(i.preventDefault(),e.loading)return;b.value?(I=T.value)===null||I===void 0||I.next():ue();break;case"Escape":b.value&&(Tn(i),ne()),(z=O.value)===null||z===void 0||z.focus();break}}function Ae(){var i;(i=O.value)===null||i===void 0||i.focus()}function Be(){var i;(i=O.value)===null||i===void 0||i.focusInput()}function qe(){var i;b.value&&((i=W.value)===null||i===void 0||i.syncPosition())}pe(),Ce(te(e,"options"),pe);const Ye={focus:()=>{var i;(i=O.value)===null||i===void 0||i.focus()},focusInput:()=>{var i;(i=O.value)===null||i===void 0||i.focusInput()},blur:()=>{var i;(i=O.value)===null||i===void 0||i.blur()},blurInput:()=>{var i;(i=O.value)===null||i===void 0||i.blurInput()}},Ne=V(()=>{const{self:{menuBoxShadow:i}}=s.value;return{"--n-menu-box-shadow":i}}),fe=l?dt("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},Ye),{mergedStatus:u,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:x,isMounted:yn(),triggerRef:O,menuRef:T,pattern:y,uncontrolledShow:A,mergedShow:b,adjustedTo:at(e),uncontrolledValue:a,mergedValue:p,followerRef:W,localizedPlaceholder:$,selectedOption:q,selectedOptions:U,mergedSize:K,mergedDisabled:X,focused:c,activeWithoutMenuOpen:ce,inlineThemeDisabled:l,onTriggerInputFocus:Fe,onTriggerInputBlur:he,handleTriggerOrMenuResize:qe,handleMenuFocus:Pe,handleMenuBlur:we,handleMenuTabOut:xe,handleTriggerClick:ve,handleToggle:C,handleDeleteOption:J,handlePatternInput:je,handleClear:He,handleTriggerBlur:Re,handleTriggerFocus:Me,handleKeydown:_e,handleMenuAfterLeave:ye,handleMenuClickOutside:ie,handleMenuScroll:Ue,handleMenuKeydown:_e,handleMenuMousedown:Ge,mergedTheme:s,cssVars:l?void 0:Ne,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){return f("div",{class:`${this.mergedClsPrefix}-select`},f(zn,null,{default:()=>[f(In,null,{default:()=>f(yo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),f(_n,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===at.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>f(Rt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),wn(f(po,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,l;return[(l=(o=this.$slots).empty)===null||l===void 0?void 0:l.call(o)]},action:()=>{var o,l;return[(l=(o=this.$slots).action)===null||l===void 0?void 0:l.call(o)]}}),this.displayDirective==="show"?[[xn,this.mergedShow],[bt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[bt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{po as N,Ln as V,_o as _,wo as a,vo as c,Bn as g,De as h,Qe as m};
