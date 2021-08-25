<template lang="pug">
article.news(v-if="!isLoading")
  section.banner
    figure.news-icon
      img(src="@/assets/images/news-icon.png")
  section.main
    SearchBox
    CardList(:cardData="news.list" routeName="NewsInfo")
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardList from "@/components/CardList";
import SearchBox from "@/components/SearchBox";

export default {
  name: "News",
  components: {
    CardList,
    SearchBox,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading", "news"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  created() {
    this.getNewsList()
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("fail");
      });
  },
  methods: {
    ...mapActions(["getNewsList"]),
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.news
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
  +rwd(768px)
    section.banner
      padding: 15vw 0
      .news-icon
        width: 25vw
</style>
