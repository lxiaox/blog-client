import Vue from "vue";
import Router from "vue-router";

import store from "../store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Index/template.vue")
    },
    {
      path: "/my",
      component: () => import("@/pages/my/template.vue"),
      meta: { requireAuth: true }
    },
    {
      path: "/login",
      component: () => import("@/pages/login/template.vue")
    },
    {
      path: "/register",
      component: () => import("@/pages/register/template.vue")
    },
    {
      path: "/create",
      component: () => import("@/pages/create/template.vue"),
      meta: { requireAuth: true }
    },
    {
      path: "/edit/:blogId",
      component: () => import("@/pages/edit/template.vue"),
      meta: { requireAuth: true }
    },
    {
      path: "/user/:userId",
      component: () => import("@/pages/user/template.vue")
    },
    {
      path: "/detail/:blogId",
      component: () => import("@/pages/detail/template.vue"),
      meta: { requireAuth: true }
    }
  ]
});
router.beforeEach((to, from, next) => {
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
    /**
     * 下面的方法中直接使用store.getters.isLogin判断存在问题：刷新页面时，已经登录的情况可能也会跳转至登录页
     * 这是因为store数据是保存在运行内存中的，当页面刷新时，会重新加载vue实例，store也会被重新初始化
     * 这时会在header中调用checklogin，异步检查isLogin赋值，所以又会跳转到登录页
     *
     * if (!store.getters.isLogin) { 
     * next({ path: "/login", query: { redirect: to.fullPath } })
     * }else{
     * next()
     * }
     */
  } else {
    next();
  }
});
export default router;
