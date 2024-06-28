import { faker } from '@faker-js/faker'

export function generateUserData() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password({
      length: 20,
      pattern: /[a-zA-Z0-9!@#$%^&*]/,
    }),
  }
}
