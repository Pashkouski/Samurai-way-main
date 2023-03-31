import {applyMiddleware, combineReducers, legacy_createStore as createStore, Reducer} from 'redux'
import {ProfileReducer, setStatusType} from "./profile-reducer";
import {AddMessageType, MessagesReducer} from "./messages-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {
    followType,
    setCurrentPageType,
    setTotalUsersCountType,
    setUsersType,
    toggleFollowingInProgressType,
    toggleIsFetchingType,
    unFollowType,
    UsersPageReducer
} from "./users-Page-Reducer";
import {addPostsType} from "./profile-reducer";
import {setProfileUsersType} from "./profile-reducer";
import {authReducer, setUserDataType} from "./auth-Reducer";



export type DispatchType =
    | addPostsType
/*    | updateNewPostTextType*/
    | AddMessageType
/*    | AddNewMessageType*/
    | followType
    | unFollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType
    | setProfileUsersType
    | setUserDataType
    | toggleFollowingInProgressType
    | setStatusType


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersPageReducer,
    auth: authReducer,
    form: formReducer
})



export type StoreReduxType = ReturnType<typeof reducers>


export let store = createStore(reducers, applyMiddleware(thunkMiddleware))





// @ts-ignore
window.store = store

