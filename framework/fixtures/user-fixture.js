import { faker } from '@faker-js/faker'

export function generateUserCredentials() {
  return {
    username: faker.animal.rabbit(),
    password: faker.internet.password(),
  }
}

export function generatePersonalUserData() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
  }
}
