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
          label: 'form.users.model',
          title: '用户',
          columns: [
            {
              key: 'username',
              dataKey: 'username',
              label: 'form.users.username',
              title: '用户名',
              width: 160
            },
            {
              key: 'role.name',
              dataKey: 'role.name',
              label: 'form.users.role',
              title: '角色名称',
              width: 120
            },
            {
              key: 'realname',
              dataKey: 'realname',
              label: 'form.users.realname',
              title: '姓名',
              width: 140
            },
            {
              key: 'mobile',
              dataKey: 'mobile',
              label: 'form.users.mobile',
              title: '联系电话',
              width: 150
            },
            {
              key: 'email',
              dataKey: 'email',
              label: 'form.users.email',
              title: '电子邮箱',
              width: 150
            },
            {
              key: 'memo',
              dataKey: 'memo',
              label: 'form.users.memo',
              title: '备注',
              width: 200
            },
            {
              key: 'create_time',
              dataKey: 'create_time',
              label: 'time.createTime',
              title: '创建时间',
              width: 190
            },
            {
              key: 'last_login_time',
              dataKey: 'last_login_time',
              label: 'lastLoginTime',
              title: '最后登录时间',
              width: 190
            },
            {
              key: 'last_login_ip',
              dataKey: 'last_login_ip',
              label: 'lastLoginIp',
              title: '最后登录IP',
              width: 150
            },
            {
              key: 'status',
              dataKey: 'status',
              label: 'form.users.status',
              title: '状态',
              type: 'switch',
              width: 80,
              fixed: 'right'
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
              name: 'username',
              title: '用户名',
              label: 'form.users.username',
              type: 'input',
              placeholder: 'form.users.username'
            },
            {
              name: 'role_id',
              title: '角色名称',
              label: 'form.users.role',
              type: 'select',
              options: [],
              async: 1,
              url: 'roles',
              valueKey: 'id',
              labelKey: 'name',
              placeholder: 'form.users.role'
            },
            {
              name: 'mobile',
              title: '联系电话',
              label: 'form.users.mobile',
              type: 'input',
              placeholder: 'form.users.mobile'
            }
          ],
          form_label_width: '136px',
          fields: [
            {
              name: 'avatar',
              title: '头像',
              label: 'form.users.avatar',
              type: 'upload-image',
              placeholder: 'form.users.avatar'
            },
            {
              name: 'username',
              title: '用户名',
              label: 'form.users.username',
              type: 'input',
              placeholder: 'form.users.username'
            },
            {
              name: 'password',
              title: '密码',
              label: 'form.users.password',
              type: 'password',
              placeholder: 'form.users.password'
            },
            {
              name: 'role_id',
              title: '角色名称',
              label: 'form.users.role',
              type: 'select',
              options: [],
              async: 1,
              url: 'roles',
              valueKey: 'id',
              labelKey: 'name',
              placeholder: 'form.users.role'
            },
            {
              name: 'realname',
              title: '姓名',
              label: 'form.users.realname',
              type: 'input',
              placeholder: 'form.users.realname'
            },
            {
              name: 'mobile',
              title: '联系电话',
              label: 'form.users.mobile',
              type: 'input',
              placeholder: 'form.users.mobile'
            },
            {
              name: 'email',
              title: '电子邮箱',
              label: 'form.users.email',
              type: 'input',
              placeholder: 'form.users.email'
            },
            {
              name: 'memo',
              title: '备注',
              label: 'form.users.memo',
              type: 'textarea',
              placeholder: 'form.users.memo'
            },
            {
              name: 'status',
              title: '状态',
              label: 'form.users.status',
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
            role_id: 1,
            role: {
              id: 1,
              name: '系统管理员',
              memo: '系统管理员'
            },
            realname: '小白fate',
            avatar: '/avatar.jpg',
            mobile: '',
            email: '',
            memo: '',
            create_time: '2024/10/24 12:12:00',
            last_login_time: '2024/10/24 12:12:00',
            last_login_ip: '127.0.0.1',
            status: 1
          },
          {
            id: '2',
            username: 'test',
            role_id: 2,
            role: {
              id: 2,
              name: '普通管理员',
              memo: '普通管理员'
            },
            realname: 'test',
            avatar: '',
            mobile: '',
            email: '',
            memo: '',
            create_time: '2024/10/24 12:12:00',
            last_login_time: '2024/10/24 12:12:00',
            last_login_ip: '127.0.0.1',
            status: 1
          }
        ],
        total: 2,
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  }
]
