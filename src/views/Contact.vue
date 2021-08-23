<template lang="pug">
article.contact-info
  section.banner
    figure.contact-icon
      img(src="@/assets/images/contact-icon.png")
  section.form
    .title 聯絡我們
    .row-2
      .input-box
        .input-title 姓名
        input(type="text")
    .row-2
      .input-box
        .input-title 電話
        input(type="text")
    .row-1
      .input-box
        .input-title 信箱
        input(type="text")
    .row-1
      .input-box
        .input-title 信箱
        textarea
    .btn-box
      Button(title='送出',type="right")

</template>

<script>
import {
  mapState
} from "vuex";
import Button from "@/components/Button.vue";

export default {
  name: 'Contact',
  components: {
    Button
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["screenWidth"]),
  },
  mounted() {
    this.$nextTick(()=>{
    })
  },
  methods: {
  },
  watch: {
  },
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

+input-style

article.contact-info
  section.banner
    padding: 150px 0
    .contact-icon
      width: 465px
      margin: auto
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
    .row-1
      margin-bottom: 1rem
    .row-2
      width: 46%
      margin-bottom: 1rem
      +dib
      & + .row-2
        margin-left: 8%
  +rwd(1440px)
    section.form
      .title
        margin-bottom: 2rem
        font-size: 1.6rem
        position: relative
        left: 0px
        border-bottom: 1px solid $gray-005
  +rwd(768px)
    section.banner
      padding: 15vw 0
      .contact-icon
        width: 35vw
    section.form
      .title
      .row-1
        margin-bottom: 1rem
      .row-2
        width: 100%
        & + .row-2
          margin-left: 0%
</style>