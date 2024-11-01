export default [
  {
    url: '/api/develop/menus/model',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          name: 'roles',
          columns: [
            {
              key: 'name',
              dataKey: 'name',
              title: '菜单名称',
              width: 260
            },
            {
              key: 'icon',
              dataKey: 'icon',
              title: '图标',
              align: 'center',
              width: 60,
              customRander: true
            },
            {
              key: 'memo',
              dataKey: 'memo',
              title: '备注'
            }
          ],
          actions_width: 160,
          actions: [
            {
              key: 'edit',
              type: 'primary',
              event: 'edit',
              btn: '修改'
            },
            {
              key: 'delete',
              type: 'danger',
              event: 'delete',
              btn: '删除'
            }
          ],
          search_fields: [
            {
              name: 'name',
              label: '菜单名称',
              type: 'input',
              placeholder: '菜单名称'
            }
          ]
        },
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  },
  {
    url: '/api/develop/menus',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: '1',
            name: '工作台',
            alias: 'dashboard',
            icon: 'speed-up',
            memo: '工作台'
          },
          {
            id: '2',
            name: '系统设置',
            alias: 'system',
            icon: 'settings',
            memo: '系统设置',
            children: [
              {
                id: '3',
                name: '基本设置',
                alias: 'system::settings',
                memo: '基本设置',
                children: [
                  {
                    id: '12',
                    name: '基本设置',
                    alias: 'system::settings::base',
                    memo: '基本设置'
                  },
                  {
                    id: '13',
                    name: '网站设置',
                    alias: 'system::settings::site',
                    memo: '网站设置'
                  }
                ]
              },
              {
                id: '4',
                name: '权限管理',
                alias: 'system::permiss',
                memo: '权限管理',
                children: [
                  {
                    id: '5',
                    name: '角色管理',
                    alias: 'system::permiss::roles',
                    memo: '角色管理',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1
                  },
                  {
                    id: '6',
                    name: '权限规则',
                    alias: 'system::permiss::rules',
                    memo: '权限规则',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1
                  }
                ]
              },
              {
                id: '7',
                name: '用户管理',
                alias: 'system::users',
                memo: '用户管理',
                is_search: 1,
                is_add: 1,
                is_edit: 1,
                is_delete: 1
              },
              {
                id: '8',
                name: '系统开发',
                alias: 'system::develop',
                memo: '系统开发',
                children: [
                  {
                    id: '9',
                    name: '设置项',
                    alias: 'system::develop::settings',
                    memo: '设置项',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1
                  },
                  {
                    id: '10',
                    name: '模型管理',
                    alias: 'system::develop::models',
                    memo: '模型管理',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1
                  },
                  {
                    id: '10',
                    name: '系统菜单',
                    alias: 'system::develop::menus',
                    memo: '系统菜单',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1
                  }
                ]
              },
              {
                id: '11',
                name: '系统日志',
                alias: 'system::logs',
                memo: '系统日志',
                is_search: 1,
                is_delete: 1
              }
            ]
          }
        ],
        total: 1,
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  }
]
