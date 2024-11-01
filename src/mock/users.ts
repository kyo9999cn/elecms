export default [
  {
    url: '/api/users/model',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          name: 'users',
          columns: [
            {
              key: 'username',
              dataKey: 'username',
              title: '用户名',
              width: 160
            },
            {
              key: 'role.name',
              dataKey: 'role.name',
              title: '角色名称',
              width: 120
            },
            {
              key: 'truename',
              dataKey: 'truename',
              title: '姓名',
              width: 140
            },
            {
              key: 'mobile',
              dataKey: 'mobile',
              title: '联系电话',
              width: 150
            },
            {
              key: 'email',
              dataKey: 'email',
              title: '电子邮箱',
              width: 150
            },
            {
              key: 'memo',
              dataKey: 'memo',
              title: '备注',
              width: 200
            },
            {
              key: 'create_time',
              dataKey: 'create_time',
              title: '创建时间',
              width: 190
            },
            {
              key: 'last_login_time',
              dataKey: 'last_login_time',
              title: '最后登录时间',
              width: 190
            },
            {
              key: 'last_login_ip',
              dataKey: 'last_login_ip',
              title: '最后登录IP',
              width: 150
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
          ],
          search_fields: [
            {
              name: 'username',
              label: '用户名',
              type: 'input',
              placeholder: '用户名'
            },
            {
              name: 'role_id',
              label: '角色名称',
              type: 'select',
              options: [],
              async: 1,
              url: 'roles',
              valueKey: 'id',
              labelKey: 'name',
              placeholder: '角色名称'
            },
            {
              name: 'mobile',
              label: '联系电话',
              type: 'input',
              placeholder: '联系电话'
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
    url: '/api/users',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: '1',
            username: 'admin',
            role: {
              id: 1,
              name: '系统管理员',
              memo: '系统管理员'
            },
            truename: '小白fate',
            avatar: '/avatar.jpg',
            mobile: '-',
            email: '',
            memo: '-',
            create_time: '2024/10/24 12:12:00',
            last_login_time: '2024/10/24 12:12:00',
            last_login_ip: '127.0.0.1'
          },
          {
            id: '2',
            username: 'test',
            role: {
              id: 2,
              name: '普通管理员',
              memo: '普通管理员'
            },
            truename: 'test',
            avatar: '',
            mobile: '-',
            email: '',
            memo: '-',
            create_time: '2024/10/24 12:12:00',
            last_login_time: '2024/10/24 12:12:00',
            last_login_ip: '127.0.0.1'
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
