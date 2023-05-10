<template lang="pug">
#banner-swiper
  template(
    v-if="!isLoading"

  )
    VueSlickCarousel(
      v-bind="settings"
      ref="carousel"
    )
      .banner-pic(
        v-for="(pic,index) in pictureLink[linkIndex]" :key="index"
      )
        .pic(
          :style="`background-image:url('${pic}')`"
        )
    .arrow-control
      .arrow.svg_box(@click="prev()")
        include ../assets/pug/arrow-left.pug
      .arrow.svg_box(@click="next()")
        include ../assets/pug/arrow-right.pug
</template>

<script>
import { mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "BannerSwiper",
  components: {
    VueSlickCarousel
  },
  props: ["pictureLink"],
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class banner-dots",
        edgeFriction: 0.35,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      },
      slidesToShow: 0,
      showOption: false,
      isMobile: document.body.clientWidth < 768
    };
  },
  watch: {
    screenWidth(val) {
      this.isMobile = val < 768;
      // if (!this.timer) {
      //   this.screenWidth = val;
      //   this.timer = true;
      //   let that = this;
      //   setTimeout(function() {
      //     // console.log(val);
      //     that.timer = false;
      //   }, 400);
      // }
    }
  },
  mounted() {},
  computed: {
    ...mapState(["isLoading", "screenWidth"]),
    linkIndex() {
      return this.isMobile ? "mobile" : "pc";
    }
  },
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"

.banner-dots
  padding: 0 60px
  bottom: 50px
  text-align: left
  li
    margin: 0 5px
    button
      &:before
        color: $gray-005
        opacity: 1
    &.slick-active
      button
        &:before
          color: $gray-001
  +rwd(768px)
    padding: 0 15px
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
  position: relative
  overflow: hidden
  .banner-pic
    width: 100%
    padding-bottom: 100vh
    position: relative
    @include rwd(768px)
      // padding-bottom: 152%
    .pic
      width: 100%
      height: 100%
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
      +pstc0
  .arrow-control
    width: 40px
    position: absolute
    bottom: 45px
    right: 65px
    .arrow
      margin-bottom: 10px
      cursor: pointer
      fill: none
      stroke: $gray-004
      transition: .3s
      +hover
        stroke: #fff
    +rwd(768px)
      width: 30px
      right: 15px
      .arrow
        margin-bottom: 5px
</style>
