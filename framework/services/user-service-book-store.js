import { userBookStoreApi } from './api.js'
import { bookStoreApiEndpoints } from '../config/endpoints.js'
import { bookStoreUserConfig } from '../config/config.js'

export async function createUserAccount(requestBody) {
  try {
    const response = await userBookStoreApi.post(
      bookStoreApiEndpoints.createUserAccount,
      requestBody,
    )
    return { status: response.status, data: response.data }
  } catch (error) {
    return { status: error.response ? error.response.status : 500, data: null }
  }
}

export async function deleteUserAccount(userId) {
  try {
    const response = await userBookStoreApi.delete(
      bookStoreApiEndpoints.deleteUserAccount(userId),
      {
        headers: {
          Authorization: `Bearer ${bookStoreUserConfig.token}`,
        },
      },
    )
    return { status: response.status, data: response.data }
  } catch (error) {
    return { status: error.response ? error.response.status : 500, data: null }
  }
}

export async function generateUserToken(requestBody) {
  try {
    const response = await userBookStoreApi.post(
      bookStoreApiEndpoints.generateUserToken,
      requestBody,
    )

    return { status: response.status, data: response.data }
  } catch (error) {
    return { status: error.response ? error.response.status : 500, data: null }
  }
}
