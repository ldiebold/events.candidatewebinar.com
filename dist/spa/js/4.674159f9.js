(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[n("q-layout",{attrs:{view:"lHr Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[e.user&&(e.userIsIbo||e.userIsAdmin||e.userIsSuperAdmin||e.userIsCandidate)?n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"mdi-menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n          Events\n        ")]),n("MSelectAppButton",{attrs:{icon:"mdi-apps",dense:"",flat:"","current-app-name":"events",user:e.user}}),n("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",icon:"mdi-logout",round:""},on:{click:e.handleLogout}}),n("q-btn",{class:{"q-ml-sm":!0,"bg-white":e.rightDrawerOpen,"text-grey-8":e.rightDrawerOpen},attrs:{flat:"",dense:"",round:"",icon:"mdi-account-group","aria-label":"Menu"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}})],1):e._e(),e.user&&e.userIsCandidate?n("q-toolbar",{staticClass:"bg-white text-grey-9"},[n("q-toolbar-title",[e._v("\n          Events\n        ")]),n("q-btn",{attrs:{flat:"",icon:"mdi-logout",round:""},on:{click:e.handleLogout}})],1):e._e()],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n          Online Events\n        ")]),e._l(e.onlineEvents,(function(t){return n("q-item",{key:t.id,attrs:{clickable:"",to:"/event/"+t.id}},[n("q-item-section",[n("q-item-label",[e._v("\n              "+e._s(t.title)+"\n            ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(t.description)+"\n            ")])],1)],1)}))],2)],1),n("q-page-container",[n("router-view")],1)],1)],1):e._e()},a=[],s=n("c175"),i={name:"MainLayout",components:{MSelectAppButton:s["f"]},methods:{handleLogout(){this.visible=!1;const e=this;this.$auth.logout().then((()=>{setTimeout((()=>{e.$router.go("/login")}),300)}))}},computed:{user(){return this.$MUser.getSessionUser()},userIsIbo(){return this.user&&"ibo"===this.user.role},userIsCandidate(){return this.user&&"candidate"===this.user.role},userIsAdmin(){return this.user&&"admin"===this.user.role},userIsSuperAdmin(){return this.user&&"super admin"===this.user.role},onlineEvents(){return this.$MOnlineEvent.all()}},mounted(){this.userIsCandidate||this.$MTutorialVideo.$get(),this.onlineEvents.length||(this.fetchingEvents=!0,this.$MOnlineEvent.$get()),setTimeout((()=>{this.visible=!0}),400)},data(){return{leftDrawerOpen:!1,rightDrawerOpen:!1,visible:!1}}},o=i,l=n("a6c2"),u=n("f624"),c=n("8738"),d=n("66cf"),h=n("ef9c"),p=n("309f"),m=n("5cc9"),b=n("692f"),f=n("dc7c"),v=n("e0e9"),g=n("6c44"),w=n("ddc7"),q=n("63c1"),I=n.n(q),O=Object(l["a"])(o,r,a,!1,null,null,null);t["default"]=O.exports;I()(O,"components",{QLayout:u["a"],QHeader:c["a"],QToolbar:d["a"],QBtn:h["a"],QToolbarTitle:p["a"],QDrawer:m["a"],QList:b["a"],QItemLabel:f["a"],QItem:v["a"],QItemSection:g["a"],QPageContainer:w["a"]})}}]);