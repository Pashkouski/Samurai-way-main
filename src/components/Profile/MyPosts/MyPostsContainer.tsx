import React from 'react'
import Post from './Posts/Posts'
import {
	addPostsAC,
	DispatchType,
	postDataType,
	updateNewPostTextAC
} from '../../../redux/store'
import MyPosts from "./MyPosts";
import {StoreReduxType} from "../../../redux/redux-store";

type ProfilePageContainerType = {
	store: StoreReduxType
}

const MyPostsContainer = (props: ProfilePageContainerType) => {

	let addPost = () => {
		props.store.dispatch(addPostsAC())
	}

	let updatePostText = (text: string) => {
		props.store.dispatch(updateNewPostTextAC(text))
	}

	return (
		<MyPosts updatePostText={updatePostText}
				 addPost={addPost}
				 postData={props.store.getState().profilePage.postData}
				 newPostText={props.store.getState().profilePage.newPostText}
		/>
	)
}

export default MyPostsContainer
