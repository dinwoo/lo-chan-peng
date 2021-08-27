<template lang="pug">
.button-wrapper
  .btn(
    :class="{'right':type == 'right'}"
    @click="$emit('click')"
  ) {{title}}

</template>

<script>
// import {
//   mapState
// } from "vuex";

export default {
  name: "Button",
  components: {},
  props: ["title", "type"],
  data() {
    return {}
  },
  watch: {},
  mounted() {},
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.button-wrapper
  .btn
    width: 300px
    margin: 3rem auto
    font-size: 1.4rem
    line-height: 4rem
    border-radius: 2rem
    color: $gray-001
    background-color: $gray-005
    text-align: center
    cursor: pointer
    &.right
      margin: 3rem 0
      margin-left: auto
    +rwd(768px)
      width: 180px
      margin: 2rem auto
      // font-size: 1.4rem
      line-height: 3rem
      border-radius: 1.5rem
</style>
