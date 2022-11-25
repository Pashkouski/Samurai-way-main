import React from "react";
import s from "./Posts.module.css"

type PostPropsType = {
    message: string
    count: number
}


const Posts = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" alt=""/>
            {props.message}
            <button>{props.count} like</button>
            <button>dislike </button>
        </div>

    )
}

export default Posts;