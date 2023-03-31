import {DispatchType} from "./redux-store";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


export type postDataType = {
    likesCount: number
    message: string
    id: string
}
export type profilePageType = {
    postData: Array<postDataType>
    newPostText: string
    profileUsers: ProfileUsersType
    status: string
}
export type ProfileUsersType = {
    aboutMe: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number | string
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

let initialState: profilePageType = {
    postData: [
        {id: v1(), message: 'Hi, how are you', likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 1},
        {id: v1(), message: "It's my first post", likesCount: 1},
        {id: v1(), message: "It's my first post", likesCount: 1}
    ],
    newPostText: '',
    profileUsers: {} as ProfileUsersType,
    status: ''
}


export const ProfileReducer = (
    state: profilePageType = initialState,
    action: DispatchType
) => {
    switch (action.type) {
        case 'ADD-POSTS': {
            const newPost: postDataType = {
                id: v1(),
                message: action.newText,
                likesCount: 0
            }
            return {...state, postData: [newPost, ...state.postData], newPostText: ''}
        }
/*        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }*/
        case 'SET-PROFILE-USERS':
            return {...state, profileUsers: action.profileUsers}
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}


export type addPostsType = ReturnType<typeof addPost>
/*export type updateNewPostTextType = ReturnType<typeof updatePostText>*/
export type setProfileUsersType = ReturnType<typeof setProfileUsers>
export type setStatusType = ReturnType<typeof setStatus>


/*
export const updatePostText = (newText: string) =>
    ({
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const)
*/

export const addPost = (newText: string) =>
    ({
        type: 'ADD-POSTS',
        newText: newText
    } as const)

export const setProfileUsers = (profileUsers: ProfileUsersType) => ({
    type: 'SET-PROFILE-USERS',
    profileUsers
} as const)

export const setStatus = (status: string) =>
    ({
        type: 'SET_STATUS', status
    } as const)

export const getProfileUserThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfileUser(userId)
            .then(data => {
                dispatch(setProfileUsers(data))
            })
    }
}

export const getStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setStatus(res))
            })
    }
}

export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(res => {
                    dispatch(setStatus(status))
            })
    }
}
