<template lang="pug">
article.news-info
  section.banner
    figure.news-icon
      img(src="@/assets/images/news-icon.png")
  section.main(v-if="!isLoading")
    CardInfo(:cardData="news.detail")
  section.related
    .title {{$t(`News.relatedTitle`)}}
    RelatedList(
      :relatedListData="news.detail.otherNews" routeName="NewsInfo"
    )
  .btn-box
    router-link.pre-page(:to="{name:'News'}")
    .go-top(@click="goTop")

</template>

<script>
import { mapState, mapActions } from "vuex";
import CardInfo from "@/components/CardInfo.vue";
import RelatedList from "@/components/RelatedList.vue";
import { gsap } from "gsap";

export default {
  name: "NewsInfo",
  components: {
    CardInfo,
    RelatedList,
  },
  data() {
    return {
      sceneArr: [],
    };
  },
  computed: {
    ...mapState(["isLoading", "lang", "news"]),
  },
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
  created() {
    this.getNewsData();
  },
  methods: {
    ...mapActions(["getNewsDetail"]),
    getNewsData() {
      this.getNewsDetail({
        id: parseInt(this.$route.params.id),
        channel: this.lang,
      })
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          console.log("fail");
        });
    },
    setInitial() {
      gsap.set("section.banner", {
        opacity: 0,
      });
      gsap.set("section.related", {
        y: 50,
        opacity: 0,
      });
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: "section.banner",
          reverse: false,
        })
        .setTween("section.banner", 1, {
          opacity: 1,
        });
      // .addIndicators({ name: "banner" })

      this.sceneArr[1] = this.$scrollmagic
        .scene({
          triggerElement: "section.related",
          reverse: false,
          triggerHook: 0.8,
        })
        .setTween("section.related", 1, {
          y: 0,
          opacity: 1,
        });
      // .addIndicators({ name: "related" });

      this.sceneArr.forEach((scene) => {
        console.log(scene);
        this.$scrollmagic.addScene(scene);
      });
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  watch: {
    "$route.params.id": function() {
      this.getNewsData();
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.news-info
  section.banner
    padding: 150px 0
    .news-icon
      width: 275px
      margin: auto
  section.main
    width: 100%
    max-width: 1280px
    padding: 0 15px
    margin: auto
    box-sizing: border-box
  section.related
    padding-top: 100px
    .title
      margin-bottom: 1.5rem
      font-size: 1.8rem
      color: $gray-005
    .related-box
  +rwd(768px)
    section.banner
      padding: 15vw 0
      .news-icon
        width: 25vw
    section.related
      .title
  +rwd(768px)
    .btn-box
      width: 100%
      margin-top: 2rem
      border-top: 1px solid $gray-004
      border-bottom: 1px solid $gray-004
      position: relative
      .pre-page,.go-top
        display: block
        width: 4rem
        height: 4rem
        background-image: url('../assets/images/arrow.png')
        background-size: 2rem
        background-position: center center
        background-repeat: no-repeat
        cursor: pointer
      .pre-page
        border-right: 1px solid $gray-004
      .go-top
        border-bottom: 1px solid $gray-004
        transform: rotate(90deg)
        position: absolute
        top: 0
        right: 0
</style>
