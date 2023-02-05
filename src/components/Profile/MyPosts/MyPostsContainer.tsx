import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {DispatchType, StoreReduxType} from "../../../redux/redux-store";
import {addPostsAC, postDataType, updateNewPostTextAC} from "../../../redux/profile-Page-Reducer";


export type mapStateToPropsType = {
    postData: Array<postDataType>
    newPostText: string
}

export type mapDispatchToPropsType = {
    addPost: () => void
    updatePostText: (text: string) => void
}

const mapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }

}

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

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
