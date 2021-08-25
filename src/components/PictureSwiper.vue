<template lang="pug">
#picture-swiper
  VueSlickCarousel(
    v-bind="settings"
    ref="carousel"
  )
    .picture-pic(
      v-for="(pic,index) in pictureLink" :key="index"
    )
      .pic(
        :style="`background-image:url('${compileFilePath(pic)}')`"
      )
  .arrow-control
    figure.arrow(@click="prev()")
      img(src="@/assets/images/arrow-left-icon.png")
    figure.arrow(@click="next()")
      img(src="@/assets/images/arrow-right-icon.png")
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "PictureSwiper",
  components: {
    VueSlickCarousel,
  },
  props: ["pictureLink"],
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class picture-dots",
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
      isMobile: document.body.clientWidth < 768,
    };
  },
  watch: {},
  mounted() {},
  computed: {},
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"

.picture-dots
  padding: 30px 0
  bottom: -80px
  text-align: left
  li
    margin: 0 10px
    button
      &:before
        color: $gray-005
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
#picture-swiper
  width: 100%
  padding-bottom: 80px
  position: relative
  .picture-pic
    width: 100%
    padding-bottom: 75%
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
  .arrow-control
    position: absolute
    bottom: 30px
    right: 0px
    figure.arrow
      width: 40px
      margin-left: 15px
      cursor: pointer
      +dib
</style>
