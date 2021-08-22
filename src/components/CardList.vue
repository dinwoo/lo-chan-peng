<template lang="pug">
.card-list-wrapper
  router-link.news-item(
    v-for="card in cardData" :key="card.id"
    :to="{name:card.routeName,params:{id:card.id}}"
  )
    .date {{card.date}}
    .news-pic(style="")
    .news-title {{card.title}}
    .news-content {{card.content}}

</template>

<script>
// import {
//   mapState
// } from "vuex";
export default {
  name:"CardList",
  components: {
  },
  props: ["cardData"],
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

.card-list-wrapper
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  .news-item
    width: 46%
    margin-bottom: 2rem
    display: block
    .date
      margin-bottom: 1rem
      font-size: 1.4rem
      color: $gray-004
    .news-pic
      background-image: url('../assets/images/news-example.jpg')
      width: 100%
      padding-bottom: 63.701923%
      border-radius: 10px
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
    .news-title
      margin: 1.2rem 0
      font-size: 1.4rem
      color: $gray-004
    .news-content
      font-size: 1rem
      line-height: 1.5
      color: $gray-005
  +rwd(768px)
    .news-item
      width: 100%
      .date
      .news-pic
      .news-title
      .news-content
</style>
