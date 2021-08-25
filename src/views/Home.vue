<template lang="pug">
article.home
  BannerSwiper(
    v-if="showBanner"
    :pictureLink="home.banner"
  )
</template>

<script>
import { mapActions, mapState } from "vuex"

import BannerSwiper from "@/components/BannerSwiper.vue"

export default {
  name: "Home",
  components: {
    BannerSwiper
  },
  data() {
    return {
      showBanner: false
      // bannerLink: [
      //   {
      //     1: "bg.jpg",
      //     2: "bg2.jpg"
      //   },
      //   {
      //     1: "bg.jpg",
      //     2: "bg2.jpg"
      //   }
      // ]
    }
  },
  computed: {
    ...mapState(["home"])
  },
  created() {
    this.getBanner()
      .then(() => {
        console.log("success")
        this.showBanner = true
      })
      .catch(() => {
        console.log("fail")
      })
  },
  methods: {
    ...mapActions(["getBanner"])
  }
}
</script>
