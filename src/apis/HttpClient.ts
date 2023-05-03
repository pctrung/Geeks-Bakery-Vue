import axios, { type AxiosRequestHeaders } from 'axios'
import queryString from 'query-string'

const mockApi = 'https://6450ca10e1f6f1bb229ef960.mockapi.io/api'
const HttpClient = axios.create({
  baseURL: process.env.API_URL ?? mockApi,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: (params) => queryString.stringify(params)
})

HttpClient.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem('token')

  let newConfig = { ...config }
  if (token) {
    newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`
      } as AxiosRequestHeaders
    }
  }
  return newConfig
})
HttpClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
  },
  (error) => {
    console.error(error)
  }
)

export default HttpClient
