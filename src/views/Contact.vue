<template lang="pug">
article.contact-info
  section.banner
    figure.contact-icon
      img(src="@/assets/images/contact-icon.png")


</template>

<script>
import {
  mapState
} from "vuex";

export default {
  name: 'Contact',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["screenWidth"]),
  },
  mounted() {
    this.$nextTick(()=>{
    })
  },
  methods: {
  },
  watch: {
  },
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.contact-info
  section.banner
    padding: 150px 0
    .contact-icon
      width: 465px
      margin: auto
</style>