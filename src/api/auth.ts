import request from '@/utils/request'

export const login = (loginData: any) => {
  return request({
    url: 'auth/login',
    method: 'post',
    data: loginData
  })
}

export const getUserInfo = () => {
  return request({
    url: 'auth/userinfo'
  })
}
