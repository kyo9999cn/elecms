export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      label: 'login',
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  }
]
