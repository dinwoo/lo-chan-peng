<template lang="pug">
article.course-info(v-if="!isLoading")
  section.banner
    figure.course-icon
      img(src="@/assets/images/course-icon.png")
  section.main
    CardInfo(:cardData="course.detail")
    Button(title='課 程')
  section.related
    .title 相關文章
    RelatedList(:relatedListData="course.detail.otherCourses" routeName="CourseInfo")


</template>

<script>
import { mapState, mapActions } from "vuex";
import CardInfo from "@/components/CardInfo.vue";
import RelatedList from "@/components/RelatedList.vue";
import Button from "@/components/Button.vue";

export default {
  name: "CourseInfo",
  components: {
    CardInfo,
    RelatedList,
    Button,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading", "course"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  created() {
    this.getCourseDetail()
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("fail");
      });
  },
  methods: {
    ...mapActions(["getCourseDetail"]),
  },
  watch: {},
};
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
