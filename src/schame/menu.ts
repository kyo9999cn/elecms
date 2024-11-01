export default [
  {
    label: 'menu.dashboard',
    name: 'Dashboard',
    title: '工作台',
    icon: 'speed-up',
    path: '/dashboard'
  },
  {
    label: 'menu.system.main',
    name: 'System',
    title: '系统设置',
    icon: 'settings',
    path: '/system',
    children: [
      {
        label: 'menu.system.settings',
        name: 'Settings',
        title: '基本设置',
        path: '/system/settings'
      },
      {
        label: 'menu.system.permiss.main',
        name: 'Permiss',
        title: '权限设置',
        path: '/system/permiss',
        children: [
          {
            label: 'menu.system.permiss.roles',
            name: 'PermissRoles',
            title: '角色管理',
            path: '/system/permiss/roles'
          },
          {
            label: 'menu.system.permiss.rules',
            name: 'PermissRules',
            title: '权限规则',
            path: '/system/permiss/rules'
          }
        ]
      },
      {
        label: 'menu.system.users',
        name: 'SystemUsers',
        title: '用户管理',
        path: '/system/users'
      },
      {
        label: 'menu.system.develop.main',
        name: 'Develop',
        title: '系统开发',
        path: '/system/develop',
        children: [
          {
            label: 'menu.system.develop.entry',
            name: 'DevelopEntry',
            title: '设置项',
            path: '/system/develop/entry'
          },
          {
            label: 'menu.system.develop.models',
            name: 'DevelopModels',
            title: '模型管理',
            path: '/system/develop/models'
          },
          {
            label: 'menu.system.develop.menus',
            name: 'DevelopMenus',
            title: '系统菜单',
            path: '/system/develop/menus'
          }
        ]
      },
      {
        label: 'menu.system.logs',
        name: 'SystemLogs',
        title: '系统日志',
        path: '/system/logs'
      }
    ]
  }
]
