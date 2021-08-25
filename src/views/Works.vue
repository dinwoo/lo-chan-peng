<template lang="pug">
article.works
  section.banner
    figure.works-banner
      img(src="@/assets/images/works-banner.png")
  section.main
    SearchBox
    .wrapper
      .year-mobile 2018
      .years-list
        .year.active 2013
        .year 2013
        .year 2013
        .year 2013
      .works-box
        .work-item(v-for="item in 5")
          .work-pic
          .work-name 敘利亞的少年
          .work-info 水墨  60 x 96 cm  2020
</template>

<script>
import {
  mapState
} from "vuex";
import SearchBox from "@/components/SearchBox"

export default {
  name: 'Works',
  components: {
    SearchBox
  },
  data() {
    return {
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

article.works
  section.banner
    .works-banner
      width: 100%
  section.main
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