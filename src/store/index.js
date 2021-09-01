import ApiService from "@/common/api.service";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    lang: null, // 存放使用者選用的語系
    screenWidth: document.body.clientWidth,
    home: {
      banner: {},
    },
    news: {
      list: [],
      detail: {},
    },
    work: {
      years: [],
      list: [],
    },
    course: {
      list: [],
      detail: {},
    },
    member: {},
  },
  mutations: {
    // 切換語系設定
    SET_LANG(state, value) {
      state.lang = value;
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    SET_SCREEN_WIDTH(state, value) {
      state.screenWidth = value;
    },
    SET_BANNER(state, data) {
      state.home.banner = data;
    },
    SET_NEWS_LIST(state, data) {
      state.news.list = data.news;
      state.news.allPages = data.allPages;
      state.news.currentPage = data.currentPage;
      state.news.amount = data.amount;
    },
    SET_NEWS_DETAIL(state, data) {
      state.news.detail = data;
    },
    SET_WORK_YEARS(state, data) {
      state.work.years = data.years;
    },
    SET_WORK_LIST(state, data) {
      state.work.list = data.works;
      state.work.allPages = data.allPages;
      state.work.currentPage = data.currentPage;
      state.work.amount = data.amount;
    },
    SET_COURSE_LIST(state, data) {
      state.course.list = data.courses;
      state.course.allPages = data.allPages;
      state.course.currentPage = data.currentPage;
      state.course.amount = data.amount;
    },
    SET_COURSE_DETAIL(state, data) {
      state.course.detail = data;
    },
    SET_MEMBER_INFO(state, data) {
      state.member = data;
    },
  },
  actions: {
    getBanner(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("/index/banners", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_BANNER", data.data);
            }
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getNewsListApi(context, data) {
      console.log(data);
      const { select, pageSize, currentPage, channel } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/news/list", {
          select,
          pageSize,
          currentPage,
          channel,
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_NEWS_LIST", data.data);
            }
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getNewsDetail(context, data) {
      const { id, channel } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/news/detail", { id, channel })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_NEWS_DETAIL", data.data);
            }
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getWorkYears(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("/work/years", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_WORK_YEARS", data.data);
            }
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getWorkListApi(context, data) {
      console.log(data);
      const { year, select, pageSize, currentPage, channel } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/work/list", {
          year,
          select,
          pageSize,
          currentPage,
          channel,
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_WORK_LIST", data.data);
            }
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    postEmail(context, data) {
      const { name, phone, email, content } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/contact/send", {
          name,
          phone,
          email,
          content,
        })
          .then(() => {
            context.commit("SET_LOADING", false);
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getCourseListApi(context, data) {
      console.log(data);
      const { select, pageSize, currentPage, channel } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/course/list", {
          select,
          pageSize,
          currentPage,
          channel,
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_COURSE_LIST", data.data);
            }
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getCourseDetail(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/course/detail", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_COURSE_DETAIL", data.data);
            }
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    // member
    postSignup(context, data) {
      const {
        name,
        birthday,
        account,
        password,
        confirmPassword,
        email,
      } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/member/signup", {
          name,
          birthday,
          account,
          password,
          confirmPassword,
          email,
        })
          .then(() => {
            context.commit("SET_LOADING", false);
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    postValidation(context, token) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/member/validation", {
          token,
        })
          .then(() => {
            context.commit("SET_LOADING", false);
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getMemberInfo(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("/member/info", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_MEMBER_INFO", data.data);
            }
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    putMemberInfo(context, data) {
      const { name, birthday } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.put("/member/edit", {
          name,
          birthday,
        })
          .then(() => {
            context.commit("SET_LOADING", false);
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    postSignin(context, data) {
      const { account, password } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/member/signin", {
          account,
          password,
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            resolve(data);
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    postPasswordToken(context, account) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("/member/password/trigger", {
          account,
        })
          .then(() => {
            context.commit("SET_LOADING", false);
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    putPasswordInfo(context, data) {
      const { token, password, confirmPassword } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.put("/member/password/trigger", {
          token,
          password,
          confirmPassword,
        })
          .then(() => {
            context.commit("SET_LOADING", false);
            resolve();
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
  },
  modules: {},
});