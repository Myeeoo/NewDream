var yao_amis={loginUrl:"/amis-editor/#/login",reloadUrl:"/amis-editor/",getTokenStorageType(){const e=localStorage.getItem("xgen:token_storage");let t="localStorage";if(null!=e)try{"sessionStorage"===JSON.parse(e).value&&(t="sessionStorage")}catch(e){}return t},setTokenStorageType(e){const t="localStorage"===e?"localStorage":"sessionStorage";this.xgenSetStorage("xgen:token_storage",t,"localStorage")},xgenSetStorage(e,t,o){let n="sessionStorage"===o?sessionStorage:localStorage,s="String",r=t;switch(typeof t){case"string":s="String",r=encodeURIComponent(t);break;case"object":s="Object",Array.isArray(t)&&(s="Array");break;case"number":s="Number";break;default:console.log("Error=========> Not Support Type:"+typeof t)}n.setItem(e,JSON.stringify({type:s,value:r}))},xgenGetStorage(e,t){let o=("sessionStorage"===t?sessionStorage:localStorage).getItem(e);if(null!=o&&e.startsWith("xgen:"))try{o=JSON.parse(o)}catch(e){}return o},afterLogin(e){const t=encodeURIComponent(e.token);let o=new Date;e.expires_at?o.setTime(1e3*e.expires_at):o.setTime(o.getTime()+864e5);let n="expires="+o.toGMTString();document.cookie=`token=${t};${n};path=/`,document.cookie=`username=${e.user.name};${n};path=/`,document.cookie=`email=${e.user.email};${n};path=/`;const s=this.getTokenStorageType();this.xgenSetStorage("xgen:token",t,s),this.xgenSetStorage("xgen:menus",e.menus),this.xgenSetStorage("xgen:menu",e.menus.items),this.xgenSetStorage("xgen:user",e.user),e.studio&&(e.studio.expires_at?o.setTime(1e3*e.studio.expires_at):o.setTime(o.getTime()+864e5),n="expires="+o.toGMTString(),document.cookie=`studio=${encodeURIComponent(e.studio.token)};${n};path=/`,this.xgenSetStorage("xgen:studio",e.studio,s))},login(e,t,o,n){let s=e;return s.data&&(s=s.data),"msg"in s&&"status"in s&&0!=s.status?s:(200===t.status&&e&&(this.afterLogin(s),this.reloadUrl&&(window.location.href=this.reloadUrl)),{status:0,msg:"登录成功",data:s})},logout(e){document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/",document.cookie="studio=; expires=Thu, 01 Jan 1970 00:00:01 GMT; ; path=/",localStorage.removeItem("xgen:token"),localStorage.removeItem("xgen:token"),sessionStorage.removeItem("xgen:token"),sessionStorage.removeItem("xgen:token"),e&&(window.location.href=loginUrl)},getCookie(e){const t=document.cookie.split(";");for(let o=0;o<t.length;o++){const n=t[o].trim();if(n.startsWith(e+"="))return n.substring(e.length+1)}return null},setCookie(e,t,o){let n="";if(o){let e=new Date;e.setTime(e.getTime()+60*o*60*1e3),n="; expires="+e.toUTCString()}document.cookie=e+"="+(t||"")+n+"; path=/"},deleteCookie(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"},deleteToken(e){const t=e||"token";sessionStorage.removeItem(`xgen:${t}`),localStorage.getItem(`xgen:${t}`),this.deleteCookie(t)},getToken(e){const t=e||"token",o=this.getTokenStorageType();let n=this.xgenGetStorage(`xgen:${t}`,o);return n&&(n=n.value,"studio"==t&&(n=n.value.token)),n?this.setCookie(t,n,8):this.deleteCookie(t),n},checkToken(){this.getToken()||(window.location.href=this.loginUrl)},checkStudioToken(){this.getToken("studio")||(window.location.href=this.loginUrl)},generateUniqueId(){return`${Date.now().toString(36)}-${Math.random().toString(36).substr(2,25)}`}};