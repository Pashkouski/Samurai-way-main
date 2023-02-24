import {DispatchType} from "./redux-store";
import {v1} from "uuid";


export type messagesPageType = {
    newMessage: string
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export type dialogsType = {
	name: string
	id: string
}
export type messagesType = {
	message: string
	id: string
}



let initialState: messagesPageType = {
	dialogs: [
		{ id: v1(), name: 'Dimych' },
		{ id: v1(), name: 'Sveta' },
		{ id: v1(), name: 'Alex' },
		{ id: v1(), name: 'Andrey' },
		{ id: v1(), name: 'Andrey' }
	],
	messages: [
		{ id: v1(), message: 'hi' },
		{ id: v1(), message: 'Hellow' },
		{ id: v1(), message: 'yo' },
		{ id: v1(), message: 'bye' },
		{ id: v1(), message: 'yo' }
	],
	newMessage: ''
}

export const MessagesReducer = (
	state: messagesPageType = initialState,
	action: DispatchType
) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			const newMessage: messagesType = {
				id: v1(),
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



export type AddMessageType = ReturnType<typeof addMessage>
export type AddNewMessageType = ReturnType<typeof addNewMessage>



export const addMessage = () =>
	({
		type: 'ADD-MESSAGE'
	} as const)

export const addNewMessage = (newMessage: string) =>
	({
		type: 'ADD-NEW-MESSAGE',
		newMessage: newMessage
	} as const)


