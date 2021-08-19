<template lang="pug">
article.home
  BannerSwiper(
    :pictureLink="bannerLink"
  )
</template>

<script>
import BannerSwiper from "@/components/BannerSwiper.vue";

export default {
  name: 'Home',
  components: {
    BannerSwiper,
  },
  data() {
    return {
      bannerLink: [
        {
          1: "bg.jpg",
          2: "bg2.jpg",
        },
      ],
    }
  },
}
</script>
