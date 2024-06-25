import axios from 'axios'
import {userConfig, bookStoreConfig, bookStoreUserConfig} from '../config/config.js'


export const userApi = axios.create({
    baseURL:userConfig.baseURL,
    validateStatus : () => true
})
userApi.defaults.headers.common['Content-Type'] = 'application/json';


export const bookStoreApi = axios.create({
    baseURL:bookStoreConfig.baseURL,
    validateStatus : () => true
})
bookStoreApi.defaults.headers.common['Content-Type'] = 'application/json';


export const userBookStoreApi = axios.create({
    baseURL:bookStoreUserConfig.baseURL,
    validateStatus : () => true
})
userBookStoreApi.defaults.headers.common['Content-Type'] = 'application/json';