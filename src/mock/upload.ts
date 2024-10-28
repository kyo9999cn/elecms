export default [
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          url: '',
          name: 'test.jpg',
          uploadTime: '2024/10/25 12:12:12'
        },
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  }
]
