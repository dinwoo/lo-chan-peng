<template lang="pug">
article.news-info(v-if="!isLoading")
  section.banner
    figure.news-icon
      img(src="@/assets/images/news-icon.png")
  section.main
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

export default {
  name: "NewsInfo",
  components: {
    CardInfo,
    RelatedList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading", "lang", "news"]),
  },
  mounted() {
    this.$nextTick(() => {});
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
