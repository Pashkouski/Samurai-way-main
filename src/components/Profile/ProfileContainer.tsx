import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUsersType, setProfileUsers} from "../../redux/profile-Page-Reducer";
import {StoreReduxType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


export type mapDispatchToPropsType = {
	setProfileUsers: (profileUsers: ProfileUsersType) => void
}
export type mapStateToPropsType = {
	profileUsers: ProfileUsersType
}

export type PathParamsType = {
	userID: string
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

let mapStateToProps = (state: StoreReduxType) : mapStateToPropsType => ({
	profileUsers: state.profilePage.profileUsers
})


class ProfileContainer extends React.Component<PropsType>{
	componentDidMount() {
		let userId = this.props.match.params?.userID
		if(!userId) {
			userId = ''
		}

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,  {setProfileUsers}) (withUrlDataContainerComponent)
