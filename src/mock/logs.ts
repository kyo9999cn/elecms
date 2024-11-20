export default [
  {
    url: '/api/logs/model',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          name: 'logs',
          label: 'form.logs.model',
          title: '系统日志',
          columns: [
            {
              key: 'type',
              dataKey: 'type',
              title: '操作类型',
              label: 'form.logs.type',
              width: 160
            },
            {
              key: 'user.username',
              dataKey: 'user.username',
              label: 'form.logs.username',
              title: '用户名',
              width: 160
            },
            {
              key: 'content',
              dataKey: 'content',
              label: 'form.logs.content',
              title: '操作说明'
            },
            {
              key: 'create_time',
              dataKey: 'create_time',
              label: 'time.createTime',
              title: '创建时间',
              width: 190
            }
          ],
          actions_width: 160,
          actions: [
            {
              key: 'delete',
              type: 'danger',
              event: 'delete',
              title: '删除',
              label: 'actions.delete'
            }
          ],
          search_fields: [
            {
              name: 'type_id',
              label: 'form.logs.type',
              title: '操作类型',
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
              placeholder: 'form.logs.type'
            },
            {
              name: 'create_time',
              label: 'time.createTime',
              title: '创建时间',
              type: 'date',
              width: '320px',
              placeholder: 'time.createTime'
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
