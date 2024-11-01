export default [
  {
    url: '/api/rules/model',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          name: 'rules',
          columns: [
            {
              key: 'name',
              dataKey: 'name',
              title: '权限名称',
              width: 240
            },
            {
              key: 'alias',
              dataKey: 'alias',
              title: '权限标识',
              width: 300
            },
            {
              key: 'is_detail',
              dataKey: 'is_detail',
              title: '详情',
              width: 60,
              align: 'center',
              customRander: true
            },
            {
              key: 'is_search',
              dataKey: 'is_search',
              title: '查询',
              width: 60,
              align: 'center',
              customRander: true
            },
            {
              key: 'is_add',
              dataKey: 'is_add',
              title: '新建',
              width: 60,
              align: 'center',
              customRander: true
            },
            {
              key: 'is_edit',
              dataKey: 'is_edit',
              title: '修改',
              width: 60,
              align: 'center',
              customRander: true
            },
            {
              key: 'is_delete',
              dataKey: 'is_delete',
              title: '删除',
              width: 60,
              align: 'center',
              customRander: true
            },
            {
              key: 'is_mult_delete',
              dataKey: 'is_mult_delete',
              title: '批量删除',
              width: 80,
              align: 'center',
              customRander: true
            },
            {
              key: 'is_export',
              dataKey: 'is_export',
              title: '导出',
              width: 60,
              align: 'center',
              customRander: true
            },
            {
              key: 'is_import',
              dataKey: 'is_import',
              title: '导入',
              width: 60,
              align: 'center',
              customRander: true
            },
            {
              key: 'is_print',
              dataKey: 'is_print',
              title: '打印',
              width: 60,
              align: 'center',
              customRander: true
            },
            {
              key: 'custom_actions',
              dataKey: 'custom_actions',
              title: '自定义操作',
              width: 280
            },
            {
              key: 'memo',
              dataKey: 'memo',
              title: '备注',
              width: 280
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
              label: '权限名称',
              type: 'input',
              placeholder: '权限名称'
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
    url: '/api/rules',
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
            memo: '工作台'
          },
          {
            id: '2',
            name: '系统设置',
            alias: 'system',
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
                    is_delete: 1,
                    children: [
                      {
                        id: '23',
                        name: '设置字段',
                        alias: 'system::develop::settings::fields',
                        memo: '设置字段',
                        is_search: 1,
                        is_add: 1,
                        is_edit: 1,
                        is_delete: 1
                      }
                    ]
                  },
                  {
                    id: '10',
                    name: '模型管理',
                    alias: 'system::develop::models',
                    memo: '模型管理',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1,
                    children: [
                      {
                        id: '24',
                        name: '模型字段',
                        alias: 'system::develop::models::fields',
                        memo: '模型字段',
                        is_search: 1,
                        is_add: 1,
                        is_edit: 1,
                        is_delete: 1
                      }
                    ]
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
  },
  {
    url: '/api/rules/data',
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
            memo: '工作台',
            checked: 1
          },
          {
            id: '2',
            name: '系统设置',
            alias: 'system',
            memo: '系统设置',
            checked: 1,
            children: [
              {
                id: '3',
                name: '基本设置',
                alias: 'system::settings',
                memo: '基本设置',
                checked: 1,
                children: [
                  {
                    id: '12',
                    name: '基本设置',
                    alias: 'system::settings::base',
                    memo: '基本设置',
                    checked: 1
                  },
                  {
                    id: '13',
                    name: '网站设置',
                    alias: 'system::settings::site',
                    memo: '网站设置',
                    checked: 1
                  }
                ]
              },
              {
                id: '4',
                name: '权限管理',
                alias: 'system::permiss',
                memo: '权限管理',
                checked: 1,
                children: [
                  {
                    id: '5',
                    name: '角色管理',
                    alias: 'system::permiss::roles',
                    memo: '角色管理',
                    checked: 1,
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1,
                    custom_actions: [
                      {
                        label: '权限设置',
                        value: 'set'
                      }
                    ]
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
                    is_delete: 1,
                    custom_actions: [
                      {
                        label: '设置字段',
                        value: 'fields'
                      }
                    ]
                  },
                  {
                    id: '10',
                    name: '模型管理',
                    alias: 'system::develop::models',
                    memo: '模型管理',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1,
                    custom_actions: [
                      {
                        label: '模型字段',
                        value: 'fields'
                      }
                    ]
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
