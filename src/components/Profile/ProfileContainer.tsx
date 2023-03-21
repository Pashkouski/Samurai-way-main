import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileUserThunkCreator, getStatusTC,
    ProfileUsersType, updateStatusTC,
} from "../../redux/profile-reducer";
import {StoreReduxType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

export type mapDispatchToPropsType = {
    getProfileUserThunkCreator: (id: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}
export type mapStateToPropsType = {
    profileUsers: ProfileUsersType
    status: string
}

export type PathParamsType = {
    userID: string
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

let mapStateToProps = (state: StoreReduxType): mapStateToPropsType => ({
    profileUsers: state.profilePage.profileUsers,
    status: state.profilePage.status
})


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userID
        if (!userId) {
            userId = '27653'
        }
        this.props.getProfileUserThunkCreator(userId)
        this.props.getStatusTC(userId)
    }


    render() {


        return (
            <div>
                <Profile
                    profileUsers={this.props.profileUsers}
                    status={this.props.status}
                    updateStatus={this.props.updateStatusTC}
                />
            </div>
        )
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileUserThunkCreator, getStatusTC, updateStatusTC}),
    withRouter,
    WithAuthRedirect
) (ProfileContainer)

