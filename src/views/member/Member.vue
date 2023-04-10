<template lang="pug">
article.member-info
  section.banner
    BannerPicture(:bannerLink="bannerLink")
    //- figure.member-icon
    //-   img(src="@/assets/images/member-banner-d.png")
  router-view
          


</template>

<script>
import { mapState } from "vuex";
import BannerPicture from "@/components/BannerPicture";
import Button from "@/components/Button.vue";

export default {
  name: "Member",
  components: {
    BannerPicture,
    Button,
  },
  data() {
    return {
      bannerLink: {
        desktop: "member-banner-m.jpg",
        mobile: "member-banner-m.jpg",
      },
    };
  },
  computed: {
    ...mapState(["screenWidth"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {},
  watch: {},
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"

+input-style

section.form
  width: 100%
  max-width: 960px
  padding: 0 15px
  margin: auto
  box-sizing: border-box
  position: relative
  .title
    font-size: 1.8rem
    letter-spacing: 4px
    color: $gray-005
    position: absolute
    left: -200px
    .break
      display: block
  .column-1
    margin-bottom: 1rem
  .column-2
    width: 46%
    margin-bottom: 1rem
    +dib
    & + .column-2
      margin-left: 8%
  +rwd(1440px)
    .title
      margin-bottom: 2rem
      font-size: 1.6rem
      position: relative
      left: 0px
      border-bottom: 1px solid $gray-005
      .break
        display: inline
        padding-left: 1rem
  +rwd(768px)
    .title
    .column-1
      margin-bottom: 1rem
    .column-2
      width: 100%
      & + .column-2
        margin-left: 0%
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.member-info
  // section.banner
  //   padding: 150px 0
  //   .member-icon
  //     width: 465px
  //     margin: auto
  // +rwd(768px)
  //   section.banner
  //     padding: 15vw 0
  //     .member-icon
  //       width: 35vw
</style>
