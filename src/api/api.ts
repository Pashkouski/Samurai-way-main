import axios from "axios";
import {initialStateauthReducerType} from "../redux/auth-Reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '205fb002-e5ab-4a9d-8440-8b997d10d8ce'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            });
    },
    Follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(res => {
                return res.data
            });
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => {
                return res.data
            });
    }

}

export const profileAPI = {
    getProfileUser(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(res => {
                return res.data
            })
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(res => {
                return res.data
            })
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(res => {
                    return res.data
            })
    }
}

export const authAPI = {
    auth() {
        return instance.get<initialStateauthReducerType>(`auth/me`)
            .then(res => {
                return res.data
            })
    }
}

