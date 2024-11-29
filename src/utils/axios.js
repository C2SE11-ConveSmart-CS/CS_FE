import axios from 'axios'

export const baseURL = 'https://kindly-growing-bee.ngrok-free.app' //BACK_END_URL

const customFetch = axios.create({
  baseURL: `${baseURL}/api/`,
  withCredentials: true,
})

customFetch.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  config.headers['ngrok-skip-browser-warning'] = 105824
  config.headers['Content-Type'] = 'application/json'
  return config
})

customFetch.interceptors.response.use(
  response => {
    const newToken = response.data.token
    if (newToken) {
      localStorage.setItem('token', 'Bearer ' + newToken)
    }
    return response
  },
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
    return Promise.reject(error)
  }
)

export default customFetch
