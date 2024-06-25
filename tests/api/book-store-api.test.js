import {
  addBook,
  deleteBook,
  getBookInfo,
  updateBook,
} from '../../framework/services/book-store-service'
import {
  createUserAccount,
  deleteUserAccount,
} from '../../framework/services/user-service-book-store'
import {
  userRequestBody,
  bookRequestBody,
  singleBookRequestBody,
  updateBookRequest,
  newISBN,
  emptyBookRequestBody,
} from '../../framework/fixtures/request-body/book-store-body'
import { addToken } from '../../framework/utils/generate-token'

describe('Book store API endpoints', () => {
  let userId

  beforeEach(async () => {
    const userBody = userRequestBody
    const userResponse = await createUserAccount(userBody)
    userId = userResponse.data.userID
    await addToken(userBody)
  })

  afterEach(async () => {
    await deleteUserAccount(userId)
  })

  test.each([
    {
      requestBody: bookRequestBody,
      expectedStatus: 201,
      expectedBooks: bookRequestBody.collectionOfIsbns,
    },
    { requestBody: emptyBookRequestBody, expectedStatus: 400 },
  ])(
    'should add $requestBody.collectionOfIsbns.length books to the bookstore',
    async ({ requestBody, expectedStatus, expectedBooks }) => {
      requestBody.userId = userId
      const response = await addBook(requestBody)
      expect(response.status).toBe(expectedStatus)
      expect(response.data.books).toStrictEqual(expectedBooks)
    },
  )

  test('should update an existed valid book', async () => {
    const requestBody = singleBookRequestBody
    requestBody.userId = userId
    const isbn = requestBody.collectionOfIsbns[0].isbn
    const response = await addBook(requestBody)
    expect(response.status).toBe(201)
    expect(response.data.books.length).not.toBe(0)

    const updateRequestBody = updateBookRequest
    updateRequestBody.isbn = newISBN
    updateRequestBody.userId = userId
    const updateResponse = await updateBook(isbn, updateRequestBody)
    expect(updateResponse.status).toBe(200)
    expect(updateResponse.data.books[0].isbn).toBe(newISBN)
  })

  test('should get an information about existed book', async () => {
    const requestBody = singleBookRequestBody
    requestBody.userId = userId
    const isbn = requestBody.collectionOfIsbns[0].isbn
    const response = await addBook(requestBody)
    expect(response.status).toBe(201)
    expect(response.data.books[0].isbn).toBe(isbn)

    const bookInfoResponse = await getBookInfo(isbn)
    expect(bookInfoResponse.status).toBe(200)
    expect(bookInfoResponse.data.isbn).toBe(isbn)
  })

  test('should delete an existed book', async () => {
    const requestBody = singleBookRequestBody
    requestBody.userId = userId
    const isbn = requestBody.collectionOfIsbns[0].isbn

    const response = await addBook(requestBody)
    expect(response.status).toBe(201)
    expect(response.data.books.length).not.toBe(0)

    const deleteBookRequest = updateBookRequest
    deleteBookRequest.userId = requestBody.userId
    deleteBookRequest.isbn = isbn

    const deleteResponse = await deleteBook(deleteBookRequest)
    expect(deleteResponse.status).toBe(204)
  })
})
