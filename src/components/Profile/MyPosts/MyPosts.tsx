import React from "react";
import s from "./MyPosts.module.css"
import Post from './Posts/Posts'
import {postDataType, profilePageType} from "../../../redux/state";

type ProfilePageType = {
    postData: Array<postDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (str: string) => void
}


const MyPosts = (props: ProfilePageType) => {
    let postsElements = props.postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.container}>
            <div>
                My post
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;