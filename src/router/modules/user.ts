import { BasicLayout } from '@/layout'

export default [
  {
    path: '/user',
    name: 'User',
    meta: {
      label: 'user.center',
      title: '个人中心'
    },
    component: BasicLayout,
    children: [
      {
        path: 'profile',
        name: 'UserProfile',
        meta: {
          label: 'user.profile',
          title: '个人资料'
        },
        component: () => import('@/views/user/profile.vue')
      },
      {
        path: 'password',
        name: 'UserPassword',
        meta: {
          label: 'user.password',
          title: '修改密码'
        },
        component: () => import('@/views/user/password.vue')
      }
    ]
  }
]
