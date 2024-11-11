export default [
  {
    url: '/api/develop/models/model',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          name: 'models',
          label: 'form.developModels.model',
          title: '模型',
          columns: [
            {
              key: 'name',
              dataKey: 'name',
              label: 'form.developModels.name',
              title: '模型名称',
              langKey: 'label',
              width: 200
            },
            {
              key: 'memo',
              dataKey: 'memo',
              label: 'form.developModels.memo',
              title: '备注'
            },
            {
              key: 'status',
              dataKey: 'status',
              title: '状态',
              label: 'form.developModels.status',
              type: 'switch',
              width: 80,
              fixed: 'right'
            }
          ],
          actions_width: 240,
          actions: [
            {
              key: 'fields',
              type: 'default',
              event: 'fields',
              label: 'actions.fieldsSet',
              title: '字段设置'
            },
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
              label: 'form.developModels.name',
              title: '模型名称',
              type: 'input',
              placeholder: 'form.developModels.name'
            }
          ],
          fields: [
            {
              name: 'name',
              label: 'form.developModels.name',
              title: '模型名称',
              type: 'input',
              placeholder: 'form.developModels.name'
            },
            {
              name: 'label',
              label: 'form.developModels.label',
              title: '多语言标签',
              type: 'input',
              placeholder: 'form.developModels.label'
            },
            /* {
              name: 'is_async',
              label: 'form.developModels.async',
              title: '异步构建',
              type: 'switch'
            }, */
            {
              name: 'memo',
              label: 'form.developModels.memo',
              title: '备注',
              type: 'textarea',
              placeholder: 'form.developModels.memo'
            },
            {
              name: 'status',
              label: 'form.developModels.status',
              title: '状态',
              type: 'switch'
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
    url: '/api/develop/models',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: '1',
            name: '角色',
            label: 'model.roles',
            memo: '角色',
            status: 1
          },
          {
            id: '2',
            name: '权限规则',
            label: 'model.rules',
            memo: '权限规则',
            status: 1
          },
          {
            id: '3',
            name: '用户',
            label: 'model.users',
            memo: '用户',
            status: 1
          },
          {
            id: '4',
            name: '系统日志',
            label: 'model.logs',
            memo: '系统日志',
            status: 1
          },
          {
            id: '5',
            name: '设置项',
            label: 'model.entries',
            memo: '设置项',
            status: 1
          }
        ],
        total: 5,
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  }
]
