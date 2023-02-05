import {combineReducers, legacy_createStore as createStore} from 'redux'
import {addPosts, ProfilePageReducer, updateNewPostText} from "./profile-Page-Reducer";
import {AddMessageType, AddNewMessageType, MessagesPageReducer} from "./messages-Page-Reducer";
import {followACType, setUsersACType, unFollowACType, UsersPageReducer} from "./users-Page-Reducer";


export type DispatchType =
    | addPosts
    | updateNewPostText
    | AddMessageType
    | AddNewMessageType
    | followACType
    | unFollowACType
    | setUsersACType



let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer,
    usersPage: UsersPageReducer
})

export type StoreReduxType = ReturnType<typeof reducers>



export let store = createStore(reducers)





