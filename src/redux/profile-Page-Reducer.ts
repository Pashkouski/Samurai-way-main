import React from 'react'
import { DispatchType, postDataType, profilePageType } from './state'

export const ProfilePageReducer = (
	state: profilePageType,
	action: DispatchType
) => {
	switch (action.type) {
		case 'ADD-POSTS':
			const newPost: postDataType = {
				id: 6,
				message: state.newPostText,
				likesCount: 0
			}
			state.postData.push(newPost)
			state.newPostText = ''
			// this._renderApp(this._state)
			break
		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.newText
			// this._renderApp(this._state)
			break
	}
	return state
}
