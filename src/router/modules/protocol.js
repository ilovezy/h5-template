let protocolRoute = [
  {
    path: '/protocol/register',
    name: 'registerProtocol',// 协议
    meta: {
      title: '注册协议',
      // requireAuth: true
    },
    component: resolve => require(['@/views/protocol/registerProtocol.vue'], resolve)
  },
  {
    path: '/protocol/borrow',
    name: 'borrowProtocol',// 协议
    meta: {
      title: '借款协议',
      // requireAuth: true
    },
    component: resolve => require(['@/views/protocol/borrowProtocol.vue'], resolve)
  },
]
export default protocolRoute
