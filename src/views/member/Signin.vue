<template lang="pug">
article.member-info
  section.form
    .title {{$t(`Member.signinTitle`)}}
    .row
      .column-2
        .input-box
          .input-title {{$t(`Member.account`)}}
          input(type="text" v-model="account")
      .column-2
        .input-box
          .input-title {{$t(`Member.password`)}}
          input(type="password" v-model="password")
    .btn-box
      .btn
        router-link(:to="{name:'ForgetPassword'}")
          Button(:title='$t(`Member.forgotPsw`)',type="right")
      .btn
        Button(:title='$t(`Member.signin`)',type="right" @click="postSigninHandler")
    .register-box
      //- .register-btn
      //-   p.register-title 或以下列方式登入
      //-   .btn
      //-     figure.fb-icon
      //-       img(src="@/assets/images/fb-btn-icon.png")
      //-     p 以Facebook帳號登入
      .register-btn
        p.register-title {{$t(`Member.newUser`)}}
        router-link.btn(:to="{name:'Signup'}")
          p {{$t(`Member.registerBtn`)}}
          


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
      account: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["screenWidth"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    ...mapActions(["postSignin"]),
    postSigninHandler() {
      if (this.account == "") {
        alert("請填寫帳號");
        return false;
      } else if (this.password == "") {
        alert("請填寫密碼");
        return false;
      }
      this.postSignin({
        account: this.account,
        password: this.password,
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem("account", res.data.account);
          localStorage.setItem("token", res.data.token);
          this.$router.push({ name: "Member" });
        })
        .catch(() => {
          alert("傳送失敗");
        });
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
        width: 300px
        margin-left: 1rem
    .register-box
      padding: 2rem 0
      border-top: 1px solid $gray-004
      display: flex
      justify-content: space-between
      .register-btn
        text-align: center
        &:nth-child(1)
          order: 2
        &:nth-child(2)
          order: 1
        .register-title
          margin-bottom: .5rem
          font-size: 1.4rem
          color: $gray-004
        .btn
          display: inline-block
          padding: 0 3rem
          font-size: 1.4rem
          line-height: 3rem
          border-radius: 1.5rem
          color: $gray-001
          background-color: $gray-005
          text-align: center
          cursor: pointer
          .fb-icon
            width: 30px
            margin-right: 0.5rem
            line-height: 1
            +dib
          p
            font-size: 1.4rem
            color: #000
            +dib
  +rwd(768px)
    section.form
      .btn-box
        flex-wrap: wrap
        .btn
          width: 100%
          margin-left: 0
      .register-box
        padding: 0
        display: block
        .register-btn
          padding: 2rem 0
          border-bottom: 1px solid $gray-004
          .register-title
          .btn
            padding: 0 2rem
            .fb-icon
              width: 20px
              margin-right: 0.5rem
            p
              font-size: 1rem
</style>
