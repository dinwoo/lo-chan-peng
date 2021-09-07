<template lang="pug">
article.member-info
  section.form
    .title {{$t(`Member.forgotPswTitle`)}}
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.account`)}}
          input(type="text" v-model="account")
    .btn-box
      Button(:title='$t(`Member.send`)' @click="postPasswordTokenHandler")
          


</template>

<script>
import { mapState, mapActions } from "vuex"
import Button from "@/components/Button.vue"

export default {
  name: "Member",
  components: {
    Button
  },
  data() {
    return { account: "" }
  },
  computed: {
    ...mapState(["screenWidth"])
  },
  mounted() {
    this.$nextTick(() => {})
  },
  methods: {
    ...mapActions(["postPasswordToken"]),
    postPasswordTokenHandler() {
      if (this.account == "") {
        alert("請填寫帳號")
        return false
      }

      this.postPasswordToken(this.account)
        .then(() => {
          this.$router.push({ name: "PasswordEdit" })
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
