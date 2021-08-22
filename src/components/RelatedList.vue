<template lang="pug">
.related-list-wrapper
  router-link.related-item(
    v-for="item in relatedListData" :key="item.id"
    :to="{name:item.routeName,params:{id:item.id}}"
  )
    .related-pic(style="")
    .related-title {{item.title}}

</template>

<script>
// import {
//   mapState
// } from "vuex";

export default {
  name:"RelatedList",
  components: {
  },
  props: ["relatedListData"],
  data() {
    return {
    };
  },
  watch: {
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.related-list-wrapper
  display: flex
  justify-content: space-between
  .related-item
    width: 24%
    .related-pic
      background-image: url('../assets/images/news-example.jpg')
      width: 100%
      padding-bottom: 63.701923%
      border-radius: 10px
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
    .related-title
      margin-top: 1rem
      font-size: 1rem
      color: $gray-005
  +rwd(768px)
    .related-item
      width: 47%
      display: none
      &:nth-child(1),&:nth-child(2)
        display: block
</style>
