import { BasicLayout } from '@/layout'

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      label: 'menu.dashboard',
      title: '工作台'
    },
    component: BasicLayout,
    children: [
      {
        path: '',
        name: 'DashboardIndex',
        meta: {
          label: 'menu.dashboard',
          title: '工作台'
        },
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
]
