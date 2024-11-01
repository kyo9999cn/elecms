export default [
  {
    url: '/api/develop/entry/model',
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
              title: '设置项',
              width: 160
            },
            {
              key: 'memo',
              dataKey: 'memo',
              title: '备注'
            }
          ],
          actions_width: 220,
          actions: [
            {
              key: 'fields',
              type: 'default',
              event: 'fields',
              btn: '设置字段'
            },
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
              label: '设置项',
              type: 'input',
              placeholder: '设置项'
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
            memo: '基本设置'
          },
          {
            id: '2',
            name: '网站设置',
            memo: '网站设置'
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
