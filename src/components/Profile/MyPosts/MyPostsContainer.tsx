import React from 'react'
import Post from './Posts/Posts'
import {
	addPostsAC,
	DispatchType,
	postDataType,
	updateNewPostTextAC
} from '../../../redux/store'
import MyPosts from "./MyPosts";

type ProfilePageContainerType = {
	postData: Array<postDataType>
	dispatch: (action: DispatchType) => void
	newPostText: string
}

const MyPostsContainer = (props: ProfilePageContainerType) => {

	let addPost = () => {
		props.dispatch(addPostsAC())
	}

	let updatePostText = (text: string) => {
		props.dispatch(updateNewPostTextAC(text))
	}

	return (
		<MyPosts updatePostText={updatePostText}
				 addPost={addPost}
				 postData={props.postData}
				 newPostText={props.newPostText}
		/>
	)
}

export default MyPostsContainer
