<template lang="pug">
article.about
  section.banner
    figure.banner-pic
      img(src="@/assets/images/about-banner.jpg")
  section.intro.intro1
    .content
      .title
        | {{$t(`About.name`)}}
        .slide-switch(@click="open1=!open1") {{open1?"－":"＋"}}
      .intro-box
        VueSlideToggle(:open="open1")
          .info.colum-1.mb.dark
            | {{$t(`About.birth`)}}
            br
            | {{$t(`About.creativeMedia`)}}
          .info.colum-1.separate(v-html="$t(`About.info`)")
  section.intro.intro2
    .content
      .title
        p(v-html="$t(`About.title1`)")
        .slide-switch(@click="open2=!open2") {{open2?"－":"＋"}}
      .intro-box
        VueSlideToggle(:open="open2")
          .info.colum-2.mb
            .sub-title {{$t(`About.educationTitle`)}}
            p(v-html="$t(`About.education`)")
          .info.colum-2.mb
            .sub-title {{$t(`About.currentJobTitle`)}}
            p(v-html="$t(`About.currentJob`)")
          .info.colum-1
            .sub-title {{$t(`About.experience.title`)}}
            .year(v-for="yearList in $t(`About.experience.list`)" :key="yearList.year")
              p {{yearList.year}}
              ul
                li(v-for="(yearItem,index) in yearList.items" :key="index" v-html="yearItem")
  section.intro.intro3
    .content
      .title
        p(v-html="$t(`About.title2`)")
        .slide-switch(@click="open3=!open3") {{open3?"－":"＋"}}
      .intro-box
        VueSlideToggle(:open="open3")
          .info.colum-1.mb
            .sub-title {{$t(`About.soloExhibitions.title`)}}
            .year(v-for="yearList in $t(`About.soloExhibitions.list`)" :key="yearList.year")
              p {{yearList.year}}
              ul
                li(v-for="(yearItem,index) in yearList.items" :key="index" v-html="yearItem")
          .info.colum-1mb
            .sub-title {{$t(`About.groupExhibitions.title`)}}
            .separate
              .year(v-for="yearList in $t(`About.groupExhibitions.list`)" :key="yearList.year")
                p {{yearList.year}}
                ul
                  li(v-for="(yearItem,index) in yearList.items" :key="index" v-html="yearItem")
  section.intro.intro4
    .content
      .title
        p(v-html="$t(`About.title3`)")
        .slide-switch(@click="open4=!open4") {{open4?"－":"＋"}}
      .intro-box
        VueSlideToggle(:open="open4")
          .info.colum-1.mb
            .separate
              .year(v-for="yearList in $t(`About.awards.list`)" :key="yearList.year")
                p {{yearList.year}}
                ul
                  li(v-for="(yearItem,index) in yearList.items" :key="index" v-html="yearItem")
  section.intro.intro5
    .content
      .title
        p(v-html="$t(`About.title4`)")
        .slide-switch(@click="open5=!open5") {{open5?"－":"＋"}}
      .intro-box
        VueSlideToggle(:open="open5")
          .info.colum-1
            .separate
              .year(v-for="yearList in $t(`About.collections.list`)" :key="yearList.year")
                p {{yearList.year}}
                ul
                  li(v-for="(yearItem,index) in yearList.items" :key="index" v-html="yearItem")
</template>

<script>
import { mapState } from "vuex";
import { VueSlideToggle } from "vue-slide-toggle";
import { TweenMax, gsap } from "gsap";

export default {
  name: "About",
  components: {
    VueSlideToggle,
  },
  data() {
    return {
      open1: true,
      open2: true,
      open3: true,
      open4: true,
      open5: true,
      sceneArr: [],
    };
  },
  computed: {
    ...mapState(["screenWidth"]),
    isOpen() {
      return this.screenWidth > 768 ? true : false;
    },
  },
  beforeDestroy() {
    this.sceneArr.map((scene) => {
      this.$scrollmagic.removeScene(scene);
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.setSwitch();
      this.setInitial();
      this.setAnimate();
    });
  },
  methods: {
    setSwitch() {
      this.open1 = this.isOpen;
      this.open2 = this.isOpen;
      this.open3 = this.isOpen;
      this.open4 = this.isOpen;
      this.open5 = this.isOpen;
    },
    setInitial() {
      gsap.set("section.banner", {
        y: 100,
        opacity: 0,
      });
      gsap.set("section.intro", {
        y: 100,
        opacity: 0,
      });
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: "section.banner",
          triggerHook: 1,
          reverse: false,
        })
        // .setTween(tl)
        .on("enter", function() {
          gsap
            .timeline()
            .to("section.banner", 1, {
              y: 0,
              opacity: 1,
            })
            .add(
              TweenMax.staggerTo(
                "section.intro",
                1,
                {
                  y: 0,
                  opacity: 1,
                  delay: -1,
                },
                0.5
              )
            );
        });
      // .addIndicators({ name: "banner" });

      this.sceneArr.forEach((scene) => {
        this.$scrollmagic.addScene(scene);
      });
    },
  },
  watch: {
    screenWidth() {
      this.setSwitch();
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"

.break
  display: block
  +rwd(768px)
    display: inline
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.about
  section.banner
    border-radius: 1rem
    overflow: hidden
    figure.banner-pic
  section.intro
    width: 100%
    padding: 2rem 3rem
    margin-top: 1.5rem
    border-radius: 1.5rem
    background-color: rgba(#fff,.1)
    box-sizing: border-box
    .content
      display: flex
      .title
        width: 20%
        font-size: 1.8rem
        letter-spacing: 2px
        color: $gray-004
        border-right: 1px solid $gray-005
        p
        .slide-switch
          display: none
      .intro-box
        width: 80%
        .info
          width: 100%
          padding-left: 3rem
          font-size: 1rem
          letter-spacing: .5px
          line-height: 1.5
          color: $gray-005
          box-sizing: border-box
          display: inline-block
          vertical-align: top
          .sub-title
            margin-bottom: 0.8rem
            font-size: 1.4rem
            color: $gray-004
          .year
            & + .year
              margin-top: 0.5rem
            p
              width: 50px
              display: inline-block
              vertical-align: top
            ul
              width: calc(100% - 50px)
              padding-left: 2rem
              box-sizing: border-box
              display: inline-block
              vertical-align: top
              li
        .colum-1
          width: 100%
        .colum-2
          width: 50%
        .dark
          color: $gray-004
        .mb
          margin-bottom: 60px
        .separate
          column-count: 2
          column-gap: 30px
  +rwd(1080px)
    section.intro
      .content
        .title
          width: 30%
        .intro-box
          width: 70%
  +rwd(768px)
    section.banner
      figure.banner-pic
    section.intro
      width: 100%
      padding: 0rem
      margin-top: 1rem
      border-radius: 1.5rem
      background-color: transparent
      .content
        display: block
        .title
          width: 100%
          padding: 1rem 0
          border-right: none
          border-bottom: 1px solid $gray-004
          position: relative
          .slide-switch
            display: block
            cursor: pointer
            position: absolute
            right: 0
            top: 50%
            transform: translateY(-50%)
        .intro-box
          width: 100%
          padding: 0.5rem 0
          .info
            padding-left: 0
            font-size: 1rem
            .sub-title
              margin-bottom: 0.8rem
              font-size: 1.4rem
            .year
              & + .year
                // margin-top: 0.5rem
              p
                // width: 50px
              ul
                // width: calc(100% - 50px)
                // padding-left: 2rem
                li
          .colum-1
            width: 100%
          .colum-2
            width: 100%
          .separate
            column-count: 1
</style>
