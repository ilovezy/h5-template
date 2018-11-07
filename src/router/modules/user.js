let user = [
  {
    path: '/login',
    name: 'login',// 协议
    meta: {
      title: '登录',
      // requireAuth: true
    },
    component: resolve => require(['@/views/user/login/login.vue'], resolve)
  }, {
    path: '/register',
    name: 'register',// 协议
    meta: {
      title: '注册',
      // requireAuth: true
    },
    component: resolve => require(['@/views/user/register/register.vue'], resolve)
  },
]
export default user
