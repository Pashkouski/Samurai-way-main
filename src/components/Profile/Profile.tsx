import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { addPosts, DispatchType, postDataType } from '../../redux/state'

type ProfilePageType = {
	postData: Array<postDataType>
	newPostText: string
	dispatch: (action: DispatchType) => void
	// updateNewPostText: (str: string) => void;
}

const Profile = (props: ProfilePageType) => {
	return (
		<div>
			<ProfileInfo />

			<MyPosts
				postData={props.postData}
				dispatch={props.dispatch}
				newPostText={props.newPostText}
				// updateNewPostText={props.updateNewPostText}
			/>
		</div>
	)
}

export default Profile
