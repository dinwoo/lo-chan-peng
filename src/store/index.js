import ApiService from "@/common/api.service"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: null, // 存放使用者選用的語系
    screenWidth: document.body.clientWidth,
    home: {
      banner: {}
    }
  },
  mutations: {
    // 切換語系設定
    setLang(state, value) {
      state.lang = value
    },
    setScreenWidth(state, value) {
      state.screenWidth = value
    },
    SET_BANNER(state, data) {
      state.home.banner = data
    }
  },
  actions: {
    getBanner(context) {
      return new Promise((resolve, reject) => {
        ApiService.get("/index/banners", "", {})
          .then(({ data }) => {
            if (data.code == 200) {
              console.log(data)
              context.commit("SET_BANNER", data.data)
            }
            resolve()
          })
          .catch(({ response }) => {
            console.log(response)
            reject()
          })
      })
    }
  },
  modules: {}
})
