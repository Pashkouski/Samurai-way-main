import React from 'react'
import { DispatchType, messagesPageType, messagesType } from './state'

export const MessagesPageReducer = (
	state: messagesPageType,
	action: DispatchType
) => {
	if (action.type === 'ADD-MESSAGE') {
		const newMessage: messagesType = {
			id: 6,
			message: state.newMessage
		}
		state.messages.push(newMessage)
		state.newMessage = ''
		// this._renderApp(this._state)
	} else if (action.type === 'ADD-NEW-MESSAGE') {
		state.newMessage = action.newMessage
	}
}
