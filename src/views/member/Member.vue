<template lang="pug">
article.member-info
  section.banner
    figure.member-icon
      img(src="@/assets/images/member-title.png")
  router-view
          


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

<style lang="sass">
@import "@/assets/sass/var.sass"

+input-style

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
  +rwd(1440px)
    .title
      margin-bottom: 2rem
      font-size: 1.6rem
      position: relative
      left: 0px
      border-bottom: 1px solid $gray-005
  +rwd(768px)
    .title
    .column-1
      margin-bottom: 1rem
    .column-2
      width: 100%
      & + .column-2
        margin-left: 0%
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.member-info
  section.banner
    padding: 150px 0
    .member-icon
      width: 465px
      margin: auto
  +rwd(768px)
    section.banner
      padding: 15vw 0
      .member-icon
        width: 35vw
</style>
