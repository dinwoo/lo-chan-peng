<template lang="pug">
.card-info-wrapper
  PictureSwiper(
    :pictureLink="pictureLink"
  )
  .date {{cardData.date}}
  .card-pic(style="")
  .card-title {{cardData.title}}
  .card-content {{cardData.content}}

</template>

<script>
// import {
//   mapState
// } from "vuex";
import PictureSwiper from "@/components/PictureSwiper.vue";

export default {
  name:"CardInfo",
  components: {
    PictureSwiper
  },
  props: ["cardData"],
  data() {
    return {
      pictureLink: [
        {
          1: "news-example.jpg",
          2: "news-example.jpg",
        },
        {
          1: "news-example.jpg",
          2: "news-example.jpg",
        },
      ],
    };
  },
  watch: {
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.card-info-wrapper
  .pic-carousel
  .date
    margin: 3rem 0
    font-size: 1.4rem
    color: $gray-004
  .card-title
    margin: 1rem 0
    font-size: 1.4rem
    color: $gray-004
  .card-content
    font-size: 1rem
    line-height: 1.5
    color: $gray-005
</style>
