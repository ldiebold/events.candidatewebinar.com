(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[e.user&&(e.userIsIbo||e.userIsAdmin)?n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        Team Pickersgill Events\n      ")]),n("q-btn",{attrs:{flat:"",icon:"logout",round:""},on:{click:e.handleLogout}})],1):e._e(),e.user&&e.userIsCandidate?n("q-toolbar",{staticClass:"bg-white text-grey-9"},[n("q-toolbar-title",[e._v("\n        Team Pickersgill Events\n      ")]),n("q-btn",{attrs:{flat:"",icon:"logout",round:""},on:{click:e.handleLogout}})],1):e._e()],1),e.user&&(e.userIsIbo||e.userIsAdmin)?n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Online Events\n      ")]),e._l(e.onlineEvents,(function(t){return n("q-item",{key:t.id,attrs:{clickable:"",to:"/event/"+t.id}},[n("q-item-section",[n("q-item-label",[e._v("\n            "+e._s(t.title)+"\n          ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n            "+e._s(t.description)+"\n          ")])],1)],1)}))],2)],1):e._e(),n("q-page-container",[n("router-view")],1)],1)},a=[],s={name:"MainLayout",components:{},methods:{handleLogout(){const e=this;this.$auth.logout().then((()=>{console.log(e.$router),e.$router.go("/login")}))}},computed:{user(){const e=this.$store.state.entities.users.current_user_id;return this.$MUser.find(e)},userIsIbo(){return this.user&&"ibo"===this.user.role},userIsCandidate(){return this.user&&"candidate"===this.user.role},userIsAdmin(){return this.user&&"admin"===this.user.role},onlineEvents(){return this.$MOnlineEvent.all()}},mounted(){this.onlineEvents.length||(this.fetchingEvents=!0,this.$MOnlineEvent.$get())},data(){return{leftDrawerOpen:!1,menuItems:[{icon:"person",label:"Candidates",description:"manage candidate accounts",to:"/candidates"},{icon:"calendar",label:"Events",description:"create and edit events",to:"/events"}]}}},o=s,i=n("a6c2"),l=n("f624"),c=n("8738"),u=n("66cf"),d=n("ef9c"),b=n("309f"),h=n("5cc9"),m=n("692f"),f=n("dc7c"),v=n("e0e95"),p=n("6c44"),g=n("ddc7"),w=n("63c1"),q=n.n(w),I=Object(i["a"])(o,r,a,!1,null,null,null);t["default"]=I.exports;q()(I,"components",{QLayout:l["a"],QHeader:c["a"],QToolbar:u["a"],QBtn:d["a"],QToolbarTitle:b["a"],QDrawer:h["a"],QList:m["a"],QItemLabel:f["a"],QItem:v["a"],QItemSection:p["a"],QPageContainer:g["a"]})}}]);