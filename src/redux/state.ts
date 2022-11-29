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
}
export type MessagesPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

export type RootStateType = {
    profilePage: profilePageType
    MessagesPage: MessagesPageType
}

let state = {
    profilePage: {
        postData: [
            {id: 1, message: "Hi, how are you", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 1},
            {id: 2, message: "It's my first post", likesCount: 1},
            {id: 2, message: "It's my first post", likesCount: 1}

        ]
    },

    MessagesPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Alex"},
            {id: 4, name: "Andrey"},
            {id: 5, name: "Andrey"}
        ],
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "Hellow"},
            {id: 3, message: "yo"},
            {id: 4, message: "bye"},
            {id: 5, message: "yo"}
        ]
    }
}

export default state