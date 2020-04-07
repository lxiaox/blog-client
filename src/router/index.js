import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('@/pages/Index/template.vue')
    }, {
      path: '/my',
      component: ()=>import('@/pages/my/template.vue'),
      meta: { requireAuth: true }
    }, {
      path: '/login',
      component: ()=>import('@/pages/login/template.vue')
    }, {
      path: '/register',
      component: ()=>import('@/pages/register/template.vue')
    }, {
      path: '/create',
      component: ()=>import('@/pages/create/template.vue'),
      meta: { requireAuth: true }
    }, {
      path: '/edit/:blogId',
      component: ()=>import('@/pages/edit/template.vue'),
      meta: { requireAuth: true }
    }, {
      path: '/user/:userId',
      component: ()=>import('@/pages/user/template.vue')
    }, {
      path: '/detail/:blogId',
      component: ()=>import('@/pages/detail/template.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.some(i => i.meta.requireAuth)) {
    store.dispatch('checkLogin').then((isLogin) => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})
export default router
