<template lang="pug">
article.news
  section.banner
    figure.news-icon
      img(src="@/assets/images/news-icon.png")
  section.main
    SearchBox
    CardList(:cardData="newsListData")
</template>

<script>
import {
  mapState
} from "vuex";
import CardList from "@/components/CardList"
import SearchBox from "@/components/SearchBox"

export default {
  name: 'News',
  components: {
    CardList,
    SearchBox
  },
  data() {
    return {
      newsListData:[
        {
          id:1,
          routeName: 'NewsInfo',
          date:'01 Jul 2021',
          title:'唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出',
          content: '早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。'
        },
        {
          id:2,
          routeName: 'NewsInfo',
          date:'02 Jul 2021',
          title:'唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出',
          content: '早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。'
        },
        {
          id:3,
          routeName: 'NewsInfo',
          date:'03 Jul 2021',
          title:'唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出',
          content: '早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。'
        },
      ]
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

article.news
  section.banner
    padding: 150px 0
    .news-icon
      width: 275px
      margin: auto
  +rwd(768px)
    section.banner
      padding: 15vw 0
      .news-icon
        width: 25vw
</style>