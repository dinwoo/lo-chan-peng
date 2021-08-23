import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{layout:'HomeLayout'},
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta:{layout:'DefaultLayout'},
    component: () => import('@/views/About.vue')
  },
  {
    path: '/news',
    name: 'News',
    meta:{layout:'DefaultLayout'},
    component: () => import('@/views/News.vue'),
  },
  {
    path: '/news/:id',
    name: 'NewsInfo',
    meta:{layout:'DefaultLayout'},
    component: () => import('@/views/NewsInfo.vue'),
  },
  {
    path: '/works',
    name: 'Works',
    meta:{layout:'DefaultLayout'},
    component: () => import('@/views/Works.vue'),
  },
  {
    path: '/course',
    name: 'Course',
    meta:{layout:'DefaultLayout'},
    component: () => import('@/views/Course.vue'),
  },
  {
    path: '/course/:id',
    name: 'CourseInfo',
    meta:{layout:'DefaultLayout'},
    component: () => import('@/views/CourseInfo.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    meta:{layout:'DefaultLayout'},
    component: () => import('@/views/Contact.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router

