import ApiService from "@/common/api.service";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    lang: null, // 存放使用者選用的語系
    screenWidth: document.body.clientWidth,
    home: {
      banner: {
        pc: [],
        mobile: []
      }
    },
    about: {},
    news: {
      list: [],
      detail: {}
    },
    work: {
      years: [],
      list: []
    },
    course: {
      list: [],
      detail: {}
    },
    member: {}
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
    SET_ABOUT(state, data) {
      state.about = data;
    },
    SET_NEWS_LIST(state, data) {
      state.news.list = data.news;
      state.news.allPage = data.allPage;
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
      state.work.allPage = data.allPage;
      state.work.currentPage = data.currentPage;
      state.work.amount = data.amount;
    },
    SET_COURSE_LIST(state, data) {
      state.course.list = data.courses;
      state.course.allPage = data.allPage;
      state.course.currentPage = data.currentPage;
      state.course.amount = data.amount;
    },
    SET_COURSE_DETAIL(state, data) {
      state.course.detail = data;
    },
    SET_MEMBER_INFO(state, data) {
      state.member = data;
    }
  },
  actions: {
    getBanner(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("api/index/banners", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_BANNER", data.data);
              resolve();
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getAbout(context, lang) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("api/about?l=" + lang, "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_ABOUT", JSON.parse(data.data));
              resolve();
            } else {
              alert(data.msg);
            }
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
        ApiService.post("api/news/list", {
          select,
          pageSize,
          currentPage,
          channel
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_NEWS_LIST", data.data);
              resolve();
            } else {
              alert(data.msg);
            }
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
        ApiService.post("api/news/detail", { id, channel })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_NEWS_DETAIL", data.data);
              resolve();
            } else {
              alert(data.msg);
            }
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
        ApiService.get("api/work/years", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_WORK_YEARS", data.data);
              resolve();
            } else {
              alert(data.msg);
            }
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
        ApiService.post("api/work/list", {
          year,
          select,
          pageSize,
          currentPage,
          channel
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_WORK_LIST", data.data);
              resolve();
            } else {
              alert(data.msg);
            }
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
        ApiService.post("api/contact/send", {
          name,
          phone,
          email,
          content
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve();
            } else {
              alert(data.msg);
            }
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
        ApiService.post("api/course/list", {
          select,
          pageSize,
          currentPage,
          channel
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_COURSE_LIST", data.data);
              resolve();
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getCourseDetail(context, data) {
      const { id, channel } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/course/detail", { id, channel })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_COURSE_DETAIL", data.data);
              resolve();
            } else {
              alert(data.msg);
            }
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
      const { name, account, password, confirmPassword, email, type } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/signup", {
          name,
          account,
          password,
          confirmPassword,
          email,
          type
        })
          .then(({ data }) => {
            console.log(data);
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve();
            } else {
              alert(data.msg);
            }
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
        ApiService.post("api/member/validation", {
          token
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve();
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getMemberInfo(context, account) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/info", { account })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_MEMBER_INFO", data.data);
              resolve(data);
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    putMemberInfo(context, data) {
      const { token, name } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/edit", {
          token,
          name
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve();
            } else {
              alert(data.msg);
            }
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
        ApiService.post("api/member/signin", {
          account,
          password
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve(data);
            } else {
              alert(data.msg);
            }
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
        ApiService.post("api/member/password/trigger", {
          account
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve();
            } else {
              alert(data.msg);
            }
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
        ApiService.post("api/member/password/edit", {
          token,
          password,
          confirmPassword
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve();
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    }
  },
  modules: {}
});
