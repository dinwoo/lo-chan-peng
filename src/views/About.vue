<template lang="pug">
article.about
  section.banner
    figure.banner-pic
      img(src="@/assets/images/about-banner.jpg")
  section.intro
    .content
      .title
        | 羅 展鵬
        .slide-switch(@click="open1=!open1") {{open1?"－":"＋"}}
      .intro-box
        VueSlideToggle(:open="open1")
          .info.colum-1.mb.dark
            | 1983 生於臺灣 
            br
            | 主要創作媒材|油畫、水墨、複合媒材
          .info.colum-2
            | 早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。2011年起以 駐村藝術家的身份，參與多項國際大型藝術交流計劃，如:德國柏林(2011)和美國洛杉 磯ESMoA當代美術館(El Segundo Museum of Arts)(2013)。近年來參與的主要展覽與 博覽會，如:《2020 「被歷史改變的人與改變歷史的人」，台灣》、 《肖像2020聯展(Portraiture 2020，美國》、《墨嵐2017》，臺北以及
            br
            | 倫 敦、東京、大阪、釜山、首爾、莫斯科、新加坡等地國際藝術博覽會。
          .info.colum-2
            | 作品被典藏於美國洛 杉磯ESMoA當代美術館、國立臺灣美術館、奇美博物館、聯邦文教基金會以及國內外諸多私人收藏家。 
            br
            br
            | 羅展鵬的作品以人物肖像畫為主要主題，創作媒材涵蓋油畫與水墨。在作品中，羅展鵬時常探究時間、歷史與生死虛實的議題。透過具象且細膩的人物肖像畫，以及如折舊、破損、燃燒、污漬等的痕跡，帶給觀者強烈的視覺體驗，藉此將時間、歷史等這類抽象的概念，轉化為可見的要素並轉化為其獨特的藝術語彙。
  section.intro
    .content
      .title
        | 簡歷
        .slide-switch(@click="open2=!open2") {{open2?"－":"＋"}}
      .intro-box
        VueSlideToggle(:open="open2")
          .info.colum-2.mb
            .sub-title 學歷
            | 藝術學碩士|國立臺灣師範大學美術系⻄畫組
            br
            | 藝術學學士|中國文化大學美術系
          .info.colum-2.mb
            .sub-title 現職
            | 職業藝術家 
            br
            | 助理教授，私立玄奘大學，臺灣
          .info.colum-1
            .sub-title 經歷
            .year
              p 2013
              ul
                li 駐村美國洛杉磯ESMoA當代美術館(El Segundo Museum of Arts)
            .year
              p 2011
              ul
                li 駐村德國柏林
            br
            |     
</template>

<script>
import {
  mapState
} from "vuex";
import { VueSlideToggle } from "vue-slide-toggle";

export default {
  name: 'About',
  components: {
    VueSlideToggle
  },
  data() {
    return {
      open1: true,
      open2: true,
      open3: true,
      open4: true,
      open5: true,
      open6: true,
    }
  },
  computed: {
    ...mapState(["screenWidth"]),
    isOpen(){
      return this.screenWidth>768?true:false
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.setSwitch()
    })
  },
  methods: {
    setSwitch(){
      this.open1 = this.isOpen
      this.open2 = this.isOpen
      this.open3 = this.isOpen
      this.open4 = this.isOpen
      this.open5 = this.isOpen
      this.open6 = this.isOpen
    }
  },
  watch: {
    screenWidth() {      
      this.setSwitch()
    },
  },
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.about
  padding-top: 115px
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
        .slide-switch
          display: none
      .intro-box
        width: 80%
        .info
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
  +rwd(768px)
    // padding-top: 115px
    section.banner
      figure.banner-pic
    section.intro
      width: 100%
      padding: 0rem
      margin-top: 1.5rem
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
    
</style>