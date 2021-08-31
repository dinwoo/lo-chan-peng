<template lang="pug">
.card-info-wrapper
  .picture-box
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
import PictureSwiper from "@/components/PictureSwiper.vue"
import { gsap } from "gsap"

export default {
  name: "CardInfo",
  components: {
    PictureSwiper
  },
  props: ["cardData"],
  data() {
    return {
      sceneArr: []
    }
  },
  beforeDestroy() {
    this.sceneArr.map((scene) => {
      this.$scrollmagic.removeScene(scene)
    })
  },
  watch: {},
  mounted() {
    this.setInitial()
    this.setAnimate()
  },
  computed: {},
  methods: {
    setInitial() {
      gsap.set(".picture-box", {
        y: 50,
        opacity: 0
      })
      gsap.set(".date", {
        y: 50,
        opacity: 0
      })
      gsap.set(".card-title", {
        y: 50,
        opacity: 0
      })
      gsap.set(".card-description", {
        y: 50,
        opacity: 0
      })
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: ".picture-box",
          reverse: false
        })
        .setTween(".picture-box", 1, {
          opacity: 1
        })
      // .addIndicators({ name: "banner" })

      this.sceneArr[1] = this.$scrollmagic
        .scene({
          triggerElement: ".date",
          offset: -100,
          reverse: false
        })
        .setTween(".date", 1, {
          y: 0,
          opacity: 1
        })
      // .addIndicators({ name: "date" })

      this.sceneArr[2] = this.$scrollmagic
        .scene({
          triggerElement: ".card-title",
          offset: -100,
          reverse: false
        })
        .setTween(".card-title", 1, {
          y: 0,
          opacity: 1
        })
      // .addIndicators({ name: ".card-title" })

      this.sceneArr[3] = this.$scrollmagic
        .scene({
          triggerElement: ".card-description",
          offset: -100,
          reverse: false
        })
        .setTween(".card-description", 1, {
          y: 0,
          opacity: 1
        })
      // .addIndicators({ name: "card-description" })

      this.sceneArr.forEach((scene) => {
        console.log(scene)
        this.$scrollmagic.addScene(scene)
      })
    }
  }
}
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
