export default [
  {
    url: '/api/logs/model',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          name: 'roles',
          columns: [
            {
              key: 'type',
              dataKey: 'type',
              title: '操作类型',
              width: 120
            },
            {
              key: 'user.username',
              dataKey: 'user.username',
              title: '用户名',
              width: 160
            },
            {
              key: 'content',
              dataKey: 'content',
              title: '操作说明'
            },
            {
              key: 'create_time',
              dataKey: 'create_time',
              title: '创建时间',
              width: 190
            }
          ],
          actions_width: 90,
          actions: [
            {
              key: 'delete',
              type: 'danger',
              event: 'delete',
              btn: '删除'
            }
          ],
          search_fields: [
            {
              name: 'type_id',
              label: '操作类型',
              type: 'select',
              options: [
                {
                  label: '登录',
                  value: 1
                },
                {
                  label: '新建',
                  value: 2
                }
              ],
              placeholder: '操作类型'
            },
            {
              name: 'create_day',
              label: '创建日期',
              type: 'date'
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
    url: '/api/logs',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: '1',
            user: {
              id: 1,
              username: 'admin'
            },
            type: '登录',
            content: '登录了系统',
            create_time: '2024/10/25 12:12:00'
          },
          {
            id: '2',
            user: {
              id: 1,
              username: 'admin'
            },
            type: '新建',
            content: '新建了一条用户数据',
            create_time: '2024/10/25 12:12:00'
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
