import {DispatchType} from "./redux-store";

export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string | null
    photos: {
        large: string | undefined
        small: string | undefined
    }
    uniqueUrlName: null | string
}



export type initialStateUsersType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}




export const initialState: initialStateUsersType= {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}


export const UsersPageReducer = (
    state: initialStateUsersType = initialState,
    action: DispatchType
) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        }
        case "UN-FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
            return {...state, users: action.payload.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.CurrentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: 'UN-FOLLOW',
        payload: {
            userID
        }
    } as const
}

export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>


export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export const setCurrentPageAC = (CurrentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            CurrentPage
        }
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalUsersCount
        }
    } as const
}