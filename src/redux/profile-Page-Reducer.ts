import { DispatchType} from './store'

export type postDataType = {
    likesCount: number
    message: string
    id: number
}
export type profilePageType = {
    postData: Array<postDataType>
    newPostText: string
}


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
		case 'ADD-POSTS': {
			const newPost: postDataType = {
				id: 6,
				message: state.newPostText,
				likesCount: 0
			}
			return {...state, postData: [newPost ,...state.postData], newPostText: ''}
		}
		case 'UPDATE-NEW-POST-TEXT': {
			return {...state, newPostText: action.newText}
		}
		default:
			return state
	}
}
