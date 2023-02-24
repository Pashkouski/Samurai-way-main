import {v1} from "uuid";
import {DispatchType} from "./redux-store";


export type initialStateauthReducerType = {
    data: {
        id: number | null,
        email: string | null,
        login: string | null,
    }
    isAuth: boolean
}


let initialState: initialStateauthReducerType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
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
