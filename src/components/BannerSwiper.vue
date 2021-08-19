<template lang="pug">
  #banner-swiper
    VueSlickCarousel(
      v-bind="settings"
    )
      .banner-pic(
        v-for="(pic,index) in pictureLink[linkIndex]" :key="index"
      )
        .pic(
          :style="`background-image:url('${compileFilePath(pic)}')`"
        )
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  props: ["pictureLink"],
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class banner-dots",
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
      },
      slidesToShow: 0,
      showOption: false,
      screenWidth: document.body.clientWidth,
      isMobile: document.body.clientWidth < 768,
    };
  },
  watch: {
    screenWidth(val) {
      this.isMobile = val < 768;
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // console.log(val);
          that.timer = false;
        }, 400);
      }
    },
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  computed: {
    linkIndex() {
      return this.isMobile ? 1 : 0;
    },
  },
  methods: {},
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"

.banner-dots
  padding: 0 70px
  bottom: 60px
  text-align: left
  li
    margin: 0 10px
    button
      &:before
        color: $gray-004
        opacity: 1
    &.slick-active
      button
        &:before
          color: $gray-001
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

*
  // outline: 1px solid #f00
  &:focus
    outline: none
#banner-swiper
  width: 100%
  // padding-bottom: 40px
  overflow: hidden
  .banner-pic
    width: 100%
    padding-bottom: 100vh
    position: relative
    @include rwd(768px)
      padding-bottom: 152%
    .pic
      width: 100%
      height: 100%
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
      +pstc0
</style>
