"use strict";(self.webpackChunkamis_editor_demo=self.webpackChunkamis_editor_demo||[]).push([[6912],{86912:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var n=t(58168),i=t(96540),l=t(36607),r=t(94802),c=t(99651),s=t(71519),o=function(){return i.createElement(r.Mku,{links:i.createElement(s.N_,{to:"/",className:"list-group-item"},i.createElement("i",{className:"fa fa-chevron-right text-muted"}),i.createElement("i",{className:"fa fa-fw fa-mail-forward m-r-xs"}),"去首页"),footerText:""})},d=t(71376),m=t(98587),p=["onConfirm","pages"],u=(0,d.h)({type:"dialog",title:"新增页面",body:{type:"form",controls:[{type:"text",label:"名称",name:"label",validations:{maxLength:20},required:!0},{type:"text",label:"路径",name:"path",validations:{isUrlPath:!0},required:!0,validate:function(e,a){return e.pages.filter((function(e){return e.path===a})).length?"当前路径已被占用，请换一个":""}},{type:"icon-picker",label:"图标",name:"icon"}]}},(function(e){var a=e.onConfirm,t=e.pages,i=(0,m.A)(e,p);return(0,n.A)({},i,{data:{pages:t},onConfirm:function(e){return a&&a(e[0])}})})),f=t(84334),h=(0,l.WQ)("store")((0,l.PA)((function(e){var a,t,l=e.store,m=e.location,p=e.history;return i.createElement(r.PEP,{aside:(a=l.pages.map((function(e){return{label:e.label,path:"/"+e.path,icon:e.icon}})),t=a.map((function(e){return e.path})),i.createElement(r.aeI,{key:l.asideFolded?"folded-aside":"aside",navigations:[{label:"导航",children:a}],renderLink:function(e){var a=e.link,n=e.toggleExpand,c=e.classnames,o=e.depth;if(a.hidden)return null;var d=[];return a.children&&d.push(i.createElement("span",{key:"expand-toggle",className:c("AsideNav-itemArrow"),onClick:function(e){return n(a,e)}})),a.badge&&d.push(i.createElement("b",{key:"badge",className:c("AsideNav-itemBadge",a.badgeClassName||"bg-info")},a.badge)),a.icon?d.push(i.createElement("i",{key:"icon",className:c("AsideNav-itemIcon",a.icon)})):l.asideFolded&&1===o&&d.push(i.createElement("i",{key:"icon",className:c("AsideNav-itemIcon",a.children?"fa fa-folder":"fa fa-info")})),a.active||d.push(i.createElement("i",{key:"delete","data-tooltip":"删除","data-position":"bottom",className:"navbtn fa fa-times",onClick:function(e){e.preventDefault(),(0,r.lJp)("确认要删除").then((function(e){e&&l.removePageAt(t.indexOf(a.path))}))}})),d.push(i.createElement("i",{key:"edit","data-tooltip":"编辑","data-position":"bottom",className:"navbtn fa fa-pencil",onClick:function(e){e.preventDefault(),p.push("/edit/"+t.indexOf(a.path))}})),d.push(i.createElement("span",{key:"label",className:c("AsideNav-itemLabel")},a.label)),a.path?a.active?i.createElement("a",null,d):i.createElement(s.N_,{to:"/"===a.path[0]?a.path:""+a.path},d):i.createElement("a",{onClick:a.onClick?a.onClick:a.children?function(){return n(a)}:void 0},d)},isActive:function(e){return function(e,a){return!!(0,c.B6)(null==a?void 0:a.pathname,{path:e?e.replace(/\?.*$/,""):"",exact:!0,strict:!0})}(e.path&&"/"===e.path[0]?e.path:""+e.path,m)}})),header:i.createElement(i.Fragment,null,i.createElement("div",{className:"cxd-Layout-brandBar"},i.createElement("div",{className:"cxd-Layout-brand text-ellipsis"},i.createElement("i",{className:"fa fa-paw"}),i.createElement("span",{className:"hidden-folded m-l-sm"},"AMIS 页面编辑器"))),i.createElement("div",{className:"cxd-Layout-headerBar"},i.createElement("div",{className:"hidden-xs ml-auto px-2"},i.createElement(r.$nd,{className:"hidden-xs ml-2 px-2",size:"sm",level:"info",onClick:function(){l.initData()}},"重新加载"),i.createElement(r.$nd,{className:"hidden-xs ml-2 px-2",size:"sm",level:"info",onClick:function(){return l.setAddPageIsOpen(!0)}},"新增页面"),i.createElement(r.$nd,{className:"hidden-xs ml-2 px-2",size:"sm",level:"danger",onClick:function(){return(0,f.ri)()}},"退出登录")))),folded:l.asideFolded,offScreen:l.offScreen},i.createElement(c.dO,null,l.pages.map((function(e){return i.createElement(c.qh,{key:e.id,path:"/"+e.path,render:function(){return i.createElement(d.A,{schema:e.schema})}})})),i.createElement(c.qh,{component:o})),i.createElement(u,{show:l.addPageIsOpen,onClose:function(){return l.setAddPageIsOpen(!1)},onConfirm:function(e){l.addPage((0,n.A)({},e,{schema:{type:"page",title:e.label,body:"这是你刚刚新增的页面。"}})),l.setAddPageIsOpen(!1)},pages:l.pages.concat()}))})))}}]);