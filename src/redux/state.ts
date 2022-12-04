import {renderApp} from "../render";

export type messagesType = {
    message: string
    id: number
}
export type dialogsType = {
    name: string
    id: number
}
export type postDataType = {
    likesCount: number
    message: string
    id: number
}


export type profilePageType = {
    postData: Array<postDataType>
    newPostText: string
}
export type messagesPageType = {
    newMessage: string
    dialogs: Array<dialogsType>
    messages: Array<messagesType>

}
export type RootStateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}

let state = {
    profilePage: {
        postData: [
            {id: 1, message: "Hi, how are you", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 1},
            {id: 2, message: "It's my first post", likesCount: 1},
            {id: 2, message: "It's my first post", likesCount: 1}
        ],
        newPostText: ""
    },

    messagesPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Alex"},
            {id: 4, name: "Andrey"},
            {id: 5, name: "Andrey"},

        ],
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "Hellow"},
            {id: 3, message: "yo"},
            {id: 4, message: "bye"},
            {id: 5, message: "yo"}
        ],
        newMessage: ''
    }
}

export const addPost = () => {
    const newPost: postDataType = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    renderApp(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderApp(state);
}

export const addMessage = () => {
    const newMessage: messagesType = {
        id: 6,
        message: state.messagesPage.newMessage
    }
    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessage = ''
    renderApp(state);
}

export const addNewMessage = (newMessage: string) => {
    state.messagesPage.newMessage = newMessage
    renderApp(state);
}

export default state