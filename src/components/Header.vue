<template lang="pug">
header
  figure.logo
    img(src="@/assets/images/logo.png")
  .menu
    .lang En
    .lang Ch
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
    .ham
    .sub-menu
      .lang-box
        .lang En
        .lang Ch
      .close
      router-link.page-link(:to="{name:'About'}") 關於藝術家
      router-link.page-link(:to="{name:'About'}") 最新消息
      router-link.page-link(:to="{name:'About'}") 作品導覽
      router-link.page-link(:to="{name:'About'}") 聯絡資訊
      router-link.page-link(:to="{name:'About'}") 線上課程
      .social-box
        figure.icon
          img(src="@/assets/images/fb-icon.png")
        figure.icon
          img(src="@/assets/images/ig-icon.png")
        figure.icon
          img(src="@/assets/images/yt-icon.png")
        figure.icon
          img(src="@/assets/images/telegram-icon.png")
      .login 登入

</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

header
  width: 100%
  padding: 40px 50px
  box-sizing: border-box
  display: flex
  justify-content: space-between
  position: fixed
  top: 0
  left: 0
  z-index: 100
  figure.logo
    width: 400px
  .menu
    display: flex
    align-items: center
    position: relative
    .lang
      margin: 0 10px
      font-size: 1rem
      color: #fff
      cursor: pointer
    figure.icon
      width: 35px
      margin: 0 10px
      cursor: pointer
    .ham
      width: 36px
      height: 25px
      margin-left: 40px
      background-image: linear-gradient($gray-001 0%,$gray-001 calc(0% + 4px),transparent calc(0% + 4px),transparent calc(50% - 2px),$gray-001 calc(50% - 2px),$gray-001 calc(50% + 2px),transparent calc(50% + 2px),transparent calc(100% - 4px),$gray-001 calc(100% - 4px),$gray-001 100%)
      opacity: .6
      cursor: pointer
    .sub-menu
      display: none
      padding: 50px 70px
      border-radius: 1rem
      background-color: rgba($gray-002,.75)
      box-shadow: 5px 5px 10px rgba(#494949,.75%)
      text-align: center
      position: absolute
      right: 0
      bottom: -35px
      transform: translateY(100%)
      .page-link
        display: block
        margin: 20px 0
        font-size: 1rem
        letter-spacing: 2px
        color: $gray-003
      .lang-box
        display: none
      .close
        display: none
      .social-box
        display: none
      .login
        display: none
  +rwd(768px)
    // padding: 40px 50px
    figure.logo
      width: 50vw
      // width: 400px
    .menu
      .lang
        display: none
      figure.icon
        display: none
      .ham
        width: 36px
        height: 25px
        margin-left: 40px
        background-image: linear-gradient($gray-001 0%,$gray-001 calc(0% + 4px),transparent calc(0% + 4px),transparent calc(50% - 2px),$gray-001 calc(50% - 2px),$gray-001 calc(50% + 2px),transparent calc(50% + 2px),transparent calc(100% - 4px),$gray-001 calc(100% - 4px),$gray-001 100%)
        opacity: .6
        cursor: pointer
      .sub-menu
        padding: 50px 70px
        border-radius: 1rem
        background-color: rgba($gray-002,.75)
        box-shadow: 5px 5px 10px rgba(#494949,.75%)
        text-align: center
        position: absolute
        right: 0
        bottom: -35px
        transform: translateY(100%)
        .page-link
          display: block
          margin: 20px 0
          font-size: 1rem
          letter-spacing: 2px
          color: $gray-003
        .lang-box
          display: block
          position: absolute
          top: 15px
          left: 10px
          .lang
            margin: 0 5px
            font-size: 1rem
            +dib
        .close
          display: block
          width: 30px
          height: 30px
          transform: rotate(-45deg)
          position: absolute
          top: 15px
          right: 15px
          &:before,&:after
            content: ''
            display: block
            background-color: #000
            +pstc0
          &:before
            width: 100%
            height: 2px
          &:after
            width: 2px
            height: 100%
        .social-box
          display: block
          figure.icon
            width: 30px
            margin: 0 5px
            +dib
        .login
          display: block
          width: 200px
          margin-top: 30px
          font-size: 1rem
          line-height: 3rem
          color: #fff
          background-color: #000
          border-radius: 1.5rem
</style>
