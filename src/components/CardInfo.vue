<template lang="pug">
.card-info-wrapper
  .picture-box
    PictureSwiper(
      v-if="cardData.imgList.length"
      :pictureLink="cardData.imgList"
    )
  .date {{cardData.dateTime}}
  .card-title {{cardData.title}}
  .card-description(
    v-html="isProcessingDescription?articleHandler(cardData.description):cardData.description")

</template>

<script>
// import {
//   mapState
// } from "vuex";
import PictureSwiper from "@/components/PictureSwiper.vue";
import { TweenMax, gsap } from "gsap";
import mixins from "@/mixins/index.js";

export default {
  name: "CardInfo",
  components: {
    PictureSwiper
  },
  mixins: [mixins],
  props: ["cardData", "isProcessingDescription"],
  data() {
    return {
      sceneArr: []
    };
  },
  beforeDestroy() {
    this.sceneArr.map(scene => {
      this.$scrollmagic.removeScene(scene);
    });
  },
  watch: {},
  mounted() {
    this.setInitial();
    this.setAnimate();
  },
  computed: {},
  methods: {
    setInitial() {
      gsap.set(".picture-box", {
        y: 50,
        opacity: 0
      });
      gsap.set(".date", {
        y: 50,
        opacity: 0
      });
      gsap.set(".card-title", {
        y: 50,
        opacity: 0
      });
      gsap.set(".card-description", {
        y: 50,
        opacity: 0
      });
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: ".picture-box",
          reverse: false,
          triggerHook: 0.9
        })
        .setTween(".picture-box", 1, {
          opacity: 1
        });
      // .addIndicators({ name: "banner" })

      this.sceneArr[1] = this.$scrollmagic
        .scene({
          triggerElement: ".date",
          triggerHook: 0.9,
          reverse: false
        })
        .on("enter", function() {
          gsap
            .timeline()
            .add(
              TweenMax.to(".date", 1, {
                y: 0,
                opacity: 1
              })
            )
            .add(
              TweenMax.to(".card-title", 1, {
                y: 0,
                opacity: 1,
                delay: -0.5
              })
            )
            .add(
              TweenMax.to(".card-description", 1, {
                y: 0,
                opacity: 1,
                delay: -0.5
              })
            );
        });
      // .addIndicators({ name: "date" });

      this.sceneArr.forEach(scene => {
        console.log(scene);
        this.$scrollmagic.addScene(scene);
      });
    }
  }
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
    +rwd(768px)
      color: $gray-002
  .card-description
    font-size: 1rem
    line-height: 1.5
    color: $gray-005
    +rwd(768px)
      font-size: 1.2rem
      color: $gray-004
</style>

<style lang="sass">
@import "@/assets/sass/var.sass"
.article-link
  color: $blue-001
  text-decoration: underline
  transition: .3s
  &:hover
    opacity: .8
</style>
