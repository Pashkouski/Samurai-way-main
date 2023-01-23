import { DispatchType, postDataType, profilePageType } from './store'




let initialState: profilePageType = {
	postData: [
		{ id: 1, message: 'Hi, how are you', likesCount: 12 },
		{ id: 2, message: "It's my first post", likesCount: 1 },
		{ id: 2, message: "It's my first post", likesCount: 1 },
		{ id: 2, message: "It's my first post", likesCount: 1 }
	],
	newPostText: ''
}


export const ProfilePageReducer = (
	state: profilePageType = initialState,
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
			return state
		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.newText
			return state
		default:
			return state
	}
}
