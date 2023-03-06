import {v1} from "uuid";
import {DispatchType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";
import {toggleFollowingInProgress, unFollow} from "./users-Page-Reducer";


export type initialStateauthReducerType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    isAuth: boolean
    fieldsErrors: [],
    resultCode: number
    messages: []
}


let initialState: initialStateauthReducerType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false,
    fieldsErrors: [],
    resultCode: 1,
    messages: []
}


export const authReducer = (
    state = initialState,
    action: DispatchType
) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.payload.data, isAuth: true}
        default:
            return state
    }
}


export type setUserDataType = ReturnType<typeof setUserData>


export const setUserData = (data: initialStateauthReducerType) => ({
    type: 'SET-USER-DATA',
    payload: {
        data
    }
} as const)


export const authThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.auth().then(data => {
            if(data.resultCode === 0){
                dispatch(setUserData(data))
            }
        })
    }
}
