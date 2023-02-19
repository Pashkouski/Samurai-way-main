import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUsersType, setProfileUsers} from "../../redux/profile-Page-Reducer";
import {StoreReduxType} from "../../redux/redux-store";



export type mapDispatchToPropsType = {
	setProfileUsers: (profileUsers: ProfileUsersType) => void
}
export type mapStateToPropsType = {
	profileUsers: ProfileUsersType
}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: StoreReduxType) : mapStateToPropsType => ({
	profileUsers: state.profilePage.profileUsers
})


class ProfileContainer extends React.Component<ProfileContainerPropsType>{

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
			this.props.setProfileUsers(response.data)
		})

	}


	render() {
		return (
			<div>
				<Profile profileUsers={this.props.profileUsers}/>
			</div>
		)
	}
}



export default connect(mapStateToProps,  {setProfileUsers}) (ProfileContainer)
