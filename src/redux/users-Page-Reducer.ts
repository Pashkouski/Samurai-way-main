import {DispatchType} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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
    followingInProgress: Array<number>
}


export const initialState: initialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
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
        case "TOGGLE-FOLLOWING-IN-PROGRESS": {
            return {
                ...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }

        default:
            return state
    }
}
export type followType = ReturnType<typeof follow>
export type unFollowType = ReturnType<typeof unFollow>
export type setUsersType = ReturnType<typeof setUsers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingInProgressType = ReturnType<typeof toggleFollowingInProgress>

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
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
        payload: {
            isFetching,
            userId
        }
    } as const
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(false))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(true))
        })
    }
}

export const onPageChangedThunkCreator = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items))
        })
    }
}

export const followThunkCreator = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        usersAPI.Follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(toggleFollowingInProgress(false, id))
        })
    }
}

export const unFollowThunkCreator = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        usersAPI.unFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(id))
                }
                dispatch(toggleFollowingInProgress(false, id))
            })

    }
}
