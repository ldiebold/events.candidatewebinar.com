(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={1:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{2:"95724f69",3:"cfd226dc",4:"c0289c2b",5:"ff402cf1",6:"fac64db6",7:"542b2402",8:"802c363d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("15db"),n("cbcf"),n("2233"),n("2f72"),n("9ce7"),n("7e6d");var r=n("e832"),o=n("b661"),a=n("8c49"),i=n("f846"),u=n("f6b1");r["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"],directives:{ClosePopup:u["a"]}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],l={name:"App"},p=l,d=n("a6c2"),f=Object(d["a"])(p,c,s,!1,null,null,null),h=f.exports,b=n("94ea"),v=n("e3c3"),g=n("8ed0"),m=n("ebd1");class w extends g["OnlineEvent"]{}class y extends g["OnlineEventUser"]{}const _=new v["default"].Database;_.register(m["a"]),_.register(w),_.register(y);var P=_;r["a"].use(b["a"]),v["default"].use(g["VuexOrmRestPlugin"],{api_url:"https://api.candidatewebinar.com/api"}),v["default"].use(g["SchemaPlugin"],{database:P});var O=function(){const e=new b["a"].Store({plugins:[v["default"].install(P)],strict:!1});return e},x=n("4af9");const j=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(6).then(n.bind(null,"8b24")),beforeEnter(e,t,n){S(n)}},{path:"event/:online_event_id",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"2721")),beforeEnter(e,t,n){S(n)}},{path:"candidate",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"dd6a"))}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"cffb")),children:[{path:"/login",name:"login",component:()=>n.e(7).then(n.bind(null,"013f"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var E=j;function S(e){const t=m["a"].getSessionUser()||m["a"].query().first();if("candidate"!==t.role)return e();e("candidate")}var k=n("1754");r["a"].use(x["a"]);var q=function(e){const t=new x["a"]({scrollBehavior:()=>({x:0,y:0}),routes:E,mode:"history",base:"/"});return t.beforeEach(((t,n,r)=>C(t,n,r,e))),t};function C(e,t,n,r){const o={localUser:m["a"].query().first(),fetch_user:()=>m["a"].$session(),auth_endpoint:"https://api.candidatewebinar.com/login",login_endpoint:"/login",logout_endpoint:"/logout",errorNotifier:()=>alert("error"),public_routes:["/logout","/login"],home_endpoint:"/"},a=new k["a"](o,e,t,n);return a.authorize()}var M=async function(){const e="function"===typeof O?await O({Vue:r["a"]}):O,t="function"===typeof q?await q({Vue:r["a"],store:e}):q;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}},T=({store:e})=>{Object(g["RegisterModelAliasesToVue"])(r["a"],e)},V=n("7338"),$=n.n(V);$.a.defaults.withCredentials=!0,r["a"].prototype.$axios=$.a;var U=n("8d35"),A=n.n(U),J=n("b106");A.a.extend(J);var L=n("7014");A.a.extend(L),r["a"].prototype.$dayjs=A.a;var R=n("8746");const z="/";async function B(){const{app:e,store:t,router:n}=await M();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),u=[T,void 0,void 0,R["a"]];for(let s=0;!1===o&&s<u.length;s++)if("function"===typeof u[s])try{await u[s]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:z})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new r["a"](e)}B()},4763:function(e,t,n){"use strict";t["a"]={login_url:"https://api.process.test/login",logout_url:"https://api.process.test/logout",user_endpoint:"https://api.candidatewebinar.com/api/user",csrf_cookie_url:"https://api.candidatewebinar.com/sanctum/csrf-cookie"}},"7e6d":function(e,t,n){},ebd1:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8ed0");class o extends r["User"]{}}});