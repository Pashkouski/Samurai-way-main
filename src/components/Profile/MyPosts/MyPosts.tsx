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
	postData: Array<postDataType>
	dispatch: (action: DispatchType) => void
	newPostText: string
}

const MyPosts = (props: ProfilePageType) => {
	let postsElements = props.postData.map(p => (
		<Post id={p.id} message={p.message} likesCount={p.likesCount} />
	))

	let newPostElement = React.createRef<HTMLTextAreaElement>()

	let addPost = () => {
		props.dispatch(addPostsAC())
	}

	let updatePostText = () => {
		if (newPostElement.current) {
			props.dispatch(updateNewPostTextAC(newPostElement.current.value))
		}
	}

	return (
		<div className={s.container}>
			<div>
				My post
				<div>
					<textarea
						onChange={updatePostText}
						ref={newPostElement}
						value={props.newPostText}
					/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.post}>{postsElements}</div>
		</div>
	)
}

export default MyPosts
