import { userRequestBody } from '../../framework/fixtures/request-body/user-body'
import {
  createUser,
  deleteUserByName,
  getUserByName,
  updateUserByName,
} from '../../framework/services/user-service'

import 'dotenv/config'

describe('User API endpoints: create|get|update user with valid data', () => {
  let username

  afterEach(async () => {
    await deleteUserByName(username)
  })

  test('should create user with valid data', async () => {
    const requestBody = userRequestBody
    const response = await createUser(requestBody)
    expect(response.status).toBe(200)
    expect(response.data).toEqual(
      expect.objectContaining({
        code: 200,
        message: requestBody.id.toString(),
      }),
    )

    username = requestBody.username
  })

  test('should get user with valid data', async () => {
    const requestBody = userRequestBody
    const response = await createUser(requestBody)
    expect(response.status).toBe(200)

    username = requestBody.username
    const getUserResponse = await getUserByName(username)
    expect(getUserResponse.status).toBe(200)
    expect(getUserResponse.data).toEqual(expect.objectContaining(requestBody))
  })

  test('should update user with valid data', async () => {
    const requestBody = userRequestBody
    const response = await createUser(requestBody)
    expect(response.status).toBe(200)
    username = requestBody.username

    const updatedRequestBody = userRequestBody
    const updateUserResponse = await updateUserByName(
      username,
      updatedRequestBody,
    )
    expect(updateUserResponse.status).toBe(200)
    expect(updateUserResponse.data).toEqual(
      expect.objectContaining({ code: 200 }),
    )

    username = requestBody.username
    const getUserDataResponse = await getUserByName(username)
    expect(getUserDataResponse.status).toBe(200)
    expect(getUserDataResponse.data).toEqual(
      expect.objectContaining(updatedRequestBody),
    )
  })
})

describe('User API endpoints: delete user', () => {
  test('should delete user with valid data', async () => {
    const requestBody = userRequestBody
    const createUserResponse = await createUser(requestBody)
    expect(createUserResponse.status).toBe(200)

    const username = requestBody.username
    const deleteUserResponse = await deleteUserByName(username)
    expect(deleteUserResponse.status).toBe(200)
    expect(deleteUserResponse.data).toEqual(
      expect.objectContaining({ code: 200, message: username }),
    )
  })

  test('should get user with undefined username', async () => {
    const getUserResponse = await deleteUserByName(undefined)
    expect(getUserResponse.status).toBe(404)
  })
})

describe('User API endpoints: requests with invalid data', () => {
  test('should not create user w/o required properties', async () => {
    const requestBody = userRequestBody
    delete requestBody.id
    const createUserResponse = await createUser(requestBody)
    expect(createUserResponse.status).toBe(200)
    expect(createUserResponse.data.type).toBe('unknown')
  })

  test('should not find user with undefined username', async () => {
    const response = await getUserByName(undefined)
    expect(response.status).toBe(404)
    expect(response.data.type).toBe('error')
    expect(response.data.message).toBe('User not found')
  })

  test('should not find non-exist user', async () => {
    const response = await getUserByName(process.env.TEST_NON_EXISTED_USERNAME)
    expect(response.status).toBe(404)
    expect(response.data.type).toBe('error')
    expect(response.data.message).toBe('User not found')
  })
})
