export default [
  {
    url: '/api/roles/model',
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
              title: '角色名称',
              width: 160
            },
            {
              key: 'memo',
              dataKey: 'memo',
              title: '备注'
            },
            {
              key: 'status',
              dataKey: 'status',
              title: '状态',
              type: 'switch',
              fixed: 'right'
            }
          ],
          actions_width: 200,
          actions: [
            {
              key: 'edit',
              type: 'primary',
              event: 'edit',
              btn: '修改'
            },
            {
              key: 'set',
              type: 'default',
              event: 'set',
              btn: '权限设置'
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
              label: '角色名称',
              type: 'input',
              placeholder: '角色名称'
            }
          ],
          fields: [
            {
              name: 'name',
              label: '角色名称',
              type: 'input',
              placeholder: '角色名称'
            },
            {
              name: 'memo',
              label: '备注',
              type: 'textarea',
              placeholder: '备注'
            },
            {
              name: 'status',
              label: '状态',
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
    url: '/api/roles',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: '1',
            name: '系统管理员',
            memo: '系统管理员',
            status: 1
          },
          {
            id: '2',
            name: '普通管理员',
            memo: '普通管理员',
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
