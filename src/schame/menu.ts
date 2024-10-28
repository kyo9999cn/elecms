export default [
  {
    label: '工作台',
    name: 'Dashboard',
    icon: 'speed-up',
    path: '/dashboard'
  },
  {
    label: '系统设置',
    name: 'System',
    icon: 'settings',
    path: '/system',
    children: [
      {
        label: '基本设置',
        name: 'Settings',
        path: '/system/settings'
      },
      {
        label: '权限管理',
        name: 'Permiss',
        path: '/system/permiss',
        children: [
          {
            label: '角色管理',
            name: 'PermissRoles',
            path: '/system/permiss/roles'
          },
          {
            label: '权限规则',
            name: 'PermissRules',
            path: '/system/permiss/rules'
          }
        ]
      },
      {
        label: '用户管理',
        name: 'SystemUsers',
        path: '/system/users'
      },
      {
        label: '系统开发',
        name: 'Develop',
        path: '/system/develop',
        children: [
          {
            label: '设置项',
            name: 'DevelopSettings',
            path: '/system/develop/settings'
          },
          {
            label: '模型管理',
            name: 'DevelopModels',
            path: '/system/develop/models'
          },
          {
            label: '系统菜单',
            name: 'DevelopMenus',
            path: '/system/develop/menus'
          }
        ]
      },
      {
        label: '系统日志',
        name: 'SystemLogs',
        path: '/system/logs'
      }
    ]
  }
]
