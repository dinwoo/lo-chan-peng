<template lang="pug">
article.member-info
  section.form
    .title {{$t(`Member.signupTitle`)}}
    .row
      .column-2
        .input-box
          .input-title {{$t(`Member.name`)}}
          input(type="text" v-model="name")
      .column-2
        .input-box
          .input-title {{$t(`Member.birthday`)}}
          input(type="date" v-model="birthday")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.account`)}}
          input(type="text" v-model="account")
    .row
      .column-2
        .input-box
          .input-title {{$t(`Member.password`)}}
          input(type="password" v-model="password")
      .column-2
        .input-box
          .input-title {{$t(`Member.confirmPassword`)}}
          input(type="password" v-model="confirmPassword")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.email`)}}
          input(type="text" v-model="email")
    .btn-box
      Button(:title='$t(`Member.registerBtn`)',type="right" @click="postSignupHandler")
          


</template>

<script>
import { mapState, mapActions } from "vuex"
import Button from "@/components/Button.vue"
import mixins from "@/mixins/index.js"

export default {
  name: "Member",
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
    }
  },
  computed: {
    ...mapState(["screenWidth"])
  },
  mounted() {
    this.$nextTick(() => {})
  },
  methods: {
    ...mapActions(["postSignup"]),
    postSignupHandler() {
      if (this.name == "") {
        alert("請填寫姓名")
        return false
      } else if (this.birthday == "") {
        alert("請填寫生日")
        return false
      } else if (this.account == "") {
        alert("請填寫帳號")
        return false
      } else if (
        this.password == "" ||
        this.confirmPassword == "" ||
        this.password != this.confirmPassword
      ) {
        alert("密碼錯誤")
        return false
      } else if (!this.verifyEmail(this.email)) {
        alert("Email錯誤")
        return false
      }

      this.postSignup({
        name: this.name,
        birthday: this.birthday,
        account: this.account,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email,
        type: 1
      })
        .then(() => {
          localStorage.setItem("account", this.account)
          this.$router.push({ name: "Validation" })
        })
        .catch(() => {
          alert("傳送失敗")
        })
    }
  },
  watch: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"
</style>
