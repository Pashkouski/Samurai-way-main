import {combineReducers, legacy_createStore as createStore} from 'redux'
import {ProfileReducer} from "./profile-reducer";
import {AddMessageType, AddNewMessageType, MessagesReducer} from "./messages-reducer";
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
import {updateNewPostTextType} from "./profile-reducer";
import {setProfileUsersType} from "./profile-reducer";
import {authReducer, setUserDataType} from "./auth-Reducer";


export type DispatchType =
    | addPostsType
    | updateNewPostTextType
    | AddMessageType
    | AddNewMessageType
    | followType
    | unFollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType
    | setProfileUsersType
    | setUserDataType
    | toggleFollowingInProgressType


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersPageReducer,
    auth: authReducer
})

export type StoreReduxType = ReturnType<typeof reducers>


export let store = createStore(reducers)





