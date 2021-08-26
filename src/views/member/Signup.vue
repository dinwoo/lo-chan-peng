<template lang="pug">
article.member-info
  section.form
    .title 建立帳戶
    .row
      .column-2
        .input-box
          .input-title 姓名
          input(type="text")
      .column-2
        .input-box
          .input-title 生日
          input(type="text")
    .row
      .column-1
        .input-box
          .input-title 帳號
          input(type="text")
    .row
      .column-2
        .input-box
          .input-title 密碼
          input(type="password")
      .column-2
        .input-box
          .input-title 密碼確認
          input(type="password")
    .row
      .column-1
        .input-box
          .input-title 信箱
          input(type="text")
    .btn-box
      Button(title='登入',type="right")
          


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
  methods: {},
  watch: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"
</style>
