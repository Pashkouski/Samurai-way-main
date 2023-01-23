import React from 'react'
import Post from './Posts/Posts'
import {
    addPostsAC,
    DispatchType,
    postDataType,
    updateNewPostTextAC
} from '../../../redux/store'
import MyPosts from "./MyPosts";
import {StoreReduxType} from "../../../redux/redux-store";
import {StoreContext} from '../../../StoreContext';

// type ProfilePageContainerType = {
// 	store: StoreReduxType
// }

const MyPostsContainer = () => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostsAC())
                    }

                    let updatePostText = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }
                    return (
                        <MyPosts updatePostText={updatePostText}
                                 addPost={addPost}
                                 postData={store.getState().profilePage.postData}
                                 newPostText={store.getState().profilePage.newPostText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer
