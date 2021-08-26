<template lang="pug">
article.member-info
  section.form
    .title 修改密碼(忘記密碼)
    .row
      .column-1
        .input-box
          .input-title 帳號
          input(type="text")
    .btn-box
      //- Button(title='忘記密碼',type="right")
      Button(title='送出')
          


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

+input-style

article.member-info
  section.form
    width: 100%
    max-width: 960px
    padding: 0 15px
    margin: auto
    box-sizing: border-box
    position: relative
    .title
      font-size: 1.8rem
      letter-spacing: 4px
      color: $gray-005
      position: absolute
      left: -200px
    .column-1
      margin-bottom: 1rem
    .column-2
      width: 46%
      margin-bottom: 1rem
      +dib
      & + .column-2
        margin-left: 8%
    .register-box
      padding: 2rem 0
      border-top: 1px solid $gray-004
      display: flex
      justify-content: space-between
      .register-btn
        text-align: center
        &:nth-child(1)
          order: 2
        &:nth-child(2)
          order: 1
        .register-title
          margin-bottom: .5rem
          font-size: 1.4rem
          color: $gray-004
        .btn
          display: inline-block
          padding: 0 3rem
          font-size: 1.4rem
          line-height: 3rem
          border-radius: 1.5rem
          color: $gray-001
          background-color: $gray-005
          text-align: center
          cursor: pointer
          .fb-icon
            width: 30px
            margin-right: 0.5rem
            line-height: 1
            +dib
          p
            font-size: 1.4rem
            color: #000
            +dib
  +rwd(1440px)
    section.form
      .title
        margin-bottom: 2rem
        font-size: 1.6rem
        position: relative
        left: 0px
        border-bottom: 1px solid $gray-005
  +rwd(768px)
    section.form
      .title
      .column-1
        margin-bottom: 1rem
      .column-2
        width: 100%
        & + .column-2
          margin-left: 0%
      .register-box
        padding: 0
        display: block
        .register-btn
          padding: 2rem 0
          border-bottom: 1px solid $gray-004
          .register-title
          .btn
            padding: 0 2rem
            .fb-icon
              width: 20px
              margin-right: 0.5rem
            p
              font-size: 1rem
</style>
