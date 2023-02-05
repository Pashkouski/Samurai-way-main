import { DispatchType} from './store'


export type messagesPageType = {
    newMessage: string
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export type dialogsType = {
	name: string
	id: number
}
export type messagesType = {
	message: string
	id: number
}



let initialState: messagesPageType = {
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

export const MessagesPageReducer = (
	state: messagesPageType = initialState,
	action: DispatchType
) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			const newMessage: messagesType = {
				"id": 6,
				"message": state.newMessage
			}
		return {...state, messages: [...state.messages, newMessage], newMessage: ''}

		case 'ADD-NEW-MESSAGE':
			// state.newMessage = action.newMessage
			return {...state, newMessage: action.newMessage}
		default:
			return state

	}
}
