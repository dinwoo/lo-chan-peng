<template lang="pug">
article.member-info
  section.form
    .title 會員驗證
    .row
      .column-1
        .input-box
          .input-title 驗證碼
          input(type="text")
    .btn-box
      //- Button(title='忘記密碼',type="right")
      Button(title='驗證')
          


</template>

<script>
import { mapState } from "vuex"
import Button from "@/components/Button.vue"

export default {
  name: "Member",
  components: {
    Button
  },
  data() {
    return {}
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
      } else if (!this.verifyPhone(this.phone)) {
        alert("電話錯誤")
        return false
      } else if (!this.verifyEmail(this.email)) {
        alert("Email錯誤")
        return false
      } else if (this.content == "") {
        alert("請填寫內容")
        return false
      }

      this.postSignup({
        name: this.name,
        birthday: this.birthday,
        account: this.account,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email
      })
        .then(() => {
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
