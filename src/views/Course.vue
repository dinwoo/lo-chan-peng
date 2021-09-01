<template lang="pug">
article.course
  section.banner
    figure.course-icon
      img(src="@/assets/images/course-icon.png")
  section.main
    SearchBox(
      :searchTxt="searchTxt"
      @searchHandler="searchHandler"
    )
    CardList(v-if="!isLoading" :cardData="course.list" routeName="CourseInfo")
    paginate(
      :page-count="course.allPages||0"
      :click-handler="pageHandler"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'paginate-box'"
      :hide-prev-next="true"
    )
  section.qa-part
    figure.qa-icon
      img(src="@/assets/images/qa-icon.png")
    .qa-box
      .qa-item(v-for="(qa,index) in qaList" :key="index")
        .title 
          p(v-html="qa.question")
          .more-btn(@click="switchHandler(index)") More
        VueSlideToggle(:open="openSwitch[index]")
          .content(v-html="qa.answer")
        
</template>

<script>
import { mapState, mapActions } from "vuex"

import CardList from "@/components/CardList"
import { VueSlideToggle } from "vue-slide-toggle"
import SearchBox from "@/components/SearchBox"
import Paginate from "vuejs-paginate"

export default {
  name: "Course",
  components: {
    CardList,
    VueSlideToggle,
    SearchBox,
    Paginate
  },
  data() {
    return {
      openSwitch: [],
      pageSize: 10,
      searchTxt: ""
    }
  },
  computed: {
    ...mapState(["isLoading", "lang", "course"]),
    qaList() {
      return this.$t(`QA.list`)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.qaList.forEach(() => {
        this.openSwitch.push(false)
      })
    })
  },
  created() {
    this.getCourseList()
  },
  methods: {
    ...mapActions(["getCourseListApi"]),
    getCourseList(select, currentPage) {
      this.getCourseListApi({
        select,
        pageSize: this.pageSize,
        currentPage,
        channel: this.lang
      })
        .then(() => {
          console.log("success")
        })
        .catch(() => {
          console.log("fail")
        })
    },
    searchHandler(txt) {
      this.searchTxt = txt
      this.getCourseList(txt, 1)
    },
    pageHandler(pageNum) {
      this.getCourseList(this.searchTxt, pageNum)
      console.log(pageNum)
    },
    switchHandler(index) {
      this.$set(this.openSwitch, index, !this.openSwitch[index])
    }
  },
  watch: {}
}
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"
.title
  p
    a
      font-size: 1.4rem
      color: $gray-004
      display: inline-block
      vertical-align: baseline
      text-decoration: underline
.content
  a
    font-size: 1rem
    letter-spacing: .5px
    line-height: 2
    color: $gray-005
    text-decoration: underline
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.course
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
  section.qa-part
    width: 100%
    padding: 30px 0
    max-width: 1280px
    padding: 0 15px
    margin: auto
    box-sizing: border-box
    figure.qa-icon
      width: 200px
      margin: 150px auto
    .qa-box
      .qa-item
        .title
          padding: 1rem 0
          p
            font-size: 1.4rem
            color: $gray-004
            display: inline-block
            vertical-align: baseline
          .more-btn
            padding: 0 1rem
            font-size: 1rem
            color: $gray-005
            display: inline-block
            vertical-align: baseline
            cursor: pointer
        .content
          font-size: 1rem
          letter-spacing: .5px
          line-height: 2
          color: $gray-005
          a
            font-size: 1rem
            letter-spacing: .5px
            line-height: 2
            color: $gray-005
  +rwd(768px)
    section.banner
      padding: 15vw 0
      .course-icon
        width: 25vw
    section.qa-part
      figure.qa-icon
        width: 120px
        margin: 40px auto
</style>
