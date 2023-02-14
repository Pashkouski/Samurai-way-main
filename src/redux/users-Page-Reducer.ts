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
    isFetching: boolean
}




export const initialState: initialStateUsersType= {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.toggle}
        }

        default:
            return state
    }
}

export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unFollow = (userID: number) => {
    return {
        type: 'UN-FOLLOW',
        payload: {
            userID
        }
    } as const
}

export type followACType = ReturnType<typeof follow>
export type unFollowACType = ReturnType<typeof unFollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>


export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export const setCurrentPage = (CurrentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            CurrentPage
        }
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalUsersCount
        }
    } as const
}
export const toggleIsFetching = (toggle: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            toggle
        }
    } as const
}