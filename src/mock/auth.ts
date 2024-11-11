export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: (res: any) => {
      if (res.body.username !== 'admin' || res.body.password !== 'admin') {
        return {
          code: 402,
          message: '您的用户名或密码输入有误',
          data: null,
          redirect: '',
          wait: 3,
          status: 'fail'
        }
      }
      return {
        code: 200,
        message: 'success',
        data: {
          uid: 1,
          username: 'admin',
          avatar: '',
          role_id: 1,
          token: '098f6bcd4621d373cade4e832627b4f6',
          status: 1
        },
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  },
  {
    url: '/api/auth/login/mobile',
    method: 'post',
    response: (res: any) => {
      if (res.body.mobile !== 'admin') {
        return {}
      }
      return {
        code: 200,
        message: 'success',
        data: {
          uid: 1,
          username: 'admin',
          avatar: '',
          role_id: 1,
          token: '098f6bcd4621d373cade4e832627b4f6',
          status: 1
        },
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  }
]
