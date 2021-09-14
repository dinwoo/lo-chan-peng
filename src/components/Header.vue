<template lang="pug">
header
  router-link.page-link(:to="{name:'Home'}")
    figure.logo
      img(src="@/assets/images/logo.png")
  .menu
    .lang(@click="setLang('en')" :class="{'active':lang=='en'}") En
    .lang(@click="setLang('ch')" :class="{'active':lang=='ch'}") Ch
    a(href="https://www.facebook.com/lo.c.peng" target="_blank")
      .svg_box
        include ../assets/pug/fb.pug
    a(href="https://www.instagram.com/lochanpeng/" target="_blank")
      .svg_box
        include ../assets/pug/ig.pug
    a(href="https://www.youtube.com/user/Lochanpeng/featured" target="_blank")
      .svg_box
        include ../assets/pug/yt.pug
    a(href="https://t.me/lochanpeng2022" target="_blank")
      .svg_box
        include ../assets/pug/telegram.pug
    .svg_box(@click="goMember()")
      include ../assets/pug/member.pug
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
        router-link.page-link(:to="{name:'Course'}") {{$t(`Menu.course`)}}
        .page-link(@click="goMember()" v-if="!isLogin") {{$t(`Menu.login`)}}
        router-link.page-link(:to="{name:'Contact'}") {{$t(`Menu.contact`)}}
        .social-box
          a(href="https://www.facebook.com/lo.c.peng" target="_blank")
            .svg_box
              include ../assets/pug/fb.pug
          a(href="https://www.instagram.com/lochanpeng/" target="_blank")
            .svg_box
              include ../assets/pug/ig.pug
          a(href="https://www.youtube.com/user/Lochanpeng/featured" target="_blank")
            .svg_box
              include ../assets/pug/yt.pug
          a(href="https://t.me/lochanpeng2022" target="_blank")
            .svg_box
              include ../assets/pug/telegram.pug
        //- .login(@click="goMember()") {{$t(`Menu.login`)}}

</template>

<script>
import { mapState } from "vuex";
import { gsap } from "gsap";

export default {
  name: "Header",
  data() {
    return {
      isMobile: false,
      showMenu: false,
      sceneArr: [],
    };
  },
  computed: {
    ...mapState(["lang", "screenWidth"]),
    isLogin() {
      return localStorage.getItem("token") ? true : false;
    },
  },
  beforeDestroy() {
    this.sceneArr.map((scene) => {
      this.$scrollmagic.removeScene(scene);
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.isMobile = this.screenWidth < 768;
      this.setAnimate();
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
      this.showMenu = false;
      if (localStorage.getItem("account")) {
        if (this.$route.name == "Member") return;
        this.$router.push({ name: "Member" });
      } else {
        if (this.$route.name == "Signin") return;
        this.$router.push({ name: "Signin" });
      }
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: "body",
          triggerHook: 0,
          offset: 120,
          reverse: true,
        })
        .on("enter", function() {
          gsap.to("header", {
            opacity: 0,
          });
        })
        .on("leave", function() {
          gsap.to("header", {
            opacity: 1,
          });
        });
      // .addIndicators({ name: "header" });

      this.sceneArr.forEach((scene) => {
        this.$scrollmagic.addScene(scene);
      });
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
    "$route.name": function(name) {
      this.showMenu = false;
      console.log(name);
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
      transition: .3s
      &.active,&:hover
        color: #fff
    .svg_box
      width: 35px
      margin: 0 10px
      cursor: pointer
      fill: $gray-004
      transition: .3s
      +hover
        fill: #fff
    .ham
      width: 36px
      height: 25px
      margin-left: 40px
      background-image: linear-gradient($gray-004 0%,$gray-004 calc(0% + 4px),transparent calc(0% + 4px),transparent calc(50% - 2px),$gray-004 calc(50% - 2px),$gray-004 calc(50% + 2px),transparent calc(50% + 2px),transparent calc(100% - 4px),$gray-004 calc(100% - 4px),$gray-004 100%)
      opacity: .6
      cursor: pointer
      transition: .3s
      +hover
        background-image: linear-gradient(#fff 0%,#fff calc(0% + 4px),transparent calc(0% + 4px),transparent calc(50% - 2px),#fff calc(50% - 2px),#fff calc(50% + 2px),transparent calc(50% + 2px),transparent calc(100% - 4px),#fff calc(100% - 4px),#fff 100%)
    .sub-menu
      padding-top: 40px
      position: absolute
      right: 0px
      bottom: 10px
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
        color: #595857
        cursor: pointer
        transition: .3s
        &:hover
          color: #000
        &.router-link-active
          color: #000
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
    padding: 20px 15px
    figure.logo
      width: 50vw
      // width: 400px
    .menu
      .lang
        display: none
      .svg_box
        display: none
      .ham
        width: 30px
        height: 20px
        background-image: linear-gradient($gray-004 0%,$gray-004 calc(0% + 2px),transparent calc(0% + 2px),transparent calc(50% - 2px),$gray-004 calc(50% - 1px),$gray-004 calc(50% + 1px),transparent calc(50% + 2px),transparent calc(100% - 2px),$gray-004 calc(100% - 2px),$gray-004 100%)
      .sub-menu
        .menu-box
          padding: 20px 30px
          background-color: rgba(#fff,.9)
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
          width: 140px
          .svg_box
            width: 25px
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
