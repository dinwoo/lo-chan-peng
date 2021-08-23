import ApiService from "@/common/api.service"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: null, // 存放使用者選用的語系
    screenWidth: document.body.clientWidth,
    testData: []
  },
  mutations: {
    // 切換語系設定
    setLang(state, value) {
      state.lang = value
    },
    setScreenWidth(state, value) {
      state.screenWidth = value
    },
    setTest(state, data) {
      state.testData = data
    }
  },
  actions: {
    GET_TEST(context, id) {
      console.log(id)
      return new Promise((resolve, reject) => {
        ApiService.get("/test", "", {
          id: id
        })
          .then(({ data }) => {
            if (data.success) {
              console.log(data)
              context.commit("setTest", data.data)
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
