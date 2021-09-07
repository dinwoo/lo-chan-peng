<template lang="pug">
#app
  component(:is="$route.meta.layout")
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout"
import DefaultLayout from "@/layouts/DefaultLayout"
export default {
  components: {
    HomeLayout,
    DefaultLayout
  },
  data() {
    return {}
  },
  metaInfo() {
    return {
      title: this.$t(`Meta.title`),
      // title: this.$route.meta.title,
      meta: [
        {
          name: "title",
          content: this.$t(`Meta.title`)
        },
        {
          name: "description",
          content: this.$t(`Meta.description`)
        },
        {
          name: "keyword",
          content: this.$t(`Meta.keyword`)
        },
        {
          name: "og:title",
          content: this.$t(`Meta.title`)
        },
        {
          name: "og:description",
          content: this.$t(`Meta.description`)
        }
      ]
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        this.$store.commit("SET_SCREEN_WIDTH", window.screenWidth)
        // that.screenWidth = window.screenWidth;
      })()
    }
  }
}
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"
@font-face
  font-family: 'Axininca'
  src: url("assets/fonts/Axininca-Ft-SILDoulos-Italic.ttf") format("truetype")

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600&display=swap');

// @font-face
//   font-family: 'SourceHanSerif'
//   src: url("assets/fonts/SourceHanSerif-Regular.ttc") format("truetype")


*
  padding: 0
  margin: 0
  font-family: Axininca,'Noto Serif TC', serif

img
	width: 100%
	vertical-align: middle

a
	color: #000
	text-decoration: none

html
  background-color: #000

ul.paginate-box
  width: 100%
  margin: 2rem 0
  list-style: none
  display: flex
  justify-content: center
  li
    margin: 0 .5rem
    a
      color: $gray-005
    &.active
      a
        color: $gray-004
</style>
