export default [
  {
    url: '/api/develop/models/model',
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
              width: 200
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
              label: '模型名称',
              type: 'input',
              placeholder: '模型名称'
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
            memo: '角色'
          },
          {
            id: '2',
            name: '权限规则',
            memo: '权限规则'
          },
          {
            id: '3',
            name: '用户',
            memo: '用户'
          },
          {
            id: '4',
            name: '系统日志',
            memo: '系统日志'
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
