<template lang="pug">
article.course-info(v-if="!isLoading")
  section.banner
    figure.course-icon
      img(src="@/assets/images/course-icon.png")
  section.main
    CardInfo(:cardData="course.detail")
    //- Button(title='課 程')
    a.buy-btn(:href="course.detail.buyScript") {{$t(`Course.btn`)}}
  section.related
    .title {{$t(`Course.relatedTitle`)}}
    RelatedList(:relatedListData="course.detail.otherCourses" routeName="CourseInfo")
  .btn-box
    router-link.pre-page(:to="{name:'Course'}")
    .go-top(@click="goTop")
      
    
    


</template>

<script>
import { mapState, mapActions } from "vuex"
import CardInfo from "@/components/CardInfo.vue"
import RelatedList from "@/components/RelatedList.vue"
import Button from "@/components/Button.vue"
import { gsap } from "gsap"

export default {
  name: "CourseInfo",
  components: {
    CardInfo,
    RelatedList,
    Button
  },
  data() {
    return {
      sceneArr: []
    }
  },
  computed: {
    ...mapState(["isLoading", "course"])
  },
  beforeDestroy() {
    this.sceneArr.map((scene) => {
      this.$scrollmagic.removeScene(scene)
    })
  },
  mounted() {
    this.$nextTick(() => {})
  },
  created() {
    this.getCourseData()
  },
  methods: {
    ...mapActions(["getCourseDetail"]),
    getCourseData() {
      this.getCourseDetail({
        id: parseInt(this.$route.params.id),
        channel: this.lang
      })
        .then(() => {
          console.log("success")
          this.setInitial()
          this.setAnimate()
        })
        .catch(() => {
          console.log("fail")
        })
    },
    setInitial() {
      gsap.set("section.banner", {
        opacity: 0
      })
      gsap.set("section.related", {
        y: 50,
        opacity: 0
      })
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: "section.banner",
          reverse: false
        })
        .setTween("section.banner", 1, {
          opacity: 1
        })
      // .addIndicators({ name: "banner" })

      this.sceneArr[1] = this.$scrollmagic
        .scene({
          triggerElement: "section.related",
          reverse: false,
          triggerHook: 0.8
        })
        .setTween("section.related", 1, {
          y: 0,
          opacity: 1
        })
      // .addIndicators({ name: "related" })

      this.sceneArr.forEach((scene) => {
        console.log(scene)
        this.$scrollmagic.addScene(scene)
      })
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  },
  watch: {
    "$route.params.id": function() {
      this.getCourseData()
    }
  }
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
    .buy-btn
      display: block
      width: 100%
      max-width: 300px
      margin: 3rem auto
      font-size: 1.4rem
      line-height: 4rem
      border-radius: 2rem
      color: $gray-001
      background-color: $gray-005
      text-align: center
      cursor: pointer
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
  +rwd(768px)
    .btn-box
      width: 100%
      margin-top: 2rem
      border-top: 1px solid $gray-004
      border-bottom: 1px solid $gray-004
      position: relative
      .pre-page,.go-top
        display: block
        width: 2rem
        height: 2rem
        background-image: url('../assets/images/arrow.png')
        background-size: 1.2rem
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
