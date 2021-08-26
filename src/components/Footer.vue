<template lang="pug">
footer
  .menu
    figure.logo
      img(src="@/assets/images/logo-en.png")
    .page-box
        router-link.page-link(:to="{name:'About'}") {{$t(`Menu.about`)}}
        router-link.page-link(:to="{name:'News'}") {{$t(`Menu.news`)}}
        router-link.page-link(:to="{name:'Works'}") {{$t(`Menu.works`)}}
        router-link.page-link(:to="{name:'Contact'}") {{$t(`Menu.contact`)}}
        router-link.page-link(:to="{name:'Course'}") {{$t(`Menu.course`)}}
    .social-box
      figure.icon
        img(src="@/assets/images/fb-icon.png")
      figure.icon
        img(src="@/assets/images/ig-icon.png")
      figure.icon
        img(src="@/assets/images/yt-icon.png")
      figure.icon
        img(src="@/assets/images/telegram-icon.png")
      router-link(:to="{name:'Member'}")
        figure.icon
          img(src="@/assets/images/member-icon.png")
  .copyright
    p Copyright © 2021  LO CHAN PENG All righta RENU
    p Just Design
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

footer
  width: 100%
  padding-top: 50px
  .menu
    width: 100%
    padding: 1rem .8rem
    box-sizing: border-box
    display: flex
    justify-content: space-between
    align-items: center
    position: relative
    &:before,&:after
      content: ''
      display: block
      width: 100%
      height: 2px
      background-color: $gray-004
      position: absolute
    &:before
      top: 0
      left: 0
    &:after
      bottom: 0
      left: 0
    figure.logo
      width: 300px
      line-height: 1
    .page-box
      .page-link
        margin: 0 1.4rem
        font-size: 1rem
        color: $gray-005
    .social-box
      figure.icon
        width: 35px
        margin: 0 10px
        cursor: pointer
        +dib
  .copyright
    padding: .8rem
    box-sizing: border-box
    display: flex
    justify-content: space-between
    p
      color: $gray-005
  +rwd(1280px)
    // padding-top: 50px
    .menu
      padding: 1rem .8rem
      figure.logo
        width: 200px
      .page-box
        .page-link
          margin: 0 1rem
      .social-box
        figure.icon
          width: 25px
    .copyright
      padding: .8rem
  +rwd(1080px)
    // padding-top: 50px
    .menu
      padding: 1rem 0rem
      figure.logo
        width: 160px
      .page-box
        .page-link
          margin: 0 .3rem
          font-size: 0.7em
      .social-box
        figure.icon
          width: 20px
          margin: 0 5px
    .copyright
      padding: .8rem
  +rwd(768px)
    // padding-top: 50px
    .menu
      display: none
    .copyright
      padding: .8rem
      display: block
      text-align: center
      p
        font-size: 0.75rem
        color: $gray-005
</style>
