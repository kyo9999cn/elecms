const BasicLayout = () => import('@/layout/BasicLayout.vue')

export default [
  {
    path: '/system',
    component: BasicLayout,
    name: 'System',
    meta: {
      title: '系统设置',
      icon: 'settings'
    },
    children: [
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/system/settings.vue'),
        meta: {
          title: '基本设置'
        }
      },
      {
        path: 'permiss',
        name: 'Permiss',
        meta: {
          title: '角色权限'
        },
        children: [
          {
            path: 'roles',
            name: 'PermissRoles',
            component: () => import('@/views/system/permiss/roles.vue'),
            meta: {
              title: '角色管理'
            }
          },
          {
            path: 'rules',
            name: 'PermissRules',
            component: () => import('@/views/system/permiss/rules.vue'),
            meta: {
              title: '权限规则'
            }
          }
        ]
      },
      {
        path: 'users',
        name: 'SystemUsers',
        component: () => import('@/views/system/users.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'develop',
        name: 'Develop',
        meta: {
          title: '系统开发'
        },
        children: [
          {
            path: 'settings',
            name: 'DevelopSettings',
            component: () => import('@/views/system/develop/settings.vue'),
            meta: {
              title: '配置项'
            }
          },
          {
            path: 'models',
            name: 'DevelopModels',
            component: () => import('@/views/system/develop/models.vue'),
            meta: {
              title: '模型管理'
            }
          },
          {
            path: 'menus',
            name: 'DevelopMenus',
            component: () => import('@/views/system/develop/menus.vue'),
            meta: {
              title: '系统菜单'
            }
          }
        ]
      },
      {
        path: 'logs',
        name: 'SystemLogs',
        component: () => import('@/views/system/logs.vue'),
        meta: {
          title: '系统日志'
        }
      }
    ]
  }
]
