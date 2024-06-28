import { bookStoreApi } from './api.js'
import { bookStoreApiEndpoints } from '../config/endpoints'
import { bookStoreConfig } from '../config/config.js'

export async function addBook(requestBody) {
  try {
    const response = await bookStoreApi.post(
      bookStoreApiEndpoints.addBook,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${bookStoreConfig.token}`,
        },
      },
    )
    return { status: response.status, data: response.data }
  } catch (error) {
    return { status: error.response ? error.response.status : 500, data: null }
  }
}

export async function updateBook(bookId, requestBody) {
  try {
    const response = await bookStoreApi.put(
      bookStoreApiEndpoints.updateBookStore(bookId),
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${bookStoreConfig.token}`,
        },
      },
    )
    return { status: response.status, data: response.data }
  } catch (error) {
    return { status: error.response ? error.response.status : 500, data: null }
  }
}

export async function deleteBook(requestBody) {
  try {
    const response = await bookStoreApi.delete(
      bookStoreApiEndpoints.deleteBook,
      {
        data: requestBody,
        headers: {
          Authorization: `Bearer ${bookStoreConfig.token}`,
        },
      },
    )
    return { status: response.status, data: response.data }
  } catch (error) {
    return { status: error.response ? error.response.status : 500, data: null }
  }
}

export async function getBookInfo(bookId) {
  try {
    const response = await bookStoreApi.get(
      bookStoreApiEndpoints.getBookInfo(bookId),
    )
    return { status: response.status, data: response.data }
  } catch (error) {
    return { status: error.response ? error.response.status : 500, data: null }
  }
}
