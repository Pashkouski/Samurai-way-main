import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Posts'
import {mapDispatchToPropsType, mapStateToPropsType} from "./MyPostsContainer";
import {Redirect} from "react-router-dom";

type ProfilePageType = mapStateToPropsType & mapDispatchToPropsType

const MyPosts = (props: ProfilePageType) => {
	let postsElements = props.postData.map(p => (
		<Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
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

	if( !props.isAuth ) return <Redirect to={'/login'}/>

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
