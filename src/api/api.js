import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f02c7f75-61ce-4757-8f6e-8de98338add1'
    },
})

export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUsers (u) {
        return instance.delete(`follow/${u.id}`)
    },
    followUsers (u) {
        return instance.post(`follow/${u.id}`, {}, {})
    }
}