<template lang="pug">
article.member-info
  section.form
    .title 修改密碼(忘記密碼)
    .row
      .column-1
        .input-box
          .input-title 驗證碼
          input(type="text" v-model="token")
    .row
      .column-2
        .input-box
          .input-title 密碼
          input(type="password" v-model="password")
      .column-2
        .input-box
          .input-title 密碼確認
          input(type="password" v-model="confirmPassword")
    .btn-box
      //- Button(title='忘記密碼',type="right")
      Button(title='送出' @click="putPasswordInfoHandler")
          


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
      token: "",
      password: "",
      confirmPassword: "",
    };
  },
  computed: {
    ...mapState(["screenWidth"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    ...mapActions(["putPasswordInfo"]),
    putPasswordInfoHandler() {
      if (this.token == "") {
        alert("請填寫驗證碼");
        return false;
      } else if (
        this.password == "" ||
        this.confirmPassword == "" ||
        this.password != this.confirmPassword
      ) {
        alert("密碼錯誤");
        return false;
      }

      this.putPasswordInfo({
        token: this.token,
        password: this.password,
        confirmPassword: this.confirmPassword,
      })
        .then(() => {
          alert("修改成功");
          this.$router.push({ name: "Signin" });
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
</style>
