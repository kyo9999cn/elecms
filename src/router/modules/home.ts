import BasicLayout from '@/layout/BasicLayout.vue'

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: BasicLayout,
    children: [
      {
        path: '',
        name: 'DashboardIndex',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
]
