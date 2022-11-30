import React from "react";
import s from "./MyPosts.module.css"
import Post from './Posts/Posts'
import {profilePageType} from "../../../redux/state";
import Posts from "./Posts/Posts";






const MyPosts = (props: profilePageType) => {
    let postsElements = props.postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.container}>
            <div>
                My post
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>
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