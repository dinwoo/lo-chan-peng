<template lang="pug">
header
  router-link.page-link(:to="{name:'Home'}")
    figure.logo
      img(src="@/assets/images/logo.png")
  .menu
    .lang(@click="setLang('en')" :class="{'active':lang=='en'}") En
    .lang(@click="setLang('ch')" :class="{'active':lang=='ch'}") Ch
    a(href="https://www.facebook.com/lo.c.peng" target="_blank")
      figure.icon
        img(src="@/assets/images/fb-icon.png")
    a(href="https://www.instagram.com/lochanpeng/" target="_blank")
      figure.icon
        img(src="@/assets/images/ig-icon.png")
    a(href="https://www.youtube.com/user/Lochanpeng/featured" target="_blank")
      figure.icon
        img(src="@/assets/images/yt-icon.png")
    a(href="https://t.me/lochanpeng2022" target="_blank")
      figure.icon
        img(src="@/assets/images/telegram-icon.png")
    figure.icon(@click="goMember()")
      img(src="@/assets/images/member-icon.png")
    .ham(v-if="isMobile" @click="showMenu=!showMenu")
    .ham(v-else @mouseenter="showMenu=true" @mouseleave="showMenu=false")
    .sub-menu(v-if="showMenu" @mouseenter="showMenu=true" @mouseleave="showMenu=false")
      .menu-box
        .lang-box
          .lang(@click="setLang('en')" :class="{'active':lang=='en'}") En
          .lang(@click="setLang('ch')" :class="{'active':lang=='ch'}") Ch
        .close(@click="showMenu=false")
        router-link.page-link(:to="{name:'About'}") {{$t(`Menu.about`)}}
        router-link.page-link(:to="{name:'News'}") {{$t(`Menu.news`)}}
        router-link.page-link(:to="{name:'Works'}") {{$t(`Menu.works`)}}
        router-link.page-link(:to="{name:'Contact'}") {{$t(`Menu.contact`)}}
        router-link.page-link(:to="{name:'Course'}") {{$t(`Menu.course`)}}
        .social-box
          a(href="https://www.facebook.com/lo.c.peng" target="_blank")
            figure.icon
              img(src="@/assets/images/fb-icon.png")
          a(href="https://www.instagram.com/lochanpeng/" target="_blank")
            figure.icon
              img(src="@/assets/images/ig-icon.png")
          a(href="https://www.youtube.com/user/Lochanpeng/featured" target="_blank")
            figure.icon
              img(src="@/assets/images/yt-icon.png")
          a(href="https://t.me/lochanpeng2022" target="_blank")
            figure.icon
              img(src="@/assets/images/telegram-icon.png")
        .login(@click="goMember()") {{$t(`Menu.login`)}}

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      isMobile: false,
      showMenu: false,
    };
  },
  computed: {
    ...mapState(["lang", "screenWidth"]),
  },
  mounted() {
    this.$nextTick(() => {
      this.isMobile = this.screenWidth < 768;
    });
  },
  methods: {
    // 儲存切換的語系
    setLang(value) {
      this.$store.commit("SET_LANG", value);
      this.$i18n.locale = value;
      localStorage.setItem("footmark-lang", value);
      this.$router.go(0);
    },
    goMember() {
      if (localStorage.getItem("account")) {
        if (this.$route.name == "Member") return;
        this.$router.push({ name: "Member" });
      } else {
        if (this.$route.name == "Signin") return;
        this.$router.push({ name: "Signin" });
      }
    },
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.isMobile = val < 768;
        this.timer = true;
        setTimeout(() => {
          // console.log(val);
          this.timer = false;
        }, 400);
      }
    },
  },
};
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
      color: $gray-005
      cursor: pointer
      &.active,&:hover
        color: $gray-004
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
      padding-top: 40px
      position: absolute
      right: 0px
      bottom: 5px
      transform: translateY(100%)
      .menu-box
        padding: 50px 70px
        border-radius: 1rem
        background-color: rgba($gray-002,.75)
        box-shadow: 5px 5px 10px rgba(#494949,.75%)
        text-align: center
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
  +rwd(960px)
    padding: 40px 20px
    figure.logo
      width: 300px
    .menu
      .ham
        margin-left: 20px
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
      .sub-menu
        .menu-box
          position: relative
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
          cursor: pointer
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
          cursor: pointer
</style>
