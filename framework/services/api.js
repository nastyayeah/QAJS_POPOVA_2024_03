import axios from 'axios'
import { userConfig } from '../config/config.js'

export const userApi = axios.create({
  baseURL: userConfig.baseURL,
  validateStatus: () => true,
})
userApi.defaults.headers.common['Content-Type'] = 'application/json'
