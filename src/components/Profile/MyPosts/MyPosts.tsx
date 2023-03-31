import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Posts'
import {mapDispatchToPropsType, mapStateToPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type ProfilePageType = mapStateToPropsType & mapDispatchToPropsType


interface IPost {
    message: string
}

const MyPosts = (props: ProfilePageType) => {
    let postsElements = props.postData.map(p => (
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    ))

    /*    let newPostElement = React.createRef<HTMLTextAreaElement>()*/

    let addPostHandler = (value: any) => {
        props.addPost(value.newPostText)
    }
    /*
        let onChangeHandler = () => {
            if (newPostElement.current) {
                let text = newPostElement.current.value
                props.updatePostText(text)
            }
        }*/


    return (
        <div className={s.container}>
            <div>
                My post
                <AddPostFormRedux onSubmit={addPostHandler}/>
            </div>
            <div className={s.post}>{postsElements}</div>
        </div>
    )
}

export default MyPosts


const AddPostForm: React.FC<InjectedFormProps<IPost>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <Field component={'textarea'} name={'newPostText'}
                   placeholder={'Enter your post...'}/>
            <div>
                <button>Add post</button>
            </div>
        </form>)
}
const AddPostFormRedux = reduxForm<IPost>({
    form: 'profileAddPostForm'
})(AddPostForm)