import{d as _,bQ as l,r as n,bj as r,bR as p,aK as u,bS as d,aP as f,aS as h}from"./index.js";import{_ as v}from"./amis-renderer.vue_vue_type_script_setup_true_lang.js";import{_ as x}from"./_plugin-vue_export-helper.js";const S=_({__name:"index",setup(g){const i=amisRequire("amis");l(i);const s=n({}),m=r(),t=n("zh-CN"),o=p.setStore(u()).getSettingItem("locale")||"zh-CN";t.value=o==="en"?"en-US":o;const e=m.meta;return e&&e.schemaApi&&e.schemaApi!==""&&d(e.schemaApi).then(async c=>{var a;s.value=(a=c.data)==null?void 0:a.data}),(c,a)=>(f(),h(v,{schema:s.value,locale:t.value,class:"amis-region"},null,8,["schema","locale"]))}});const A=x(S,[["__scopeId","data-v-713d4f60"]]);export{A as default};
