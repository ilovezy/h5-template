let list = [
  {
    path: '/list',
    name: 'list',// 协议
    meta: {
      title: '列表页面',
      // requireAuth: true
    },
    component: resolve => require(['@/views/list/index.vue'], resolve)
  },
]
export default list
