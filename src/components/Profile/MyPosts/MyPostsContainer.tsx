import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StoreReduxType} from "../../../redux/redux-store";
import {addPost, postDataType, updatePostText} from "../../../redux/profile-reducer";


export type mapStateToPropsType = {
    postData: Array<postDataType>
    newPostText: string
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    addPost: () => void
    updatePostText: (text: string) => void
}

const mapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        isAuth: state.auth.isAuth
    }

}

/*
const mapDispatchToProps = (dispatch: (action: DispatchType) => void):mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostsAC())
        },
        updatePostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}
*/

let MyPostsContainer = connect(mapStateToProps, {addPost, updatePostText})(MyPosts)

export default MyPostsContainer
