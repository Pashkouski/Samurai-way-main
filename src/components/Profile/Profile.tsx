import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUsersType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profileUsers: ProfileUsersType
    status: string
    updateStatus: (status: string) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                profileUsers={props.profileUsers}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
