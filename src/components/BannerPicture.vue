<template lang="pug">
.banner-wrapper
    figure.banner-desktop-pic
      img(:src="isLink?bannerLink.desktop:compileFilePath(bannerLink.desktop)")
    figure.banner-mobile-pic
      img(:src="isLink?bannerLink.mobile:compileFilePath(bannerLink.mobile)")
</template>

<script>
// import {
//   mapState
// } from "vuex";

export default {
  name: "BannerPicture",
  components: {},
  props: ["bannerLink", "isLink"],
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.banner-wrapper
    figure.banner-desktop-pic
      // max-width: 500px
      width: 90%
      margin: auto
      +rwd(768px)
        display: none
    figure.banner-mobile-pic
      display: none
      +rwd(768px)
        display: block
        // max-width: 500px
        width: 100%
        margin: auto
</style>
