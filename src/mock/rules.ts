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
          label: 'form.permissRules.model',
          title: '权限规则',
          columns: [
            {
              key: 'name',
              dataKey: 'name',
              label: 'form.permissRules.name',
              title: '权限名称',
              langKey: 'label',
              width: 240
            },
            {
              key: 'code',
              dataKey: 'code',
              label: 'form.permissRules.code',
              title: '权限代码',
              width: 300
            },
            {
              key: 'is_detail',
              dataKey: 'is_detail',
              label: 'actions.detail',
              title: '详情',
              align: 'center',
              customRander: true
            },
            {
              key: 'is_search',
              dataKey: 'is_search',
              label: 'actions.search',
              title: '查询',
              align: 'center',
              customRander: true
            },
            {
              key: 'is_add',
              dataKey: 'is_add',
              label: 'actions.add',
              title: '新建',
              align: 'center',
              customRander: true
            },
            {
              key: 'is_edit',
              dataKey: 'is_edit',
              label: 'actions.edit',
              title: '修改',
              align: 'center',
              customRander: true
            },
            {
              key: 'is_delete',
              dataKey: 'is_delete',
              label: 'actions.delete',
              title: '删除',
              align: 'center',
              customRander: true
            },
            {
              key: 'is_mult_delete',
              dataKey: 'is_mult_delete',
              label: 'actions.multDelete',
              title: '批量删除',
              width: 80,
              align: 'center',
              customRander: true
            },
            {
              key: 'is_import',
              dataKey: 'is_import',
              label: 'actions.import',
              title: '导入',
              align: 'center',
              customRander: true
            },
            {
              key: 'is_export',
              dataKey: 'is_export',
              label: 'actions.export',
              title: '导出',
              align: 'center',
              customRander: true
            },
            {
              key: 'is_print',
              dataKey: 'is_print',
              label: 'actions.print',
              title: '打印',
              align: 'center',
              customRander: true
            },
            {
              key: 'custom_actions',
              dataKey: 'custom_actions',
              label: 'actions.custom',
              title: '自定义操作',
              width: 280,
              customRander: true
            },
            {
              key: 'memo',
              dataKey: 'memo',
              label: 'form.permissRules.memo',
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
              label: 'actions.edit',
              title: '修改'
            },
            {
              key: 'delete',
              type: 'danger',
              event: 'delete',
              label: 'actions.delete',
              title: '删除'
            }
          ],
          search_fields: [
            {
              name: 'name',
              label: 'form.permissRules.name',
              title: '权限名称',
              type: 'input',
              placeholder: 'form.permissRules.name'
            }
          ],
          fields: [
            {
              name: 'name',
              label: 'form.permissRules.name',
              title: '权限名称',
              type: 'input',
              placeholder: 'form.permissRules.name'
            },
            {
              name: 'code',
              label: 'form.permissRules.code',
              title: '权限代码',
              type: 'input',
              placeholder: 'form.permissRules.code'
            },
            {
              name: 'memo',
              label: 'form.permissRules.memo',
              title: '备注',
              type: 'textarea',
              placeholder: 'form.permissRules.memo'
            },
            {
              name: 'actions',
              label: 'actions.main',
              title: '操作',
              type: 'checkbox',
              options: [
                {
                  label: 'actions.detail',
                  title: '详情',
                  name: 'is_detail'
                },
                {
                  label: 'actions.search',
                  title: '查询',
                  name: 'is_search'
                },
                {
                  label: 'actions.add',
                  title: '新建',
                  name: 'is_add'
                },
                {
                  label: 'actions.edit',
                  title: '修改',
                  name: 'is_edit'
                },
                {
                  label: 'actions.delete',
                  title: '删除',
                  name: 'is_delete'
                },
                {
                  label: 'actions.multDelete',
                  title: '批量删除',
                  name: 'is_mult_delete'
                },
                {
                  label: 'actions.import',
                  title: '导入',
                  name: 'is_import'
                },
                {
                  label: 'actions.export',
                  title: '导出',
                  name: 'is_export'
                },
                {
                  label: 'actions.print',
                  title: '打印',
                  name: 'is_print'
                }
              ]
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
            label: 'menu.dashboard',
            code: 'dashboard',
            memo: '工作台'
          },
          {
            id: '2',
            name: '系统设置',
            label: 'menu.system.main',
            code: 'system',
            memo: '系统设置',
            children: [
              {
                id: '3',
                name: '基本设置',
                label: 'menu.system.settings.main',
                code: 'system::settings',
                memo: '基本设置',
                children: [
                  {
                    id: '12',
                    name: '基本设置',
                    label: 'menu.system.settings.main',
                    code: 'system::settings::main',
                    memo: '基本设置'
                  },
                  {
                    id: '13',
                    name: '网站设置',
                    label: 'menu.system.settings.website',
                    code: 'system::settings::website',
                    memo: '网站设置'
                  }
                ]
              },
              {
                id: '4',
                name: '权限管理',
                label: 'menu.system.permiss.main',
                code: 'system::permiss',
                memo: '权限管理',
                children: [
                  {
                    id: '5',
                    name: '角色管理',
                    label: 'menu.system.permiss.roles',
                    code: 'system::permiss::roles',
                    memo: '角色管理',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1,
                    custom_actions: [
                      {
                        name: 'permiss_set',
                        label: 'actions.permissSet',
                        title: '权限设置'
                      }
                    ]
                  },
                  {
                    id: '6',
                    name: '权限规则',
                    label: 'menu.system.permiss.rules',
                    code: 'system::permiss::rules',
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
                label: 'menu.system.users',
                code: 'system::users',
                memo: '用户管理',
                is_search: 1,
                is_add: 1,
                is_edit: 1,
                is_delete: 1
              },
              {
                id: '8',
                name: '系统开发',
                label: 'menu.system.develop.main',
                code: 'system::develop',
                memo: '系统开发',
                children: [
                  {
                    id: '9',
                    name: '设置项',
                    label: 'menu.system.develop.entry',
                    code: 'system::develop::entry',
                    memo: '设置项',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1,
                    custom_actions: [
                      {
                        name: 'fields',
                        label: 'actions.fieldsSet',
                        title: '字段设置'
                      }
                    ]
                  },
                  {
                    id: '10',
                    name: '模型管理',
                    label: 'menu.system.develop.models',
                    code: 'system::develop::models',
                    memo: '模型管理',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1,
                    custom_actions: [
                      {
                        name: 'fields',
                        label: 'actions.fieldsSet',
                        title: '字段设置'
                      }
                    ]
                  },
                  {
                    id: '10',
                    name: '系统菜单',
                    label: 'menu.system.develop.menus',
                    code: 'system::develop::menus',
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
                label: 'menu.system.logs',
                code: 'system::logs',
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
    params: {
      role_id: 1
    },
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: '1',
            name: '工作台',
            code: 'dashboard',
            memo: '工作台',
            checked: 1
          },
          {
            id: '2',
            name: '系统设置',
            code: 'system',
            memo: '系统设置',
            checked: 1,
            children: [
              {
                id: '3',
                name: '基本设置',
                code: 'system::settings',
                memo: '基本设置',
                checked: 1,
                children: [
                  {
                    id: '12',
                    name: '基本设置',
                    code: 'system::settings::base',
                    memo: '基本设置',
                    checked: 1
                  },
                  {
                    id: '13',
                    name: '网站设置',
                    code: 'system::settings::site',
                    memo: '网站设置',
                    checked: 1
                  }
                ]
              },
              {
                id: '4',
                name: '权限管理',
                code: 'system::permiss',
                memo: '权限管理',
                checked: 1,
                children: [
                  {
                    id: '5',
                    name: '角色管理',
                    code: 'system::permiss::roles',
                    memo: '角色管理',
                    checked: 1,
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1,
                    custom_actions: [
                      {
                        tltle: '权限设置',
                        name: 'permiss_set',
                        label: 'actions.permissSet'
                      }
                    ]
                  },
                  {
                    id: '6',
                    name: '权限规则',
                    code: 'system::permiss::rules',
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
                code: 'system::users',
                memo: '用户管理',
                is_search: 1,
                is_add: 1,
                is_edit: 1,
                is_delete: 1
              },
              {
                id: '8',
                name: '系统开发',
                code: 'system::develop',
                memo: '系统开发',
                children: [
                  {
                    id: '9',
                    name: '设置项',
                    code: 'system::develop::settings',
                    memo: '设置项',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1,
                    custom_actions: [
                      {
                        tltle: '字段设置',
                        name: 'fields',
                        label: 'actions.fieldsSet'
                      }
                    ]
                  },
                  {
                    id: '10',
                    name: '模型管理',
                    code: 'system::develop::models',
                    memo: '模型管理',
                    is_search: 1,
                    is_add: 1,
                    is_edit: 1,
                    is_delete: 1,
                    custom_actions: [
                      {
                        tltle: '字段设置',
                        name: 'fields',
                        label: 'actions.fieldsSet'
                      }
                    ]
                  },
                  {
                    id: '10',
                    name: '系统菜单',
                    code: 'system::develop::menus',
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
                code: 'system::logs',
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
