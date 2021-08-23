<template lang="pug">
article.home
  BannerSwiper(
    :pictureLink="bannerLink"
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
      bannerLink: [
        {
          1: "bg.jpg",
          2: "bg2.jpg"
        },
        {
          1: "bg.jpg",
          2: "bg2.jpg"
        }
      ]
    }
  },
  computed: {
    ...mapState(["testData"])
  },
  created() {
    this.getTest(1)
      .then(() => {
        console.log("success")
      })
      .catch(() => {
        console.log("fail")
      })
  },
  methods: {
    ...mapActions({ getTest: "GET_TEST" })
  }
}
</script>
