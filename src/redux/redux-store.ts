import {combineReducers, legacy_createStore as createStore} from 'redux'
import {ProfilePageReducer} from "./profile-Page-Reducer";
import {AddMessageType, AddNewMessageType, MessagesPageReducer} from "./messages-Page-Reducer";
import {
    followACType, setCurrentPageACType,
    setTotalUsersCountACType,
    setUsersACType, toggleIsFetchingACType,
    unFollowACType,
    UsersPageReducer
} from "./users-Page-Reducer";
import {addPostsType} from "./profile-Page-Reducer";
import {updateNewPostTextType} from "./profile-Page-Reducer";
import {setProfileUsersType} from "./profile-Page-Reducer";


export type DispatchType =
    | addPostsType
    | updateNewPostTextType
    | AddMessageType
    | AddNewMessageType
    | followACType
    | unFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | setProfileUsersType


let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer,
    usersPage: UsersPageReducer
})

export type StoreReduxType = ReturnType<typeof reducers>


export let store = createStore(reducers)





