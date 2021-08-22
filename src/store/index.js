import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: null, // 存放使用者選用的語系
    screenWidth: document.body.clientWidth
  },
  mutations: {
    // 切換語系設定
    setLang(state, value) {
      state.lang = value;
    },
    setScreenWidth(state, value) {
      state.screenWidth = value;
    }
  },
  actions: {},
  modules: {}
});
