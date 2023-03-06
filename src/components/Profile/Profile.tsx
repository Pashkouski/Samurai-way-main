import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUsersType} from "../../redux/profile-reducer";

type ProfilePropsType = {
	   profileUsers: ProfileUsersType
}


const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo profileUsers={props.profileUsers}/>
			<MyPostsContainer/>
		</div>
	)
}

export default Profile
