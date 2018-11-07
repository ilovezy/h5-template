let account = [
  {
    path: '/account',
    name: 'account',// 协议
    meta: {
      title: '账户中心',
      // requireAuth: true
    },
    component: resolve => require(['@/views/account/index.vue'], resolve)
  },
]
export default account
