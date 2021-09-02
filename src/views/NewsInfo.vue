<template lang="pug">
article.news-info
  section.banner
    figure.news-icon
      img(src="@/assets/images/news-icon.png")
  section.main(v-if="!isLoading")
    CardInfo(:cardData="news.detail")
  section.related
    .title 相關文章
    RelatedList(
      :relatedListData="news.detail.otherNews" routeName="NewsInfo"
    )


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
    this.getNewsDetail({
      id: this.$route.params.id,
      channel: this.lang,
    })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("fail");
      });
  },
  methods: {
    ...mapActions(["getNewsDetail"]),
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
        })
        .setTween("section.related", 1, {
          y: 0,
          opacity: 1,
        });
      // .addIndicators({ name: "related" })

      this.sceneArr.forEach((scene) => {
        console.log(scene);
        this.$scrollmagic.addScene(scene);
      });
    },
  },
  watch: {},
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
</style>
