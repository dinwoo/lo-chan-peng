<template lang="pug">
.card-info-wrapper
  PictureSwiper(
    v-if="cardData.imgList.length"
    :pictureLink="cardData.imgList"
  )
  .date {{cardData.dateTime}}
  .card-title {{cardData.title}}
  .card-description {{cardData.description}}

</template>

<script>
// import {
//   mapState
// } from "vuex";
import PictureSwiper from "@/components/PictureSwiper.vue";

export default {
  name: "CardInfo",
  components: {
    PictureSwiper,
  },
  props: ["cardData"],
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
  .card-description
    font-size: 1rem
    line-height: 1.5
    color: $gray-005
</style>
