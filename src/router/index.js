import Vue from 'vue'
import Router from 'vue-router'
import account from './modules/account'
import list from './modules/list'
import gridList from './modules/gridList'
import user from './modules/user'
import protocolRoute from './modules/protocol'

Vue.use(Router)

let basicRoute = [
  {
    path: '/',
    name: 'home',//404错误
    meta: {
      title: '首页'
    },
    component: resolve => require(['@/views/index.vue'], resolve)
  },  {
    path: '*',
    name: '404',//404错误
    meta: {
      title: '404错误'
    },
    component: resolve => require(['@/views/error.vue'], resolve)
  }
]

export default new Router({
  // mode: 'history',
  routes: [
    ...basicRoute,
    ...protocolRoute,
    ...account,
    ...list,
    ...gridList,
    ...user,
  ]
})
