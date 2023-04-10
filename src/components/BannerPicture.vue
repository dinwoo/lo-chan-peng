<template lang="pug">
.banner-wrapper
    figure.banner-desktop-pic
      img(:src="compileFilePath(bannerLink.desktop)")
    figure.banner-mobile-pic
      img(:src="compileFilePath(bannerLink.mobile)")
</template>

<script>
// import {
//   mapState
// } from "vuex";

export default {
  name: "BannerPicture",
  components: {},
  props: ["bannerLink"],
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  computed: {},
  methods: {},
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
