<template lang="pug">
article.home
  BannerSwiper(
    :pictureLink="home.banner"
  )
</template>

<script>
import { mapState } from "vuex";

import BannerSwiper from "@/components/BannerSwiper.vue";

export default {
  name: "Home",
  components: {
    BannerSwiper,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["home"]),
  },
  created() {},
  methods: {},
};
</script>
