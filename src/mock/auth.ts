export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: () => {
      return {
        uid: 1,
        username: 'admin',
        role_id: 1
      }
    }
  }
]
