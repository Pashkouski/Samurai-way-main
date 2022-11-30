import React from "react";
import s from "./MyPosts.module.css"
import Post from './Posts/Posts'
import {profilePageType} from "../../../redux/state";



const MyPosts = (props: profilePageType) => {
    let postsElements = props.postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        alert(newPostElement.current?.value)
    }
    return (
        <div className={s.container}>
            <div>
                My post
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={ addPost } >
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