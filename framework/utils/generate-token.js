import { bookStoreConfig, bookStoreUserConfig } from '../config/config'
import { generateUserToken } from '../services/user-service-book-store'

export async function addToken(userBody) {
  const response = await generateUserToken(userBody)
  const jwtToken = response.data.token
  bookStoreConfig.token = jwtToken
  bookStoreUserConfig.token = jwtToken
}
