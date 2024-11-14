const profileForm: any = {
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
      type: 'div',
      placeholder: 'form.users.username'
    },
    {
      name: 'realname',
      title: '真实姓名',
      label: 'form.users.realname',
      type: 'input',
      width: '450px',
      placeholder: 'form.users.realname'
    },
    {
      name: 'mobile',
      title: '手机号码',
      label: 'form.users.mobile',
      type: 'input',
      width: '450px',
      placeholder: 'form.users.mobile'
    },
    {
      name: 'email',
      title: '电子邮箱',
      label: 'form.users.email',
      type: 'input',
      width: '450px',
      placeholder: 'form.users.email'
    }
  ]
}

const passwordForm: any = {
  fields: [
    {
      name: 'opassword',
      title: '原密码',
      label: 'form.userPassword.opassword',
      type: 'password',
      width: '520px',
      placeholder: 'form.userPassword.opassword'
    },
    {
      name: 'password',
      title: '新密码',
      label: 'form.userPassword.password',
      type: 'password',
      width: '520px',
      placeholder: 'form.userPassword.password'
    },
    {
      name: 'cpassword',
      title: '确认密码',
      label: 'form.userPassword.cpassword',
      type: 'password',
      width: '520px',
      placeholder: 'form.userPassword.cpassword'
    }
  ],
  rules: {
    opassword: [
      {
        required: true,
        label: 'message.password.opassword',
        messageDefault: '请输入原密码',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        label: 'message.password.password',
        messageDefault: '请输入新密码',
        trigger: 'blur'
      }
    ],
    cpassword: [
      {
        required: true,
        label: 'message.password.cpassword',
        messageDefault: '请输入确认密码',
        trigger: 'blur'
      }
    ]
  }
}

export { profileForm, passwordForm }
