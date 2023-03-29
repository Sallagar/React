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
    
    unfollow (userId) {return instance.delete(`follow/${userId}`)},
    
    follow (userId) {return instance.post(`follow/${userId}`)},
    
    getProfile (userId) {return  instance.get(`profile/` + userId)}
}

export const authAPI = {
     getMe () {return instance.get(`auth/me`)}
}