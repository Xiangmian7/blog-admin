import axios from 'axios'
import { BASE_URL, TIME_OUT } from '../config'
//创建一个axios
const server = axios.create({
  // 请求公共地址
  baseURL: BASE_URL,
  // 超时时间
  timeout: TIME_OUT
})

// 添加请求拦截器
server.interceptors.request.use(
  (config) => {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

server.interceptors.response.use(
  (res) => {
    return res.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default server
