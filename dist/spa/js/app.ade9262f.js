(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},a={1:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{2:"8588dc0a",3:"3a7be9f5",4:"8d1a1c2b",5:"e80ae11b",6:"e9f63d26",7:"3bcdfc3a",8:"858e8e3e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"fac77092",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("15db"),n("cbcf"),n("2233"),n("2f72"),n("9ce7"),n("7e6d");var r=n("e832"),o=n("b661"),a=n("8c49"),i=n("f846"),u=n("f6b1");r["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"],directives:{ClosePopup:u["a"]}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],l={name:"App"},d=l,f=n("a6c2"),p=Object(f["a"])(d,c,s,!1,null,null,null),h=p.exports,b=n("94ea"),v=n("e3c3"),g=n("8ed0"),m=n("ebd1");class y extends g["OnlineEvent"]{}class w extends g["OnlineEventUser"]{}const _=new v["default"].Database;_.register(m["a"]),_.register(y),_.register(w);var P=_;r["a"].use(b["a"]),v["default"].use(g["VuexOrmRestPlugin"],{api_url:"https://api.candidatewebinar.com/api"}),v["default"].use(g["SchemaPlugin"],{database:P});var O=function(){const e=new b["a"].Store({plugins:[v["default"].install(P)],strict:!1});return e},x=n("4af9");const j=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(7).then(n.bind(null,"8b24")),beforeEnter(e,t,n){S(n)}},{path:"event/:online_event_id",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"2721")),beforeEnter(e,t,n){S(n)}},{path:"candidate",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"dd6a"))}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"cffb")),children:[{path:"/login",name:"login",component:()=>n.e(8).then(n.bind(null,"013f"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"e51e"))}];var E=j;function S(e){const t=m["a"].getSessionUser()||m["a"].query().first();if("candidate"!==t.role)return e();e("candidate")}var C=n("1754");r["a"].use(x["a"]);var k=function(e){const t=new x["a"]({scrollBehavior:()=>({x:0,y:0}),routes:E,mode:"history",base:"/"});return t.beforeEach(((t,n,r)=>A(t,n,r,e))),t};function A(e,t,n,r){const o={localUser:m["a"].query().first(),fetch_user:()=>m["a"].$session(),auth_endpoint:"https://api.candidatewebinar.com/login",login_endpoint:"/login",logout_endpoint:"/logout",errorNotifier:()=>alert("error"),public_routes:["/logout","/login"],home_endpoint:"/"},a=new C["a"](o,e,t,n);return a.authorize()}var T=async function(){const e="function"===typeof O?await O({Vue:r["a"]}):O,t="function"===typeof k?await k({Vue:r["a"],store:e}):k;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}},q=({store:e})=>{Object(g["RegisterModelAliasesToVue"])(r["a"],e)},N=n("7338"),L=n.n(N);L.a.defaults.withCredentials=!0,r["a"].prototype.$axios=L.a;var M=n("8d35"),U=n.n(M),V=n("b106");U.a.extend(V);var $=n("7014");U.a.extend($),r["a"].prototype.$dayjs=U.a;var B=n("8746");const D="/";async function J(){const{app:e,store:t,router:n}=await T();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),u=[q,void 0,void 0,B["a"]];for(let s=0;!1===o&&s<u.length;s++)if("function"===typeof u[s])try{await u[s]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:D})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new r["a"](e)}J()},4763:function(e,t,n){"use strict";t["a"]={login_url:"https://api.process.test/login",logout_url:"https://api.process.test/logout",user_endpoint:"https://api.candidatewebinar.com/api/user",csrf_cookie_url:"https://api.candidatewebinar.com/sanctum/csrf-cookie"}},"7e6d":function(e,t,n){},ebd1:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8ed0");class o extends r["User"]{}}});