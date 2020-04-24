import axios from 'axios'

export function request(config){
  const axios1 = axios.create({
    // baseURL:'http://123.207.32.32:8000/api/h8',
    // baseURL:'api',
    timeout:5000
  })
  axios1.interceptors.request.use(config => {
    return config
  })

  //3发送真正的网络请求
  return axios1(config)
}
