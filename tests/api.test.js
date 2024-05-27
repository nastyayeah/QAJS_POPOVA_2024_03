import axios from 'axios'

describe('API tests: Pet Store valid test data', () => {
  let petId

  afterEach(async () => {
    const url = `https://petstore.swagger.io/v2/pet/${petId}`
    await axios.delete(url)
  })

  test('should add a new pet to the store', async () => {
    const data = {
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: 5,
        category: {
          id: 5,
          name: 'Cat',
        },
        name: 'Misa',
        photoUrls: [],
        tags: [
          {
            id: 5,
            name: 'Cat',
          },
        ],
        status: 'available',
      },
    }

    const response = await axios.post(data.url, data.body)
    expect(response.status).toBe(200)
    expect(response.data).toEqual(data.body)

    petId = response.data.id
  })

  test('should get an added pet from the store', async () => {
    const data = {
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: 5,
        category: {
          id: 5,
          name: 'Cat',
        },
        name: 'Misa',
        photoUrls: [],
        tags: [
          {
            id: 5,
            name: 'Cat',
          },
        ],
        status: 'available',
      },
    }
    const createPetResponse = await axios.post(data.url, data.body)
    expect(createPetResponse.status).toBe(200)
    petId = createPetResponse.data.id
    const getPetUrl = data.url + `/${petId}`

    const getResponse = await axios.get(getPetUrl)
    expect(getResponse.status).toBe(200)
    expect(getResponse.data).toEqual(data.body)
  })

  test('should update an existing pet', async () => {
    const data = {
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: 5,
        category: {
          id: 5,
          name: 'Cat',
        },
        name: 'Misa',
        photoUrls: [],
        tags: [
          {
            id: 5,
            name: 'Cat',
          },
        ],
        status: 'available',
      },
    }

    const updatedData = {
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: 5,
        category: {
          id: 5,
          name: 'Dog',
        },
        name: 'Koby',
        photoUrls: [],
        tags: [
          {
            id: 5,
            name: 'Dog',
          },
        ],
        status: 'sold',
      },
    }

    const createPetResponse = await axios.post(data.url, data.body)
    expect(createPetResponse.status).toBe(200)

    const updatePetResponse = await axios.put(updatedData.url, updatedData.body)
    expect(updatePetResponse.status).toBe(200)
    expect(updatePetResponse.data).toEqual(updatedData.body)

    petId = updatePetResponse.data.id
  })
})

describe('API tests: Pet Store invalid test data', () => {
  test('should not create a new pet with string pet id', async () => {
    let errorResponse
    const invalidData = {
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: 'notFound',
        category: {
          id: 'notFound',
          name: 'Cat',
        },
        name: 'Misa',
        photoUrls: [],
        tags: [
          {
            id: 'notFound',
            name: 'Cat',
          },
        ],
        status: 'available',
      },
    }
    try {
      await axios.post(invalidData.url, invalidData.body)
    } catch (err) {
      errorResponse = err.response
    }
    expect(errorResponse.status).toBe(500)
    expect(errorResponse.data.message).toBe('something bad happened')
  })

  test('should not find not existed pet', async () => {
    const notExistedPetUrl = 'https://petstore.swagger.io/v2/pet/2345'
    let errorResponse

    try {
      await axios.get(notExistedPetUrl)
    } catch (err) {
      errorResponse = err.response
    }
    expect(errorResponse.status).toBe(404)
    expect(errorResponse.data.message).toBe('Pet not found')
  })

  test('should not delete not existed pet', async () => {
    const notExistedPetUrl = 'https://petstore.swagger.io/v2/pet/404'
    let errorResponse

    try {
      await axios.delete(notExistedPetUrl)
    } catch (err) {
      errorResponse = err.response
    }
    expect(errorResponse.status).toBe(404)
  })

  test('should not delete pet with invalid pet id', async () => {
    const invalidPetIdUrl = 'https://petstore.swagger.io/v2/pet/notFound'
    let errorResponse
    try {
      await axios.delete(invalidPetIdUrl)
    } catch (err) {
      errorResponse = err.response
    }
    expect(errorResponse.status).toBe(404)
  })
})
