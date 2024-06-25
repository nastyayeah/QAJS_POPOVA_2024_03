import 'dotenv/config'

export const userConfig = {
  baseURL: process.env.TEST_BASE_USER_API_URL,
}

export const bookStoreConfig = {
  baseURL: process.env.TEST_BASE_BOOK_STORE_API_URL,
}

export const bookStoreUserConfig = {
  baseURL: process.env.TEST_BASE_BOOK_STORE_USER_API_URL,
}
