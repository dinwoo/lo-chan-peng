<template lang="pug">
article.member-info
  section.form
    .title(v-html="$t(`Member.forgotPswTitle`)")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.token`)}}
          input(type="text" v-model="token")
    .row
      .column-2
        .input-box
          .input-title {{$t(`Member.password`)}}
          input(type="password" v-model="password" :placeholder="$t(`Member.passwordPlaceholder`)")
      .column-2
        .input-box
          .input-title {{$t(`Member.confirmPassword`)}}
          input(type="password" v-model="confirmPassword" :placeholder="$t(`Member.confirmPasswordPlaceholder`)")
    .btn-box
      //- Button(title='忘記密碼',type="right")
      Button(:title='$t(`Member.send`)' @click="putPasswordInfoHandler")
          


</template>

<script>
import { mapState, mapActions } from "vuex";
import Button from "@/components/Button.vue";
import mixins from "@/mixins/index.js";

export default {
  name: "PasswordEdit",
  components: {
    Button
  },
  mixins: [mixins],
  data() {
    return {
      token: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    ...mapState(["screenWidth"])
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.t) {
        this.token = this.getUrlToken();
      }
    });
  },
  methods: {
    ...mapActions(["putPasswordInfo"]),
    putPasswordInfoHandler() {
      // if (this.token == "") {
      //   alert("請填寫驗證碼");
      //   return false;
      // } else if (
      //   this.password == "" ||
      //   this.confirmPassword == "" ||
      //   this.password != this.confirmPassword
      // ) {
      //   alert("密碼錯誤");
      //   return false;
      // }

      this.putPasswordInfo({
        token: this.token,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
        .then(() => {
          alert("修改成功");
          localStorage.removeItem("account");
          localStorage.removeItem("token");
          this.$router.push({ name: "Signin" });
        })
        .catch(() => {
          alert("傳送失敗");
        });
    }
  },
  watch: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

+input-style
</style>
