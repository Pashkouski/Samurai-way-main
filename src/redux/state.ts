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

export type StoreType = {
	_state: RootStateType
	_addMessage: () => void
	_updateNewPostText: (newText: string) => void
	_addNewMessage: (newMessage: string) => void
	_addPost: () => void
	_renderApp: (state: RootStateType) => void
	subscribe: (observer: (state: RootStateType) => void) => void
	getState: () => RootStateType
	dispatch: (action: DispatchType) => void
}
export type DispatchType =
	| addPosts
	| updateNewPostText
	| AddMessageType
	| AddNewMessageType

export type addPosts = {
	type: 'ADD-POSTS'
}
export type updateNewPostText = {
	type: 'UPDATE-NEW-POST-TEXT'
	newText: string
}
export type AddMessageType = {
	type: 'ADD-MESSAGE'
}
export type AddNewMessageType = {
	type: 'ADD-NEW-MESSAGE'
	newMessage: string
}

export let store: StoreType = {
	_state: {
		profilePage: {
			postData: [
				{ id: 1, message: 'Hi, how are you', likesCount: 12 },
				{ id: 2, message: "It's my first post", likesCount: 1 },
				{ id: 2, message: "It's my first post", likesCount: 1 },
				{ id: 2, message: "It's my first post", likesCount: 1 }
			],
			newPostText: ''
		},

		messagesPage: {
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Sveta' },
				{ id: 3, name: 'Alex' },
				{ id: 4, name: 'Andrey' },
				{ id: 5, name: 'Andrey' }
			],
			messages: [
				{ id: 1, message: 'hi' },
				{ id: 2, message: 'Hellow' },
				{ id: 3, message: 'yo' },
				{ id: 4, message: 'bye' },
				{ id: 5, message: 'yo' }
			],
			newMessage: ''
		}
	},

	_addPost() {
		const newPost: postDataType = {
			id: 6,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		}
		this._state.profilePage.postData.push(newPost)
		this._state.profilePage.newPostText = ''
		this._renderApp(this._state)
	},
	_updateNewPostText(newText: string) {
		this._state.profilePage.newPostText = newText
		this._renderApp(this._state)
	},
	_addMessage() {
		const newMessage: messagesType = {
			id: 6,
			message: this._state.messagesPage.newMessage
		}
		this._state.messagesPage.messages.push(newMessage)
		this._state.messagesPage.newMessage = ''
		this._renderApp(this._state)
	},
	_addNewMessage(newMessage: string) {
		this._state.messagesPage.newMessage = newMessage
		this._renderApp(this._state)
	},
	_renderApp(props: RootStateType) {
		console.log('abc')
	},
	subscribe(observer) {
		this._renderApp = observer
	},
	getState() {
		return this._state
	},
	dispatch(action) {
		if (action.type === 'ADD-POSTS') {
			this._addPost()
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._updateNewPostText(action.newText)
		} else if (action.type === 'ADD-MESSAGE') {
			this._addMessage()
		} else if (action.type === 'ADD-NEW-MESSAGE') {
			this._addNewMessage(action.newMessage)
		}
	}
}
// window.store = store
