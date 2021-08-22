<template lang="pug">
article.course-info
  section.banner
    figure.course-icon
      img(src="@/assets/images/course-icon.png")
  section.main
    CardInfo(:cardData="courseData")
    Button(title='課 程')
  section.related
    .title 相關文章
    RelatedList(:relatedListData="relatedListData")


</template>

<script>
import {
  mapState
} from "vuex";
import CardInfo from "@/components/CardInfo.vue";
import RelatedList from "@/components/RelatedList.vue";
import Button from "@/components/Button.vue";

export default {
  name: 'NewsInfo',
  components: {
    CardInfo,
    RelatedList,
    Button
  },
  data() {
    return {
      courseData:{
        id:1,
        date:'01 Jul 2021',
        title:'【國際藝術家的油畫課｜從入門到經典三大技法】 課程內容簡介',
        content: '早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。'
      },
      relatedListData:[
        {
          id:1,
          routeName:'CourseInfo',
          title:'【國際藝術家的油畫課｜從入門到經典三大技法】 課程內容簡介',
        },
        {
          id:2,
          routeName:'CourseInfo',
          title:'【國際藝術家的油畫課｜從入門到經典三大技法】 課程內容簡介',
        },
        {
          id:3,
          routeName:'CourseInfo',
          title:'【國際藝術家的油畫課｜從入門到經典三大技法】 課程內容簡介',
        },
        {
          id:4,
          routeName:'CourseInfo',
          title:'【國際藝術家的油畫課｜從入門到經典三大技法】 課程內容簡介',
        },
      ]
    }
  },
  computed: {
    ...mapState(["screenWidth"]),
  },
  mounted() {
    this.$nextTick(()=>{
    })
  },
  methods: {
  },
  watch: {
  },
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.course-info
  section.banner
    padding: 150px 0
    .course-icon
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
      .course-icon
        width: 25vw
    section.main
    section.related
      .title
</style>