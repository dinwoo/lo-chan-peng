import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["lang"])
  },
  methods: {
    compileFilePath(file) {
      return require(`@/assets/images/${file}`)
    },
    verifyPhone(phone) {
      const phoneRules = /^09\d{8}$/
      return phoneRules.test(phone)
    },
    verifyEmail(email) {
      const emailRules = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      return emailRules.test(email)
    }
  }
}
