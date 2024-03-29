import React from "react";
import s from "./Posts.module.css"
import {postDataType} from "../../../../redux/profile-reducer";



const Posts = (props: postDataType) => {
    return (
        <div className={s.item}>
            <img src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" alt=""/>
            {props.message}
            <div>

                <button> like {props.likesCount}</button>

            </div>

            <button> dislike</button>
        </div>
    )
}

export default Posts;