import{d as U,bk as L,bc as _,r as v,bj as j,bv as P,bT as S,z as T,bU as x,w as R,B as O,aP as q,aQ as E}from"./index.js";function A(t,f){var n,p,m,l,w;if(t&&t.headers&&t.headers["content-disposition"]){const s=t.headers["content-disposition"];let o="";if(s&&s.indexOf("attachment")!==-1){if(f!=null&&f.downloadFileName)o=f.downloadFileName;else{const i=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/i,d=s.match(i);d&&d.length&&(o=d[1].replace("UTF-8''","").replace(/['"]/g,"")),o&&o.replace(/[^%]/g,"").length>2&&(o=decodeURIComponent(o))}const u=t.headers["content-type"],b=((n=t.data)==null?void 0:n.data.toString())==="[object Blob]"?(p=t.data)==null?void 0:p.data:new Blob([(m=t.data)==null?void 0:m.data],{type:u});if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(b,o);else{const i=window.URL||window.webkitURL,d=i.createObjectURL(b);if(o){const e=document.createElement("a");typeof e.download>"u"?window.location=d:(e.href=d,e.download=o,document.body.appendChild(e),e.click())}else window.location=d;setTimeout(()=>{i.revokeObjectURL(d)},100)}return{...t,data:{status:0,msg:"Embed.downloading"}}}}else if((l=t.data)!=null&&l.data&&((w=t.data)==null?void 0:w.data.toString())==="[object Blob]")return new Promise((s,o)=>{const u=new FileReader;u.addEventListener("loadend",b=>{const i=u.result;try{s({...t,data:{...JSON.parse(i)}})}catch(d){o(d)}}),u.readAsText(t.data)});return t}const I=U({__name:"amis-renderer",props:{schema:{},locale:{},props:{},env:{}},emits:["ready"],setup(t,{emit:f}){const n=t,p=L(),m=_(),l=v({}),w=v(),s=j(),o=P({siteName:"AMIS DEMO"}),u=d(),b=amisRequire("amis/embed"),{normalizeLink:i}=amisRequire("amis");function d(){return{pathname:s.path,hash:s.hash,query:s.query,search:`?${S.stringify(s.query)}`}}return T(()=>{const e=b.embed(w.value,n.schema,{data:{locale:n.locale},context:o,location:u,...n.props},{fetcher:async c=>{const{url:r,method:a,data:k,responseType:y,config:h,headers:B}=c;h&&(h.headers=h.headers||{},Object.assign(h.headers,B)),y&&(h.responseType=y);let g=await x(r,a,k,h);return g=A(g,c),g},jumpTo:(c,r)=>{let a=c;if(a==="goBack"){m.go(-1);return}if(a=i(a,u),(r==null?void 0:r.actionType)==="url"){r.blank===!1?p.routerPush(a):window.open(a);return}if(r&&a&&r.target){window.open(a,r.target);return}/^https?:\/\//.test(a)?window.location.replace(a):p.routerPush(a)},updateLocation:(c,r)=>{let a=c;if(a==="goBack"){m.go(-1);return}a=i(a,a),r&&m.replace(a)},enableAMISDebug:!0,...n.env},()=>{f("ready",{instance:e})});l.value=e}),R([()=>n.schema],()=>{var e,c;if((e=l.value)==null||e.updateSchema(n.schema),s.params&&Object.keys(s.params).length>0){const r={data:{params:s.params}};(c=l.value)==null||c.updateProps(r)}}),R([()=>n.locale,()=>n.props,()=>m],()=>{var e;(e=l.value)==null||e.updateProps({data:{locale:n.locale},context:o,...n.props})}),O(()=>{var e;(e=l.value)==null||e.unmount()}),(e,c)=>(q(),E("div",{ref_key:"amisRenderer",ref:w},null,512))}});export{I as _};
