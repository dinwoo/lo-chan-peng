<template lang="pug">
article.member-info
  section.form
    p.remark(v-html="$t(`Member.remark`)")
    .title(v-html="$t(`Member.signupTitle`)")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.name`)}}
          input(type="text" v-model="name")
      //- .column-2
        .input-box
          .input-title {{$t(`Member.birthday`)}}
          input.edit(type="date" min="1911-01-01" :max="today" v-model="birthday")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.account`)}}
          input(type="text" v-model="account" :placeholder="$t(`Member.accountPlaceholder`)")
    .row
      .column-2
        .input-box
          .input-title {{$t(`Member.password`)}}
          input(type="password" v-model="password" :placeholder="$t(`Member.passwordPlaceholder`)")
      .column-2
        .input-box
          .input-title {{$t(`Member.confirmPassword`)}}
          input(type="password" v-model="confirmPassword" :placeholder="$t(`Member.confirmPasswordPlaceholder`)")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.email`)}}
          input(type="text" v-model="email" :placeholder="$t(`Member.emailPlaceholder`)")
    .btn-box
      Button(:title='$t(`Member.registerBtn`)',type="right" @click="postSignupHandler")
          


</template>

<script>
import { mapState, mapActions } from "vuex";
import Button from "@/components/Button.vue";
import mixins from "@/mixins/index.js";

export default {
  name: "Signup",
  components: {
    Button
  },
  mixins: [mixins],
  data() {
    return {
      name: "",
      birthday: "",
      account: "",
      password: "",
      confirmPassword: "",
      email: ""
    };
  },
  computed: {
    ...mapState(["screenWidth"]),
    today() {
      const date = new Date();
      let month =
        date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      return `${date.getFullYear()}-${month}-${date.getDate()}`;
    }
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    ...mapActions(["postSignup"]),
    postSignupHandler() {
      // if (this.name == "") {
      //   alert("name is required");
      //   return false;
      // } else if (this.birthday == "") {
      //   alert("birthday is required");
      //   return false;
      // } else if (this.account == "") {
      //   alert("account is required");
      //   return false;
      // } else if (
      //   this.password == "" ||
      //   this.confirmPassword == "" ||
      //   this.password != this.confirmPassword
      // ) {
      //   alert("password is not the same");
      //   return false;
      // } else if (!this.verifyEmail(this.email)) {
      //   alert("please enter the correct email format, ex：aa@bb.com");
      //   return false;
      // }

      this.postSignup({
        name: this.name,
        account: this.account,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email,
        type: 1
      })
        .then(() => {
          localStorage.setItem("account", this.account);
          this.$router.push({ name: "Validation" });
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

article.member-info
  section.form
    p.remark
      padding: 1rem 0 2rem
      font-size: 1rem
      color: $gray-005
</style>
