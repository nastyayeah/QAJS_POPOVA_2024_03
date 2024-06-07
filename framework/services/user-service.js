import {userApi} from './api.js'
import {userApiEndpoints } from '../config/endpoints.js'

export async function createUser (requestBody) {
    try{
        const response = await userApi.post(userApiEndpoints.createUser, requestBody)
        return {status:response.status, data:response.data}
    }
    catch(error){
        console.error('Failed to fetch user: ', error);
    }
}


export async function deleteUserByName (username) {
    try{
        const response = await userApi.delete(userApiEndpoints.deleteUserByName(username) )
        return {status:response.status, data:response.data}
    }
    catch(error){
        console.error('Failed to fetch user: ', error);
    }
}

export async function getUserByName (username) {
    try{
        const response = await userApi.get(userApiEndpoints.getUserByName(username) )
        return {status:response.status, data:response.data}
    }
    catch(error){
        console.error('Failed to fetch user: ', error);
    }
}

export async function updateUserByName (username,requestBody) {
    try{
        const response = await userApi.put(userApiEndpoints.updateUserByName(username), requestBody)
        return {status:response.status, data:response.data}
    }
    catch(error){
        console.error('Failed to fetch user: ', error);
    }
}