<template lang="pug">
.card-list-wrapper
  router-link.card-item(
    v-for="card in cardData" :key="card.id"
    :to="{name:routeName,params:{id:card.id}}"
  )
    .date {{card.dateTime}}
    .card-pic(style="")
    .card-title {{card.title}}
    .card-description {{card.description}}

</template>

<script>
// import {
//   mapState
// } from "vuex";
import { TweenMax, gsap } from "gsap";

export default {
  name: "CardList",
  components: {},
  props: {
    cardData: Array,
    routeName: String,
  },
  data() {
    return {
      sceneArr: [],
    };
  },
  watch: {},
  beforeDestroy() {
    this.sceneArr.map((scene) => {
      this.$scrollmagic.removeScene(scene);
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.setInitial();
      this.setAnimate();
    });
  },
  computed: {},
  methods: {
    setInitial() {
      gsap.set(".card-list-wrapper .card-item", {
        y: 50,
        opacity: 0,
      });
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: ".card-list-wrapper .card-item",
          reverse: false,
          triggerHook: 1,
        })
        .on("enter", function() {
          TweenMax.staggerTo(
            ".card-list-wrapper .card-item",
            1,
            {
              y: 0,
              opacity: 1,
            },
            0.2
          );
        });
      // .addIndicators({ name: "card-list" });

      this.sceneArr.forEach((scene) => {
        this.$scrollmagic.addScene(scene);
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.card-list-wrapper
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  .card-item
    width: 46%
    margin-bottom: 2rem
    display: block
    .date
      margin-bottom: 1rem
      font-size: 1.4rem
      color: $gray-004
    .card-pic
      background-image: url('../assets/images/news-example.jpg')
      width: 100%
      padding-bottom: 63.701923%
      border-radius: 10px
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
    .card-title
      margin: 1.2rem 0
      font-size: 1.4rem
      color: $gray-004
    .card-description
      font-size: 1rem
      line-height: 1.5
      color: $gray-005
  +rwd(768px)
    .card-item
      width: 100%
      .date
      .card-pic
      .card-title
      .card-description
</style>
