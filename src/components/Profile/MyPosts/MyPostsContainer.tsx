import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StoreReduxType} from "../../../redux/redux-store";
import {addPost, postDataType, updatePostText} from "../../../redux/profile-reducer";


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
        newPostText: state.profilePage.newPostText,
    }

}


let MyPostsContainer = connect(mapStateToProps, {addPost, updatePostText})(MyPosts)

export default MyPostsContainer
