(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f43ccc34"],{"144d":function(t,i,n){},"3c3c":function(t,i,n){"use strict";n("6d14")},"6d14":function(t,i,n){},"8f32":function(t,i,n){"use strict";n.d(i,"a",(function(){return a}));
/*!
 * vue-slide-toggle v1.1.1
 * (c) 2018-present Nikita Nafranets <eddimensi@gmail.com>
 * Released under the MIT License.
 */
var e={name:"VueSlideToggle",props:{open:Boolean,duration:{type:Number,default:300},tag:{type:String,default:"div"}},data:function(){return{scrollHeight:0,doneOpenTransition:!1,innerOpen:this.open}},mounted:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},updated:function(){this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},watch:{open:function(t){var i=this;t?this.innerOpen=!0:(this.getHeight(),this.doneOpenTransition=!1,this.$nextTick().then((function(){i.innerOpen=!1})))}},computed:{style:function(){if(this.innerOpen&&this.doneOpenTransition)return null;var t=this.innerOpen?this.scrollHeight:0;return{overflow:"hidden",transitionProperty:"height",height:"".concat(t,"px"),transitionDuration:"".concat(this.duration,"ms")}}},methods:{getHeight:function(){var t=this.$refs.container;this.scrollHeight=t.scrollHeight},handleTransition:function(){this.innerOpen&&(this.doneOpenTransition=!0)}},render:function(t){return t(this.tag,{style:this.style,ref:"container",on:{transitionend:this.handleTransition}},this.$slots.default)}};function s(t){s.installed||(s.installed=!0,t.component("VueSlideToggle",e))}var o={install:s},a=e,c=null;"undefined"!==typeof window&&(c=window.Vue),c&&c.use(o)},b59d:function(t,i,n){"use strict";n("144d")},f820:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("article",{staticClass:"about"},[t._m(0),n("section",{staticClass:"intro intro1"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v(t._s(t.about.name)),n("div",{staticClass:"slide-switch",on:{click:function(i){t.open1=!t.open1}}},[t._v(t._s(t.open1?"－":"＋"))])]),n("div",{staticClass:"intro-box"},[n("VueSlideToggle",{attrs:{open:t.open1}},[n("div",{staticClass:"info colum-1 mb dark"},[t._v(t._s(t.about.birth)),n("br"),t._v(t._s(t.about.creativeMedia))]),n("div",{staticClass:"info colum-1 separate",domProps:{innerHTML:t._s(t.about.info)}})])],1)])]),n("section",{staticClass:"intro intro2"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("p",{domProps:{innerHTML:t._s(t.about.title1)}}),n("div",{staticClass:"slide-switch",on:{click:function(i){t.open2=!t.open2}}},[t._v(t._s(t.open2?"－":"＋"))])]),n("div",{staticClass:"intro-box"},[n("VueSlideToggle",{attrs:{open:t.open2}},[n("div",{staticClass:"info colum-2 mb"},[n("div",{staticClass:"sub-title"},[t._v(t._s(t.about.educationTitle))]),n("p",{domProps:{innerHTML:t._s(t.about.education)}})]),n("div",{staticClass:"info colum-2 mb"},[n("div",{staticClass:"sub-title"},[t._v(t._s(t.about.currentJobTitle))]),n("p",{domProps:{innerHTML:t._s(t.about.currentJob)}})]),n("div",{staticClass:"info colum-1"},[n("div",{staticClass:"sub-title"},[t._v(t._s(t.about.experience.title))]),t._l(t.about.experience.list,(function(i){return n("div",{key:i.year,staticClass:"year"},[n("p",[t._v(t._s(i.year))]),n("ul",t._l(i.items,(function(i,e){return n("li",{key:e,domProps:{innerHTML:t._s(i)}})})),0)])}))],2)])],1)])]),n("section",{staticClass:"intro intro3"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("p",{domProps:{innerHTML:t._s(t.about.title2)}}),n("div",{staticClass:"slide-switch",on:{click:function(i){t.open3=!t.open3}}},[t._v(t._s(t.open3?"－":"＋"))])]),n("div",{staticClass:"intro-box"},[n("VueSlideToggle",{attrs:{open:t.open3}},[n("div",{staticClass:"info colum-1 mb"},[n("div",{staticClass:"sub-title"},[t._v(t._s(t.about.soloExhibitions.title))]),t._l(t.about.soloExhibitions.list,(function(i){return n("div",{key:i.year,staticClass:"year"},[n("p",[t._v(t._s(i.year))]),n("ul",t._l(i.items,(function(i,e){return n("li",{key:e,domProps:{innerHTML:t._s(i)}})})),0)])}))],2),n("div",{staticClass:"info colum-1mb"},[n("div",{staticClass:"sub-title"},[t._v(t._s(t.about.groupExhibitions.title))]),n("div",{staticClass:"separate"},t._l(t.about.groupExhibitions.list,(function(i){return n("div",{key:i.year,staticClass:"year"},[n("p",[t._v(t._s(i.year))]),n("ul",t._l(i.items,(function(i,e){return n("li",{key:e,domProps:{innerHTML:t._s(i)}})})),0)])})),0)])])],1)])]),n("section",{staticClass:"intro intro4"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("p",{domProps:{innerHTML:t._s(t.about.title3)}}),n("div",{staticClass:"slide-switch",on:{click:function(i){t.open4=!t.open4}}},[t._v(t._s(t.open4?"－":"＋"))])]),n("div",{staticClass:"intro-box"},[n("VueSlideToggle",{attrs:{open:t.open4}},[n("div",{staticClass:"info colum-1 mb"},[n("div",{staticClass:"separate"},t._l(t.about.awards.list,(function(i){return n("div",{key:i.year,staticClass:"year"},[n("p",[t._v(t._s(i.year))]),n("ul",t._l(i.items,(function(i,e){return n("li",{key:e,domProps:{innerHTML:t._s(i)}})})),0)])})),0)])])],1)])]),n("section",{staticClass:"intro intro5"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("p",{domProps:{innerHTML:t._s(t.about.title4)}}),n("div",{staticClass:"slide-switch",on:{click:function(i){t.open5=!t.open5}}},[t._v(t._s(t.open5?"－":"＋"))])]),n("div",{staticClass:"intro-box"},[n("VueSlideToggle",{attrs:{open:t.open5}},[n("div",{staticClass:"info colum-1"},[n("div",{staticClass:"separate"},t._l(t.about.collections.list,(function(i){return n("div",{key:i.year,staticClass:"year"},[n("p",[t._v(t._s(i.year))]),n("ul",t._l(i.items,(function(i,e){return n("li",{key:e,domProps:{innerHTML:t._s(i)}})})),0)])})),0)])])],1)])])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"banner"},[e("figure",{staticClass:"banner-pic"},[e("img",{attrs:{src:n("0bf1")}})])])}],o=n("5530"),a=(n("d81d"),n("159b"),n("2f62")),c=n("8f32"),r=n("cffa"),l={name:"About",components:{VueSlideToggle:c["a"]},data:function(){return{open1:!0,open2:!0,open3:!0,open4:!0,open5:!0,sceneArr:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(a["c"])(["about","screenWidth"])),{},{isOpen:function(){return this.screenWidth>768}}),beforeDestroy:function(){var t=this;this.sceneArr.map((function(i){t.$scrollmagic.removeScene(i)}))},mounted:function(){var t=this;this.$nextTick((function(){t.getAboutData(),t.setSwitch(),t.setInitial(),t.setAnimate()}))},methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])(["getAbout"])),{},{setSwitch:function(){this.open1=this.isOpen,this.open2=this.isOpen,this.open3=this.isOpen,this.open4=this.isOpen,this.open5=this.isOpen},setInitial:function(){r["b"].set("section.banner",{y:100,opacity:0}),r["b"].set("section.intro",{y:100,opacity:0})},setAnimate:function(){var t=this;this.sceneArr[0]=this.$scrollmagic.scene({triggerElement:"section.banner",triggerHook:1,reverse:!1}).on("enter",(function(){r["b"].timeline().to("section.banner",1,{y:0,opacity:1}).add(r["a"].staggerTo("section.intro",1,{y:0,opacity:1,delay:-1},.5))})),this.sceneArr.forEach((function(i){t.$scrollmagic.addScene(i)}))},getAboutData:function(){this.getAbout({}).then((function(){console.log("success")})).catch((function(){console.log("fail")}))}}),watch:{screenWidth:function(){this.setSwitch()}}},u=l,d=(n("3c3c"),n("b59d"),n("2877")),p=Object(d["a"])(u,e,s,!1,null,"8374809c",null);i["default"]=p.exports}}]);
//# sourceMappingURL=chunk-f43ccc34.0a275bcd.js.map