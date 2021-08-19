<template lang="pug">
#app
  Header
  router-view
  Footer
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.$store.commit("setScreenWidth", window.screenWidth);
        // that.screenWidth = window.screenWidth;
      })();
    };
  },
  methods: {
    // 儲存切換的語系
    setLang(value) {
      this.$store.commit("setLang", value);
      this.$i18n.locale = value;
      localStorage.setItem("footmark-lang", value);
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"
@font-face
  font-family: 'Axininca'
  src: url("assets/fonts/Axininca-Ft-SILDoulos-Italic.ttf") format("truetype")

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600&display=swap');
  
// @font-face
//   font-family: 'SourceHanSerif'
//   src: url("assets/fonts/SourceHanSerif-Regular.ttc") format("truetype")


*
  padding: 0
  margin: 0
  font-family: Axininca,'Noto Serif TC', serif

img
	width: 100%
	vertical-align: top

a
	color: #000
	text-decoration: none

html
  width: 100%
  padding: 0 50px
  font-size: 20px
  background-color: #000
  box-sizing: border-box
  +rwd(768px)
    padding: 0 2rem
</style>
