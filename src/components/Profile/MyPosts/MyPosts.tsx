import React from "react";
import s from "./MyPosts.module.css"
import Post from './Posts/Posts'

const MyPosts = () => {
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
                <Post message="Hi, how are you" count={121}/>
                <Post message="It's my first post" count={24}/>
            </div>
        </div>
    )
}

export default MyPosts;