(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-659f52b5"],{"2a7d":function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-wrapper"},[n("div",{staticClass:"btn",class:{right:"right"==t.type},on:{click:function(e){return t.$emit("click")}}},[t._v(t._s(t.title))])])},s=[],o={name:"Button",components:{},props:["title","type"],data:function(){return{}},watch:{},mounted:function(){},computed:{},methods:{}},a=o,i=(n("9872"),n("2877")),r=Object(i["a"])(a,c,s,!1,null,"109ca054",null);e["a"]=r.exports},"7b80":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"member-info"},[n("section",{staticClass:"form"},[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.$t("Member.forgotPswTitle"))}}),n("div",{staticClass:"row"},[n("div",{staticClass:"column-1"},[n("div",{staticClass:"input-box"},[n("div",{staticClass:"input-title"},[t._v(t._s(t.$t("Member.account")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:t.$t("Member.accountPlaceholder")},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])])]),n("div",{staticClass:"btn-box"},[n("Button",{attrs:{title:t.$t("Member.send")},on:{click:t.postPasswordTokenHandler}})],1)])])},s=[],o=n("5530"),a=n("2f62"),i=n("2a7d"),r={name:"ForgetPassword",components:{Button:i["a"]},data:function(){return{account:""}},computed:Object(o["a"])({},Object(a["c"])(["screenWidth"])),mounted:function(){this.$nextTick((function(){}))},methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])(["postPasswordToken"])),{},{postPasswordTokenHandler:function(){var t=this;if(""==this.account)return alert("請填寫帳號"),!1;this.postPasswordToken(this.account).then((function(){t.$router.push({name:"PasswordEdit"})})).catch((function(){alert("傳送失敗")}))}}),watch:{}},u=r,l=(n("e644"),n("2877")),d=Object(l["a"])(u,c,s,!1,null,"94e85fde",null);e["default"]=d.exports},9872:function(t,e,n){"use strict";n("b2c2")},"9e01":function(t,e,n){},b2c2:function(t,e,n){},e644:function(t,e,n){"use strict";n("9e01")}}]);
//# sourceMappingURL=chunk-659f52b5.e5fb7c1a.js.map