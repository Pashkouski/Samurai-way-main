import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '205fb002-e5ab-4a9d-8440-8b997d10d8ce'
    }
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}

export const Follow = (id: number) => {
    return instance.post(`follow/${id}`)
        .then(response => {
            return response.data
        });
}

export const unFollow = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        });
}
