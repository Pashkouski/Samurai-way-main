import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, postDataType, profilePageType} from "../../redux/state";

type ProfilePageType = {
    postData: Array<postDataType>
    addPost: (str: string) => void
}


const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} addPost={addPost}/>
        </div>
    )
}

export default Profile;