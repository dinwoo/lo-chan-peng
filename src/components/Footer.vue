<template lang="pug">
footer
  .menu
    figure.logo
      img(src="@/assets/images/logo-en.png")
    .page-box
      router-link.page-link(:to="{name:'About'}") 關於藝術家
      router-link.page-link(:to="{name:'News'}") 最新消息
      router-link.page-link(:to="{name:'Works'}") 作品導覽
      router-link.page-link(:to="{name:'Contact'}") 聯絡資訊
      router-link.page-link(:to="{name:'Course'}") 線上課程
    .social-box
      figure.icon
        img(src="@/assets/images/fb-icon.png")
      figure.icon
        img(src="@/assets/images/ig-icon.png")
      figure.icon
        img(src="@/assets/images/yt-icon.png")
      figure.icon
        img(src="@/assets/images/telegram-icon.png")
      figure.icon
        img(src="@/assets/images/member-icon.png")
  .copyright
    p Copyright © 2021  LO CHAN PENG All righta RENU
    p Just Design
</template>

<script>
export default {
  name: 'Footer',
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
      width: 330px
    .page-box
      .page-link
        margin: 0 1.6rem
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
