import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

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
