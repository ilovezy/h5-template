let gridList = [
  {
    path: '/gridList',
    name: 'gridList',// 协议
    meta: {
      title: '网格',
      // requireAuth: true
    },
    component: resolve => require(['@/views/gridList/index.vue'], resolve)
  },
]
export default gridList
