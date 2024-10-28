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
              key: 'id',
              dataKey: 'id',
              title: 'ID',
              width: 60
            },
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
            memo: '系统管理员'
          },
          {
            id: '2',
            name: '普通管理员',
            memo: '普通管理员'
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
