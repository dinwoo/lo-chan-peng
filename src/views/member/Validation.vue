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
  methods: {},
  watch: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"
</style>
