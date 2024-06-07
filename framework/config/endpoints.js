export const userApiEndpoints = {
    createUser: '/user',
    getUserByName : (username)=>`/user/${username}`,
    updateUserByName: (username) => `/user/${username}`,
    deleteUserByName:(username) => `/user/${username}`,
    loginUser: (username,password) => `/user/login?username=${username}&password=${password}`
}
