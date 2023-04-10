<template lang="pug">
.search-box-wrapper
  .search-box
    input(type="text" v-model="txt")
    figure.search-icon(
      @click="$emit('searchHandler',txt)"
    )
      img(src="@/assets/images/search-icon.png")
</template>

<script>
// import {
//   mapState
// } from "vuex";
export default {
  name: "SearchBox",
  components: {},
  props: {
    searchTxt: String,
  },
  data() {
    return { txt: "" };
  },
  watch: {
    searchTxt(val) {
      this.txt = val;
    },
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.search-box-wrapper
  width: 100%
  .search-box
    width: 350px
    margin-left: auto
    margin-bottom: 2rem
    border: 1px solid $gray-004
    border-radius: 25px
    box-sizing: border-box
    overflow: hidden
    input[type="text"]
      width: calc( 100% - 48px )
      padding: 0 25px
      font-size: 1rem
      color: #fff
      border: none
      background-color: transparent
      box-sizing: border-box
      +dib
      &:focus
        outline: none
    .search-icon
      width: 28px
      padding: 10px
      background-color: $gray-004
      cursor: pointer
      +dib
  +rwd(768px)
    .search-box
      width: 50vw
      margin: auto
      margin-bottom: 2rem
      input[type="text"]
        width: calc( 100% - 32px )
      .search-icon
        width: 20px
        padding: 6px
        background-color: $gray-004
        cursor: pointer
</style>
