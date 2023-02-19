import {DispatchType} from "./redux-store";

export type postDataType = {
    likesCount: number
    message: string
    id: number
}
export type profilePageType = {
    postData: Array<postDataType>
    newPostText: string
	profileUsers: ProfileUsersType
}
export type ProfileUsersType = {
	aboutMe: string
	contacts: {
		github: string | null
		vk: string | null
		facebook: string | null
		instagram:string | null
		twitter: string | null
		website: string | null
		youtube: string | null
		mainLink:string | null
	}
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: {
		small: string | undefined
		large: string | undefined
	}
}

let initialState: profilePageType = {
	postData: [
		{ id: 1, message: 'Hi, how are you', likesCount: 12 },
		{ id: 2, message: "It's my first post", likesCount: 1 },
		{ id: 2, message: "It's my first post", likesCount: 1 },
		{ id: 2, message: "It's my first post", likesCount: 1 }
	],
	newPostText: '',
	profileUsers: {} as ProfileUsersType
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
		case 'SET-PROFILE-USERS':
			return {...state, profileUsers: action.profileUsers}
		default:
			return state
	}
}


export type addPostsType = ReturnType<typeof addPost>
export type updateNewPostTextType = ReturnType<typeof updatePostText>
export type setProfileUsersType = ReturnType<typeof setProfileUsers>


export const updatePostText = (newText: string) =>
	({
		type: 'UPDATE-NEW-POST-TEXT',
		newText: newText
	} as const)

export const addPost = () =>
	({
		type: 'ADD-POSTS'
	} as const)

export const setProfileUsers = (profileUsers: ProfileUsersType) => ({
	type: 'SET-PROFILE-USERS',
	profileUsers
} as const)
