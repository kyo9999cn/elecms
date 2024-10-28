import axios from 'axios'
// import router from '@/router'
// import { errorCode } from './error'
import { useUserStore } from '@/store/modules/user'

// 创建axios实例
const request = axios.create({
  // 服务接口请求
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时设置
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// 请求拦截
request.interceptors.request.use(
  (config: any) => {
    const { token } = useUserStore()
    // 是否需要设置 token
    if (token) {
      config.headers['App-token'] = `Bearer ${token}`
    }
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (res: any) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    if (code === 200) {
      return Promise.resolve(res.data)
    }
    return Promise.reject(res.data)
  },
  (error: any) => {
    let { message } = error
    if (message === 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = `系统接口${message.substr(message.length - 3)}异常`
    }
    /* if (error.response) {
      // 402为权限验证失败
      if (error.response.status === 402) {
        const { clearUserinfo } = useUserStore()
        clearUserinfo()
        setTimeout(() => {
          router.push('/login')
        }, 1000)
      }
    } */
    return Promise.reject(error)
  }
)

export default request
