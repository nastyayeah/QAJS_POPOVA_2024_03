import {generateUserCredentials, generatePersonalUserData} from '../user-fixture.js'

export const userRequestBody = {
  id: 1,
  username: generateUserCredentials().username,
  firstName: generatePersonalUserData().firstName,
  lastName: generatePersonalUserData().lastName,
  email: generateUserCredentials().username,
  password: generateUserCredentials().password,
  phone: generatePersonalUserData().phone,
  userStatus: 0,
}
