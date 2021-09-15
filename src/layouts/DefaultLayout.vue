<template lang="pug">
.default-wrapper
  Header
  router-view
  Footer
  .scroll-box
    .scroll-btn.go-down(@click="goDown")
      include ../assets/pug/arrow-left.pug
    .scroll-btn.go-top(@click="goTop")
      include ../assets/pug/arrow-left.pug
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { gsap } from "gsap";

export default {
  name: "Default",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      sceneArr: [],
    };
  },
  computed: {},
  beforeDestroy() {
    this.sceneArr.map((scene) => {
      this.$scrollmagic.removeScene(scene);
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.setAnimate();
    });
  },
  methods: {
    setAnimate() {
      gsap.set(".go-top", {
        display: "none",
      });
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: "footer",
          triggerHook: 1,
          offset: 0,
          reverse: true,
        })
        .on("enter", function() {
          gsap.set(".go-down", {
            display: "none",
          });
          gsap.set(".go-top", {
            display: "block",
          });
        })
        .on("leave", function() {
          gsap.set(".go-down", {
            display: "block",
          });
          gsap.set(".go-top", {
            display: "none",
          });
        });
      // .addIndicators({ name: "default layout" });

      this.sceneArr.forEach((scene) => {
        this.$scrollmagic.addScene(scene);
      });
    },
    goDown() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.default-wrapper
  width: 100%
  padding: 0 50px
  font-size: 20px
  box-sizing: border-box
  +rwd(768px)
    font-size: 16px
    padding: 0 2rem
  .scroll-btn
    width: 40px
    cursor: pointer
    fill: none
    stroke: $gray-004
    transition: .3s
    position: fixed
    +hover
      stroke: #fff
  .go-down
    right: 0.7rem
    bottom: 2rem
    transform: rotate(-90deg)
  .go-top
    right: 1rem
    bottom: 8rem
    transform: rotate(90deg)

article
  padding-top: 115px
  +rwd(768px)
    padding-top: 60px
</style>
