import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { addPosts, DispatchType, postDataType } from '../../redux/store'

type ProfilePageType = {
	postData: Array<postDataType>
	newPostText: string
	dispatch: (action: DispatchType) => void
}

const Profile = (props: ProfilePageType) => {
	return (
		<div>
			<ProfileInfo />

			<MyPosts
				postData={props.postData}
				dispatch={props.dispatch}
				newPostText={props.newPostText}
			/>
		</div>
	)
}

export default Profile
