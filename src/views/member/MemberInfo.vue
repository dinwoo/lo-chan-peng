<template lang="pug">
article.member-info(v-if="!isLoading")
  section.form
    .title 會員資料
    .row
      .column-2
        .input-box
          .input-title 姓名
          input(type="text" v-model="member.name" :disabled="!isEdit")
      .column-2
        .input-box
          .input-title 生日
          input(type="date" v-model="member.birthday" :disabled="!isEdit")
    .row
      .column-1
        .input-box
          .input-title 帳號
          input(type="text" v-model="member.account" disabled)
      //- .column-2
      //-   .input-box
      //-     .input-title 密碼
      //-     input(type="password")
    .row
      .column-1
        .input-box
          .input-title 信箱
          input(type="text" v-model="member.email" disabled)
    .btn-box
      .btn
        Button(title="登出",type="right" @click="logoutHandler")
      .btn
        router-link(:to="{name:'ForgetPassword'}")
          Button(title="修改密碼",type="right")
      .btn
        Button(:title="isEdit?'送出':'編輯'",type="right" @click="btnHandler")
          


</template>

<script>
import { mapState, mapActions } from "vuex";
import Button from "@/components/Button.vue";

export default {
  name: "Member",
  components: {
    Button,
  },
  data() {
    return {
      isEdit: false,
    };
  },
  computed: {
    ...mapState(["isLoading", "member"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  created() {
    this.getMemberInfo(localStorage.getItem("account"))
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch(() => {
        console.log("fail");
      });
  },
  methods: {
    ...mapActions(["getMemberInfo", "putMemberInfo"]),
    btnHandler() {
      if (!this.isEdit) {
        this.isEdit = true;
      } else {
        console.log("send");
        this.putMemberInfo({
          token: localStorage.getItem("token"),
          name: this.member.name,
          birthday: this.member.birthday,
        })
          .then(() => {
            console.log("success");
          })
          .catch(() => {
            console.log("fail");
          });
      }
    },
    logoutHandler() {
      localStorage.removeItem("account");
      localStorage.removeItem("token");
      this.$router.push({ name: "Signin" });
    },
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

+input-style

article.member-info
  section.form
    .btn-box
      display: flex
      justify-content: flex-end
      .btn
        flex: 1
        margin-left: 1rem
  +rwd(768px)
    section.form
      .btn-box
        flex-wrap: wrap
        .btn
          width: 100%
          margin-left: 0
</style>
