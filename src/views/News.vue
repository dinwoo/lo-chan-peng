<template lang="pug">
article.news
  section.banner
    figure.news-icon
      img(src="@/assets/images/news-icon.png")
  section.main
    SearchBox(
      :searchTxt="searchTxt"
      @searchHandler="searchHandler"
    )
    CardList(v-if="!isLoading" :cardData="news.list" routeName="NewsInfo")
    paginate(
      :page-count="news.allPages||0"
      :click-handler="pageHandler"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'paginate-box'"
      :hide-prev-next="true"
    )

</template>

<script>
import { mapState, mapActions } from "vuex";
import CardList from "@/components/CardList";
import SearchBox from "@/components/SearchBox";
import Paginate from "vuejs-paginate";

export default {
  name: "News",
  components: {
    CardList,
    SearchBox,
    Paginate,
  },
  data() {
    return {
      pageSize: 10,
      searchTxt: "",
    };
  },
  computed: {
    ...mapState(["isLoading", "lang", "news"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  created() {
    this.getNewsList("", 1);
  },
  methods: {
    ...mapActions(["getNewsListApi"]),
    getNewsList(select, currentPage) {
      this.getNewsListApi({
        select,
        pageSize: this.pageSize,
        currentPage,
        channel: this.lang,
      })
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          console.log("fail");
        });
    },
    searchHandler(txt) {
      this.searchTxt = txt;
      this.getNewsList(txt, 1);
    },
    pageHandler(pageNum) {
      this.getNewsList(this.searchTxt, pageNum);
      console.log(pageNum);
    },
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
