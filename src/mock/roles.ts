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
          label: 'form.permissRoles.model',
          title: '角色',
          columns: [
            {
              key: 'name',
              dataKey: 'name',
              title: '角色名称',
              label: 'form.permissRoles.name',
              width: 160
            },
            {
              key: 'memo',
              dataKey: 'memo',
              label: 'form.permissRoles.memo',
              title: '备注'
            },
            {
              key: 'status',
              dataKey: 'status',
              title: '状态',
              label: 'form.permissRoles.status',
              type: 'switch',
              width: 80,
              fixed: 'right'
            }
          ],
          actions_width: 260,
          actions: [
            {
              key: 'edit',
              type: 'primary',
              event: 'edit',
              label: 'actions.edit',
              title: '修改'
            },
            {
              key: 'set',
              type: 'default',
              event: 'set',
              label: 'actions.permissSet',
              title: '权限设置'
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
              title: '角色名称',
              label: 'form.permissRoles.name',
              type: 'input',
              placeholder: 'form.permissRoles.name'
            }
          ],
          fields: [
            {
              name: 'name',
              title: '角色名称',
              label: 'form.permissRoles.name',
              type: 'input',
              placeholder: 'form.permissRoles.name'
            },
            {
              name: 'memo',
              title: '备注',
              label: 'form.permissRoles.memo',
              type: 'textarea',
              placeholder: 'form.permissRoles.memo'
            },
            {
              name: 'status',
              title: '状态',
              label: 'form.permissRoles.status',
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
