(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62795930"],{"2a7d":function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"button-wrapper"},[e("div",{staticClass:"btn",class:{right:"right"==t.type},on:{click:function(s){return t.$emit("click")}}},[t._v(t._s(t.title))])])},n=[],a={name:"Button",components:{},props:["title","type"],data:function(){return{}},watch:{},mounted:function(){},computed:{},methods:{}},i=a,r=(e("9872"),e("2877")),c=Object(r["a"])(i,o,n,!1,null,"109ca054",null);s["a"]=c.exports},"6e81":function(t,s,e){"use strict";e("8d48")},"8d48":function(t,s,e){},9872:function(t,s,e){"use strict";e("b2c2")},b2c2:function(t,s,e){},ca20:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",{staticClass:"member-info"},[e("section",{staticClass:"form"},[e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.$t("Member.forgotPswTitle"))}}),e("div",{staticClass:"row"},[e("div",{staticClass:"column-1"},[e("div",{staticClass:"input-box"},[e("div",{staticClass:"input-title"},[t._v(t._s(t.$t("Member.token")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],attrs:{type:"text"},domProps:{value:t.token},on:{input:function(s){s.target.composing||(t.token=s.target.value)}}})])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"column-2"},[e("div",{staticClass:"input-box"},[e("div",{staticClass:"input-title"},[t._v(t._s(t.$t("Member.password")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:t.$t("Member.passwordPlaceholder")},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})])]),e("div",{staticClass:"column-2"},[e("div",{staticClass:"input-box"},[e("div",{staticClass:"input-title"},[t._v(t._s(t.$t("Member.confirmPassword")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",placeholder:t.$t("Member.confirmPasswordPlaceholder")},domProps:{value:t.confirmPassword},on:{input:function(s){s.target.composing||(t.confirmPassword=s.target.value)}}})])])]),e("div",{staticClass:"btn-box"},[e("Button",{attrs:{title:t.$t("Member.send")},on:{click:t.putPasswordInfoHandler}})],1)])])},n=[],a=e("5530"),i=e("2f62"),r=e("2a7d"),c=e("1b62"),l={name:"PasswordEdit",components:{Button:r["a"]},mixins:[c["a"]],data:function(){return{token:"",password:"",confirmPassword:""}},computed:Object(a["a"])({},Object(i["c"])(["screenWidth"])),mounted:function(){var t=this;this.$nextTick((function(){t.$route.query.t&&(t.token=t.getUrlToken())}))},methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["putPasswordInfo"])),{},{putPasswordInfoHandler:function(){var t=this;this.putPasswordInfo({token:this.token,password:this.password,confirmPassword:this.confirmPassword}).then((function(){alert("修改成功"),localStorage.removeItem("account"),localStorage.removeItem("token"),t.$router.push({name:"Signin"})})).catch((function(){alert("傳送失敗")}))}}),watch:{}},d=l,u=(e("6e81"),e("2877")),m=Object(u["a"])(d,o,n,!1,null,"266242a2",null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-62795930.a5228cd6.js.map