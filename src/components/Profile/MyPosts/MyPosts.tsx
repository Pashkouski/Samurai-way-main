import React from "react";
import s from "./MyPosts.module.css"
import Post from './Posts/Posts'


let postData = [
    {id: 1, message: "Hi, how are you", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 1},
    {id: 2, message: "It's my first post", likesCount: 1},
    {id: 2, message: "It's my first post", likesCount: 1}

]

let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;