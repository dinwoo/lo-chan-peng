<template lang="pug">
.related-list-wrapper(v-if="!isLoading")
  VueSlickCarousel(
    v-bind="settings"
    ref="carousel"
  )
    router-link.related-item(
      v-for="item in relatedListData" :key="item.id"
      :to="{name:routeName,params:{id:item.id}}"
    )
      .related-pic(style="")
      .related-title {{item.title}}

</template>

<script>
import { mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "RelatedList",
  components: { VueSlickCarousel },
  props: { relatedListData: Array, routeName: String },
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        touchThreshold: 5,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    };
  },
  watch: {},
  mounted() {},
  computed: {
    ...mapState(["isLoading"]),
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.related-list-wrapper
  width: calc(100% + 2rem)
  margin-left: -1rem
  .related-item
    padding: 0 1rem
    box-sizing: border-box
    .related-pic
      background-image: url('../assets/images/news-example.jpg')
      width: 100%
      padding-bottom: 63.701923%
      border-radius: 10px
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
    .related-title
      margin-top: 1rem
      font-size: 1rem
      color: $gray-005
  +rwd(768px)
</style>
