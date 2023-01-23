import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { addPosts, DispatchType, postDataType } from '../../redux/store'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreReduxType} from "../../redux/redux-store";

// type ProfilePageType = {
// 	store: StoreReduxType
// 	// postData: Array<postDataType>
// 	// newPostText: string
// 	// dispatch: (action: DispatchType) => void
// }

const Profile = () => {
	return (
		<div>
			<ProfileInfo />

			<MyPostsContainer
				// store={props.store}
				// postData={props.store.getState().profilePage.postData}
				// dispatch={props.store.dispatch}
				// newPostText={props.store.getState().profilePage.newPostText}
			/>
		</div>
	)
}

export default Profile
