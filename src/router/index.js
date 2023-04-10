import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "HomeLayout" },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: { layout: "DefaultLayout", title: "關於" },
    component: () => import("@/views/About.vue")
  },
  {
    path: "/news",
    name: "News",
    meta: { layout: "DefaultLayout" },
    component: () => import("@/views/News.vue")
  },
  {
    path: "/news/:id",
    name: "NewsInfo",
    meta: { layout: "DefaultLayout" },
    component: () => import("@/views/NewsInfo.vue")
  },
  {
    path: "/works",
    name: "Works",
    meta: { layout: "DefaultLayout" },
    component: () => import("@/views/Works.vue")
  },
  {
    path: "/course",
    name: "Course",
    meta: { layout: "DefaultLayout" },
    component: () => import("@/views/Course.vue")
  },
  {
    path: "/course/:id",
    name: "CourseInfo",
    meta: { layout: "DefaultLayout" },
    component: () => import("@/views/CourseInfo.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { layout: "DefaultLayout" },
    component: () => import("@/views/Contact.vue")
  },
  {
    path: "/member",
    name: "MemberLayout",
    component: () => import("@/views/member/Member.vue"),
    redirect: "/member/info",
    children: [
      {
        path: "signup",
        name: "Signup",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/Signup.vue")
      },
      {
        path: "validation",
        name: "Validation",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/Validation.vue")
      },
      {
        path: "info",
        name: "Member",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/MemberInfo.vue")
      },
      {
        path: "signin",
        name: "Signin",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/Signin.vue")
      },
      {
        path: "forgetPassword",
        name: "ForgetPassword",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/ForgetPassword.vue")
      },
      {
        path: "passwordEdit",
        name: "PasswordEdit",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/PasswordEdit.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
