<template lang="pug">
article.works
  section.banner
    figure.works-banner
      img(src="@/assets/images/works-banner.png")
  section.main
    .search-box
      SearchBox(
        :searchTxt="searchTxt"
        @searchHandler="searchHandler"
      )
    .wrapper(v-if="!isLoading")
      .year-mobile(v-if="!isSelect") {{nowYear||searchTxt}}
      .years-title(v-if="isMobile&&isSelect") {{$t(`Work.yearTitle`)}}
      .years-list(v-if="!isMobile||isMobile&&isSelect")
        .year.active(v-if="searchTxt") {{searchTxt}}
        .year(
          v-for="(year,index) in work.years" :key="index"
          :class="{'active': year == nowYear}"
          @click="searchYear(year)"
        ) {{year}}
      .works-box(v-if="!isMobile||isMobile&&!isSelect")
        .work-item(v-for="work in work.list" :key="work.id" @click="showWork(work)")
          .work-pic(:style="`background-image: url('${work.img}')`")
          .work-name {{work.name}}
          .work-info {{work.type}}  {{work.width}} x {{work.height}} {{work.unit}}  {{work.year}}
        paginate(
          v-model="pageNum"
          :page-count="work.allPage||0"
          :click-handler="pageHandler"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'paginate-box'"
          :hide-prev-next="true"
        )
  .btn-box(v-if="!isSelect")
    .pre-page(@click="reSearch")
    .go-top(@click="goTop")
  section.popup(v-if="isShowPopup")
    .close(@click="isShowPopup=false")
    .wrapper
      .work-pic(:style="`background-image: url('${popupWork.img}')`")
      .work-name {{popupWork.name}}
      .work-info {{popupWork.type}}  {{popupWork.width}} x {{popupWork.height}} {{popupWork.unit}}  {{popupWork.year}}
      
</template>

<script>
import { mapState, mapActions } from "vuex";
import SearchBox from "@/components/SearchBox";
import Paginate from "vuejs-paginate";
import { TweenMax, gsap } from "gsap";

export default {
  name: "Works",
  components: {
    SearchBox,
    Paginate,
  },
  data() {
    return {
      pageSize: 6,
      pageNum: 1,
      nowYear: "",
      searchTxt: "",
      isShowPopup: false,
      isSelect: true,
      popupWork: {
        name: "",
        img: "",
        type: "",
        width: null,
        height: null,
        unit: "",
        year: "",
      },
      sceneArr: [],
    };
  },
  computed: {
    ...mapState(["isLoading", "lang", "work", "screenWidth"]),
    isMobile() {
      return this.screenWidth <= 768;
    },
  },
  beforeDestroy() {
    this.sceneArr.map((scene) => {
      this.$scrollmagic.removeScene(scene);
    });
  },
  mounted() {
    this.$nextTick(() => {
      gsap.set("section.banner,.search-box", {
        opacity: 0,
      });
    });
  },
  created() {
    this.getWorkYears()
      .then(() => {
        console.log("getWorkYears success");
        if (!this.isMobile) {
          this.nowYear = this.work.years[0];
          this.apiList();
        } else {
          this.setInitial();
          this.setAnimate();
        }
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
          this.isSelect = false;
          this.setInitial();
          this.setAnimate();
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
    showWork(work) {
      this.isShowPopup = true;
      this.popupWork = work;
    },
    setInitial() {
      gsap.set("section.banner", {
        opacity: 0,
      });
      gsap.set(".search-box", {
        opacity: 0,
      });
      gsap.set(".work-item", {
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
        .on("enter", function() {
          gsap
            .timeline()
            .add(
              TweenMax.to("section.banner", 1, {
                opacity: 1,
              })
            )
            .add(
              TweenMax.to(".search-box", 1, {
                opacity: 1,
                delay: -0.5,
              })
            );
        });
      // .addIndicators({ name: "banner" })

      this.sceneArr[1] = this.$scrollmagic
        .scene({
          triggerElement: ".work-item",
          reverse: false,
          triggerHook: 1,
        })
        .on("enter", function() {
          TweenMax.staggerTo(
            ".work-item",
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
        console.log(scene);
        this.$scrollmagic.addScene(scene);
      });
    },
    reSearch() {
      this.isSelect = true;
      this.searchTxt = "";
      this.nowYear = "";
      window.scrollTo({
        top: 0,
      });
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
      .years-title
        display: none
      .search-txt
        margin-bottom: 1rem
        font-size: 1.6rem
        color: $gray-004
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
          transition: .3s
          cursor: pointer
          position: relative
          +before
            width: 1rem
            height: 1rem
            border-radius: 50%
            background-color: $gray-005
            transition: .3s
            position: absolute
            top: 0
            bottom: 0
            right: 0
            margin: auto
          & + .year
            margin-top: 3rem
          &.active,&:hover
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
          cursor: pointer
          .work-pic
            width: 100%
            padding-bottom: 100%
            margin-bottom: 1.5rem
            // background-image: url('../assets/images/works-example.png')
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
  section.popup
    width: 100%
    height: 100%
    background-color: rgba(#000,.9)
    position: fixed
    top: 0
    left: 0
    z-index: 101
    .close
      width: 100%
      height: 100%
    .wrapper
      width: 80vh
      max-width: 90vw
      text-align: center
      +pstc5
      .work-pic
        width: 100%
        padding-bottom: 100%
        margin-bottom: 1.5rem
        // background-image: url('../assets/images/works-example.png')
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
          cursor: pointer
        .years-title
          display: block
          margin-bottom: 2rem
          font-size: 1.6rem
          color: $gray-004
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
