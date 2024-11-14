import http from '@/utils/http'

export const login = (loginData: any) => {
  return http.request({
    url: 'auth/login',
    method: 'post',
    data: loginData
  })
}

export const mobileLogin = (loginData: any) => {
  return http.request({
    url: 'auth/login/mobile',
    method: 'post',
    data: loginData
  })
}

export const getUserInfo = () => {
  return http.request({
    url: 'auth/userinfo',
    method: 'get'
  })
}

export const saveUserInfo = (data: any) => {
  return http.request({
    url: 'auth/userinfo',
    method: 'post',
    data
  })
}

export const savePassword = (data: any) => {
  return http.request({
    url: 'auth/password',
    method: 'post',
    data
  })
}
