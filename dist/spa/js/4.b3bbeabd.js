(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{dd6a:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.closest_online_event?s("OnlineEventPage",{attrs:{"online-event-candidate":e.closest_online_event}}):s("div")},n=[],a=(s("68e1"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{attrs:{padding:""}},[e.onlineEvent?s("div",{staticClass:"column items-center"},[!1===e.session_has_started&&!1===e.session_has_ended?s("q-banner",{staticClass:"bg-blue text-white full-width q-mb-lg"},[e._v("\n      Session will start "+e._s(e.timeUntilStartHumanized)+"\n    ")]):e._e(),!0===e.session_has_ended?s("q-banner",{staticClass:"bg-grey-8 text-white full-width q-mb-lg"},[e._v("\n      Session has Ended\n    ")]):e._e(),!0!==e.session_has_ended?s("div",{staticClass:"text-h2 text-grey-8"},[e._v("\n      "+e._s(e.onlineEvent.title)+"\n    ")]):e._e(),!0!==e.session_has_ended?s("div",{staticClass:"text-h5 text-grey-6 q-mb-sm"},[e._v("\n      "+e._s(e.onlineEvent.description)+"\n    ")]):e._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.session_has_started&&!1===e.session_has_ended,expression:"session_has_started === true && session_has_ended === false"}],staticClass:"full-width",staticStyle:{"max-width":"60%"}},[e.videoId?s("WistiaVideo",{ref:"video",attrs:{"video-id":e.videoId},on:{ready:e.handleVideoReady}}):e._e()],1)],1):e._e()])}),d=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",e._g(e._b({staticClass:"shadow-8"},"q-card",e.$attrs,!1),e.$listeners),[s("div",{staticClass:"wistia_responsive_padding",staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[s("div",{staticClass:"wistia_responsive_wrapper",staticStyle:{height:"100%",left:"0",position:"absolute",top:"0",width:"100%"}},[s("iframe",{staticClass:"wistia_embed",attrs:{src:"https://fast.wistia.net/embed/iframe/"+e.videoId+"?videoFoam=true",title:"Quick overview (How we're gonna make this happen!) Video",allowtransparency:"true",frameborder:"0",scrolling:"no",name:"wistia_embed",width:"100%",height:"100%"}})])])])},r=[],l=(s("534d"),{props:{videoId:{required:!0,type:String}},components:{},computed:{},created(){let e=this;window._wq=window._wq||[],_wq.push({id:this.videoId,onReady:function(t){e.video=t,e.$emit("ready",t)}})},methods:{exec(e,...t){return this.video[e](...t)}},data(){return{video:null}}}),h=l,v=s("a6c2"),u=s("5ce7"),c=s("63c1"),_=s.n(c),m=Object(v["a"])(h,o,r,!1,null,null,null),w=m.exports;_()(m,"components",{QCard:u["a"]});var g=s("8d35"),p=s.n(g),S=s("3cf6"),f=s.n(S),y=(s("4498"),s("7014"));p.a.extend(y);var E={name:"EventPage",components:{WistiaVideo:w},props:{onlineEventCandidate:{required:!1,type:[Object,Boolean],default:!1}},data(){return{live_leeway:10,video_visible:!1,session_has_started:null,session_has_ended:null,timeUntilStartHumanized:null}},mounted(){const e=this;setInterval((()=>{e.handleSessionLive(),e.handleSessionIsOver(),e.timeUntilStartHumanized=this.$dayjs().to(this.onlineEvent.start_time)}),500)},methods:{handleVideoReady(){const e=this;e.setVideoInitialPlayTime(),setInterval((()=>{e.handleVideoOutOfPlayTime(),e.playVideoIfPaused()}),500)},getSessionIsOver(){return-1===Math.sign(p()(this.onlineEvent.end_time).diff(new Date,"seconds"))},handleSessionIsOver(){this.session_has_ended=this.getSessionIsOver()},handleSessionLive(){this.session_has_started=this.getSessionIsLive()},getSessionIsLive(){return this.getSessionHasStarted()&&1===Math.sign(p()(this.onlineEvent.end_time).diff(new Date,"seconds"))},getSessionHasStarted(){return this.getTimeSinceStart()>0},getMinutesUntilLive(){return p()().diff(this.onlineEvent.start_time,"seconds")},getSessionHasNotStarted(){return!this.getSessionHasStarted()},setVideoInitialPlayTime(){this.getSessionIsLive()&&this.$refs.video.exec("time",this.getTimeSinceStart())},handleVideoOutOfPlayTime(){this.getSessionHasNotStarted()||this.getSessionIsOver()||this.getVideoIsOutOfLeeway()&&this.$refs.video.exec("time",this.getTimeSinceStart())},playVideoIfPaused(){this.$refs.video.exec("play")},getTimeSinceStart(){const e=p()(new Date).diff(this.onlineEvent.start_time,"second");return e},getStartTimeMinusLeeway(){return this.getTimeSinceStart()-this.live_leeway},getStartTimePlusLeeway(){return this.getTimeSinceStart()+this.live_leeway},getVideoIsOutOfLeeway(){const e=this.$refs.video.exec("time"),t=e>this.getStartTimePlusLeeway(),s=e<this.getStartTimeMinusLeeway();return t||s}},computed:{onlineEvent(){return this.onlineEventCandidate?this.onlineEventCandidate:this.$MOnlineEvent.find(this.$route.params.online_event_id)},videoId(){return this.onlineEvent.video_url?f.a.parse(this.onlineEvent.video_url).id:null}}},I=E,O=s("505d"),b=s("91e4"),x=Object(v["a"])(I,a,d,!1,null,null,null),C=x.exports;_()(x,"components",{QPage:O["a"],QBanner:b["a"]});var T={name:"PageIndex",data(){return{user:null}},components:{OnlineEventPage:C},computed:{closest_online_event(){return this.onlineEventsOrdered[0]},onlineEventsOrdered(){return this.$MOnlineEvent.all().sort((function(e,t){return new Date(e.start_time)-new Date(t.start_time)}))}},methods:{}},$=T,q=Object(v["a"])($,i,n,!1,null,null,null);t["default"]=q.exports}}]);