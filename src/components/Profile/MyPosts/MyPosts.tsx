import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Posts'
import {
	addPostsAC,
	DispatchType,
	postDataType,
	updateNewPostTextAC
} from '../../../redux/store'

type ProfilePageType = {
	updatePostText: (text: string) => void
	addPost: () => void
	postData: Array<postDataType>
	newPostText: string
}

const MyPosts = (props: ProfilePageType) => {
	let postsElements = props.postData.map(p => (
		<Post id={p.id} message={p.message} likesCount={p.likesCount} />
	))

	let newPostElement = React.createRef<HTMLTextAreaElement>()

	let addPostHandler = () => {
		props.addPost()
	}

	let onChangeHandler = () => {
		if (newPostElement.current) {
			let text = newPostElement.current.value
			props.updatePostText(text)
		}
	}

	return (
		<div className={s.container}>
			<div>
				My post
				<div>
					<textarea
						onChange={onChangeHandler}
						ref={newPostElement}
						value={props.newPostText}
					/>
				</div>
				<div>
					<button onClick={addPostHandler}>Add post</button>
				</div>
			</div>
			<div className={s.post}>{postsElements}</div>
		</div>
	)
}

export default MyPosts
