<template lang="pug">
.card-list-wrapper
  router-link.card-item(
    v-for="card in cardData" :key="card.id"
    :to="{name:routeName,params:{id:card.id}}"
  )
    .date {{card.dateTime}}
    .card-content
      .card-pic
        //- (:style="`background-image: url('${card.img}')`")
        img(:src="card.img")
      .card-info
        .card-title {{card.title}}
        .card-description(v-html="articleHandler(card.description)")

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
    routeName: String
  },
  data() {
    return {
      sceneArr: []
    };
  },
  watch: {},
  beforeDestroy() {
    this.sceneArr.map(scene => {
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
        opacity: 0
      });
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: ".card-list-wrapper .card-item",
          reverse: false,
          triggerHook: 1
        })
        .on("enter", function() {
          TweenMax.staggerTo(
            ".card-list-wrapper .card-item",
            1,
            {
              y: 0,
              opacity: 1
            },
            0.2
          );
        });
      // .addIndicators({ name: "card-list" });

      this.sceneArr.forEach(scene => {
        this.$scrollmagic.addScene(scene);
      });
    }
  }
};
</script>

<style lang="sass">
.card-description
  img
    display: none
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.card-list-wrapper
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  .card-item
    width: 100%
    margin-bottom: 2rem
    display: block
    .date
      margin-bottom: 1rem
      font-size: 1.4rem
      color: $gray-004
    .card-content
      font-size: 0
      .card-pic
        display: inline-block
        vertical-align: top
        // background-image: url('../assets/images/news-example.jpg')
        width: 40%
        max-width: 575px
        border-radius: 10px
        overflow: hidden
        // padding-bottom: 63.701923%
        // background-size: cover
        // background-position: center center
        // background-repeat: no-repeat
        position: relative
        +before
          width: 100%
          height: 100%
          border-radius: 10px
          background-color: rgba(#000,.2)
          transition: .3s
          position: absolute
          top: 0
          left: 0
        +hover
          &:before
            background-color: rgba(#000,0)
      .card-info
        display: inline-block
        vertical-align: top
        width: 60%
        padding-left: 1rem
        box-sizing: border-box
        .card-title
          margin-bottom: 1.2rem
          font-size: 1.4rem
          color: $gray-004
        .card-description
          font-size: 1rem
          line-height: 1.5
          color: $gray-005
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          white-space: normal
          overflow: hidden
  +rwd(768px)
    .card-item
      width: 100%
      .date
      .card-content
        .card-pic
          display: block
          width: 100%
          max-width: none
        .card-info
          display: block
          width: 100%
          padding-left: 0
          .card-title
            margin: 1.2rem 0
          .card-description
</style>
