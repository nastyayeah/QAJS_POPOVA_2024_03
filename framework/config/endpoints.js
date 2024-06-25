export const userApiEndpoints = {
  createUser: '/user',
  getUserByName: username => `/user/${username}`,
  updateUserByName: username => `/user/${username}`,
  deleteUserByName: username => `/user/${username}`,
  loginUser: (username, password) =>
    `/user/login?username=${username}&password=${password}`,
}

export const bookStoreApiEndpoints = {
  addBook: '/Books',
  updateBookStore: bookId => `/Books/${bookId}`,
  getBookInfo: bookId => `/Book/?ISBN=${bookId}`,
  deleteBook: '/Book',
  createUserAccount: '/User',
  deleteUserAccount: UserId => `/User/${UserId}`,
  generateUserToken: '/GenerateToken',
}
