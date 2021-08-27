<template lang="pug">
article.member-info
  section.form
    .title 建立帳戶
    .row
      .column-2
        .input-box
          .input-title 姓名
          input(type="text" v-model="name")
      .column-2
        .input-box
          .input-title 生日
          input(type="date" v-model="birthday")
    .row
      .column-1
        .input-box
          .input-title 帳號
          input(type="text" v-model="account")
    .row
      .column-2
        .input-box
          .input-title 密碼
          input(type="password" v-model="password")
      .column-2
        .input-box
          .input-title 密碼確認
          input(type="password" v-model="confirmPassword")
    .row
      .column-1
        .input-box
          .input-title 信箱
          input(type="text" v-model="email")
    .btn-box
      Button(title='註冊',type="right" @click="postSignupHandler")
          


</template>

<script>
import { mapState, mapActions } from "vuex";
import Button from "@/components/Button.vue";
import mixins from "@/mixins/index.js";

export default {
  name: "Member",
  components: {
    Button,
  },
  mixins: [mixins],
  data() {
    return {
      name: "",
      birthday: "",
      account: "",
      password: "",
      confirmPassword: "",
      email: "",
    };
  },
  computed: {
    ...mapState(["screenWidth"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    ...mapActions(["postSignup"]),
    postSignupHandler() {
      if (this.name == "") {
        alert("請填寫姓名");
        return false;
      } else if (this.birthday == "") {
        alert("請填寫生日");
        return false;
      } else if (this.account == "") {
        alert("請填寫帳號");
        return false;
      } else if (
        this.password == "" ||
        this.confirmPassword == "" ||
        this.password != this.confirmPassword
      ) {
        alert("密碼錯誤");
        return false;
      } else if (!this.verifyEmail(this.email)) {
        alert("Email錯誤");
        return false;
      }

      this.postSignup({
        name: this.name,
        birthday: this.birthday,
        account: this.account,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email,
      })
        .then(() => {
          this.$router.push({ name: "Validation" });
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
</style>
