import React from "react";
import s from "./MyPosts.module.css"
import Post from './Posts/Posts'



let postData = [
    {id: 1, message: "Hi, how are you", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 1},

]


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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;