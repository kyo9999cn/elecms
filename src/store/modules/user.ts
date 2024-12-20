import { defineStore } from 'pinia'
import { login, mobileLogin, getUserInfo } from '@/api/auth'
import { removeToken, setToken } from '@/utils/token'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userinfo: null,
    token: ''
  }),
  actions: {
    // 登录
    async login(username: string, password: string) {
      const { data } = await login({ username, password })
      if (data) {
        // 获取成功，保存Token和Userinfo
        this.setToken(data.token)
        this.setUserinfo(data)
        // 返回获取Data
        return Promise.resolve(data)
      }
    },
    // 手机号登录
    async mobileLogin(mobile: string, vcode: string) {
      const { data } = await mobileLogin({ mobile, vcode })
      if (data) {
        // 获取成功，保存Token和Userinfo
        this.setToken(data.token)
        this.setUserinfo(data)
        // 返回获取Data
        return Promise.resolve(data)
      }
    },
    // 清除用户信息
    clearUserinfo() {
      this.userinfo = null
      this.token = ''
      removeToken()
    },
    // 获取用户信息
    async getUserinfo() {
      const { data } = await getUserInfo()
      if (data) {
        this.userinfo = data
        return Promise.resolve(data)
      }
    },
    // 设置token
    setToken(token: any) {
      this.token = token
      setToken(token)
    },
    // 设置userinfo
    setUserinfo(userinfo: any) {
      this.userinfo = userinfo
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'userinfo',
        storage: localStorage
      },
      {
        key: 'token',
        storage: localStorage
      }
    ]
  }
})
