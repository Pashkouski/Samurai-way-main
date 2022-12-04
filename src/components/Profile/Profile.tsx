import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, postDataType, profilePageType, updateNewPostText} from "../../redux/state";

type ProfilePageType = {
    postData: Array<postDataType>
    newPostText: string
    addPost: (str: string) => void
    updateNewPostText: (str: string) => void
}


const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     addPost={addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={updateNewPostText}/>
        </div>
    )
}

export default Profile;