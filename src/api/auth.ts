import http from '@/utils/http'

export const login = (loginData: any) => {
  return http.request({
    url: 'auth/login',
    method: 'post',
    data: loginData
  })
}

export const getUserInfo = () => {
  return http.request({
    url: 'auth/userinfo'
  })
}
