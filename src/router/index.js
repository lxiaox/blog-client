import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Register from '@/pages/Register/template.vue'
import Create from '@/pages/Create/template.vue'
import Edit from '@/pages/Edit/template.vue'
import My from '@/pages/My/template.vue'
import User from '@/pages/User/template.vue'
import Detail from '@/pages/Detail/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Index',
      component: Index
    }, {
      path: '/my',
      component: My
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/register',
      component: Register
    }, {
      path: '/create',
      component: Create
    }, {
      path: '/edit',
      component: Edit
    }, {
      path: '/user',
      component: User
    }, {
      path: '/detail',
      component: Detail
    }
  ]
})
