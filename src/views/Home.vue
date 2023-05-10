<template lang="pug">
article.home(v-if="!isLoading")
  BannerSwiper(
    :pictureLink="home.banner"
  )
</template>

<script>
import { mapState, mapActions } from "vuex";

import BannerSwiper from "@/components/BannerSwiper.vue";

export default {
  name: "Home",
  components: {
    BannerSwiper
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading", "home"])
  },
  created() {
    this.getBannerList();
  },
  methods: {
    ...mapActions(["getBanner"]),
    getBannerList() {
      this.getBanner({})
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          console.log("fail");
        });
    }
  }
};
</script>
