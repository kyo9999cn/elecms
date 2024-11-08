export default [
  {
    url: '/api/develop/entry/model',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          name: 'entry',
          label: 'form.developEntry.model',
          title: '设置项',
          columns: [
            {
              key: 'name',
              dataKey: 'name',
              title: '设置项名称',
              label: 'form.developEntry.name',
              langKey: 'label',
              width: 200
            },
            {
              key: 'memo',
              dataKey: 'memo',
              title: '备注',
              label: 'form.developEntry.memo'
            },
            {
              key: 'status',
              dataKey: 'status',
              title: '状态',
              label: 'form.developEntry.status',
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
              title: '设置项',
              label: 'form.developEntry.name',
              type: 'input',
              placeholder: 'form.developEntry.name'
            }
          ],
          fields: [
            {
              name: 'name',
              label: 'form.developEntry.name',
              title: '设置项名称',
              type: 'input',
              placeholder: 'form.developEntry.name'
            },
            {
              name: 'label',
              label: 'form.developEntry.label',
              title: '多语言标签',
              type: 'input',
              placeholder: 'form.developEntry.label'
            },
            {
              name: 'memo',
              label: 'form.developEntry.memo',
              title: '备注',
              type: 'textarea',
              placeholder: 'form.developEntry.memo'
            },
            {
              name: 'status',
              label: 'form.developEntry.status',
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
    url: '/api/develop/entry',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: '1',
            name: '基本设置',
            label: 'menu.system.settings.main',
            memo: '基本设置',
            status: 1
          },
          {
            id: '2',
            name: '网站设置',
            label: 'menu.system.settings.website',
            memo: '网站设置',
            status: 1
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
