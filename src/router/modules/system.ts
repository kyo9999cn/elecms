import { BasicLayout } from '@/layout'

export default [
  {
    path: '/system',
    component: BasicLayout,
    name: 'System',
    meta: {
      label: 'menu.system.main',
      title: '系统设置',
      icon: 'settings'
    },
    children: [
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/system/settings.vue'),
        meta: {
          label: 'menu.system.settings',
          title: '基本设置'
        }
      },
      {
        path: 'permiss',
        name: 'Permiss',
        meta: {
          label: 'menu.system.permiss.main',
          title: '权限管理'
        },
        children: [
          {
            path: 'roles',
            name: 'PermissRoles',
            component: () => import('@/views/system/permiss/roles.vue'),
            meta: {
              label: 'menu.system.permiss.roles',
              title: '角色管理'
            }
          },
          {
            path: 'rules',
            name: 'PermissRules',
            component: () => import('@/views/system/permiss/rules.vue'),
            meta: {
              label: 'menu.system.permiss.rules',
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
          label: 'menu.system.users',
          title: '用户管理'
        }
      },
      {
        path: 'develop',
        name: 'Develop',
        meta: {
          label: 'menu.system.develop.main',
          title: '系统开发'
        },
        children: [
          {
            path: 'entries',
            name: 'DevelopEntries',
            meta: {
              label: 'menu.system.develop.entries',
              title: '设置项'
            },
            children: [
              {
                path: '',
                name: 'DevelopEntriesMain',
                component: () => import('@/views/system/develop/entries.vue'),
                meta: {
                  label: 'menu.system.develop.entries',
                  title: '设置项'
                }
              },
              {
                path: 'fields/:id',
                name: 'DevelopEntryFields',
                meta: {
                  label: 'menu.system.develop.entryFields',
                  title: '设置项字段'
                },
                component: () =>
                  import('@/views/system/develop/entriesFields.vue')
              }
            ]
          },
          {
            path: 'models',
            name: 'DevelopModels',
            meta: {
              label: 'menu.system.develop.models',
              title: '模型管理'
            },
            children: [
              {
                path: '',
                name: 'DevelopModelsMain',
                component: () => import('@/views/system/develop/models.vue'),
                meta: {
                  label: 'menu.system.develop.models',
                  title: '模型管理'
                }
              },
              {
                path: 'fields/:id',
                name: 'DevelopModelsFields',
                meta: {
                  label: 'menu.system.develop.modelFields',
                  title: '模型字段'
                },
                component: () =>
                  import('@/views/system/develop/modelsFields.vue')
              }
            ]
          },
          {
            path: 'menus',
            name: 'DevelopMenus',
            component: () => import('@/views/system/develop/menus.vue'),
            meta: {
              label: 'menu.system.develop.menus',
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
          label: 'menu.system.logs',
          title: '系统日志'
        }
      }
    ]
  }
]
