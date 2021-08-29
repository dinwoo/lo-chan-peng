<template lang="pug">
article.works
  section.banner
    figure.works-banner
      img(src="@/assets/images/works-banner.png")
  section.main
    SearchBox(
      :searchTxt="searchTxt"
      @searchHandler="searchHandler"
    )
    .wrapper(v-if="!isLoading")
      .year-mobile 2018
      .years-list
        .year(
          v-for="(year,index) in work.years" :key="index"
          @click="searchYear(year)"
        ) {{year}}
      .works-box
        .work-item(v-for="work in work.list" :key="work.id")
          .work-pic
          .work-name {{work.name}}
          .work-info {{work.type}}  {{work.width}} x {{work.height}} {{work.unit}}  {{work.year}}
        paginate(
          v-model="pageNum"
          :page-count="work.allPages||0"
          :click-handler="pageHandler"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'paginate-box'"
          :hide-prev-next="true"
        )
</template>

<script>
import { mapState, mapActions } from "vuex";
import SearchBox from "@/components/SearchBox";
import Paginate from "vuejs-paginate";

export default {
  name: "Works",
  components: {
    SearchBox,
    Paginate,
  },
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      nowYear: "",
      searchTxt: "",
    };
  },
  computed: {
    ...mapState(["isLoading", "lang", "work"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  created() {
    this.getWorkYears()
      .then(() => {
        console.log("getWorkYears success");
        this.nowYear = this.work.years[0];
        this.apiList();
      })
      .catch(() => {
        console.log("fail");
      });
  },
  methods: {
    ...mapActions(["getWorkYears", "getWorkListApi"]),
    getWorkList(year, select, currentPage) {
      this.getWorkListApi({
        year,
        select,
        pageSize: this.pageSize,
        currentPage,
        channel: this.lang,
      })
        .then(() => {
          console.log("getWorkListApi success");
        })
        .catch(() => {
          console.log("fail");
        });
    },
    apiList() {
      this.getWorkList(this.nowYear, this.searchTxt, this.pageNum);
    },
    searchYear(year) {
      console.log(year);
      this.nowYear = year;
      this.searchTxt = "";
      this.pageNum = 1;
      this.apiList();
    },
    searchHandler(txt) {
      this.searchTxt = txt;
      this.nowYear = "";
      this.pageNum = 1;
      this.apiList();
    },
    pageHandler(pageNum) {
      console.log(pageNum);
      this.pageNum = pageNum;
      this.apiList();
    },
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.works
  section.banner
    .works-banner
      width: 100%
  section.main
    width: 100%
    max-width: 1280px
    padding: 0 15px
    margin: auto
    box-sizing: border-box
    .wrapper
      padding: 2rem 0
      .year-mobile
        display: none
      .years-list
        width: 120px
        display: inline-block
        vertical-align: top
        position: relative
        +before
          width: 1px
          height: calc(100% - 1.6rem)
          background-color: $gray-005
          position: absolute
          top: 0
          bottom: 0
          right: 0.5rem
          margin: auto
        .year
          font-size: 1.6rem
          color: $gray-005
          cursor: pointer
          position: relative
          +before
            width: 1rem
            height: 1rem
            border-radius: 50%
            background-color: $gray-005
            position: absolute
            top: 0
            bottom: 0
            right: 0
            margin: auto
          & + .year
            margin-top: 3rem
          &.active
            color: #fff
            &:before
              background-color: #fff
      .works-box
        width: calc(100% - 120px)
        display: inline-block
        vertical-align: top
        .work-item
          width: 50%
          padding: 0 5%
          margin-bottom: 3rem
          box-sizing: border-box
          display: inline-block
          vertical-align: top
          text-align: center
          .work-pic
            width: 100%
            padding-bottom: 100%
            margin-bottom: 1.5rem
            background-image: url('../assets/images/works-example.png')
            background-size: contain
            background-position: center center
            background-repeat: no-repeat
          .work-name
            font-size: 1.4rem
            line-height: 1.5
            color: $gray-004
          .work-info
            font-size: 1rem
            line-height: 1.5
            color: $gray-005
  +rwd(768px)
    section.banner
      .works-banner
    section.main
      .wrapper
        padding: 2rem 0
        .year-mobile
          display: block
          padding: 1rem 0
          margin-bottom: 2rem
          font-size: 2rem
          color: $gray-004
          border-bottom: 1px solid $gray-004
          text-align: center
        .years-list
          width: 80px
          margin: 0 auto 2rem
          display: block
          &:before
            right: 8px
          .year
            font-size: 1.2rem
            &:before
              width: 16px
              height: 16px
        .works-box
          width: 100%
          .work-item
            width: 100%
            padding: 0 5%
            margin-bottom: 3rem
            .work-pic
            .work-name
            .work-info
</style>
