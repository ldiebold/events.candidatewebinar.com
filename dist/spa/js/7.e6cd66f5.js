(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"013f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e.visible?s("div",[s("q-btn",{staticClass:"q-mt-sm q-ml-sm",attrs:{flat:"",round:"",icon:"mdi-home",type:"a",href:e.homeUrl,color:"grey-5"}}),s("SanctumLoginPage",{on:{success:e.handleSuccess}})],1):e._e()])},n=[],i=s("1754"),c={props:{},mounted(){setTimeout((()=>{this.visible=!0}),300)},components:{SanctumLoginPage:i["b"]},computed:{homeUrl(){return"https://candidatewebinar.com"}},methods:{handleSuccess(e){this.visible=!1,setTimeout((()=>{this.$router.push("/")}),300)}},data(){return{visible:!1}}},o=c,r=s("a6c2"),l=s("ef9c"),u=s("63c1"),m=s.n(u),d=Object(r["a"])(o,a,n,!1,null,null,null);t["default"]=d.exports;m()(d,"components",{QBtn:l["a"]})}}]);