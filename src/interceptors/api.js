import axios from 'axios'
import signatureHash from '../libs/signatureHash.js'
import getTimezone from '../services/timezone.js'

const baseURL = import.meta.env.VITE_BASE_URL_API
const PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC
const PRIVATE_KEY = import.meta.env.VITE_API_SECRET

const api = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(async config => {
  const { data } = await getTimezone()
  const hash = await signatureHash(PRIVATE_KEY, PUBLIC_KEY, data.timezone)

  const token = JSON.parse(localStorage.getItem('token'))?.access_token

  config.headers.Authorization = token

  config.data = {
    apiKey: PUBLIC_KEY,
    utcTimeStamp: data.timezone,
    signature: hash,
    ...config.data
  }

  return config
}, (err) => {
  return Promise.reject(err)
})

export default api