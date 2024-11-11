export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      label: 'login',
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/passwd',
    name: 'passwd',
    meta: {
      label: 'getPasswd',
      title: '找回密码'
    },
    component: () => import('@/views/login/passwd.vue')
  }
]
