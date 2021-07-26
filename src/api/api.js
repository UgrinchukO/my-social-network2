import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "8a5c27e2-deae-4f8b-b7e0-a258ff10cea7"}
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(id) {
        return instance.post(`follow/${id}`, {})
    },
    unfoldedUsers(id) {
        return instance.delete(`follow/${id}`)
    },
    getProfile(userId) {
        return instance.get('profile/' + userId)
    }
}

export const authMe = {
    me() {
        return instance.get('auth/me/')

    }
}