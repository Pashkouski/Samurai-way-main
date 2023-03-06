import {connect} from "react-redux";
import Users from "./Users";
import {
    followThunkCreator,
    getUsersThunkCreator,
    onPageChangedThunkCreator, unFollowThunkCreator,
    UsersType
} from "../../redux/users-Page-Reducer";
import {StoreReduxType} from "../../redux/redux-store";
import React from "react";
import Preloader from "../Preloader/Preloader";


export type MessagesPropsType = mapStateToPropsType & mapActionToPropsType

class UsersAPIComponent extends React.Component<MessagesPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangedThunkCreator(pageNumber, this.props.pageSize)
    }


    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <>
                {this.props.isFetching
                    ? <Users
                        pages={pages}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        followingInProgress={this.props.followingInProgress}
                        followThunkCreator={this.props.followThunkCreator}
                        unFollowThunkCreator={this.props.unFollowThunkCreator}
                        isAuth={this.props.isAuth}
                    />
                    : <Preloader/>}

            </>
        );
    }
}


export type mapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    isAuth: boolean
}
export type mapActionToPropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageChangedThunkCreator: (pageNumber: number, pageSize: number) => void
    followThunkCreator: (id: number) => void
    unFollowThunkCreator: (id: number) => void
}


const mapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}


let UsersContainer = connect(mapStateToProps,
    {
       followThunkCreator, unFollowThunkCreator,
        getUsersThunkCreator, onPageChangedThunkCreator
    })(UsersAPIComponent)

export default UsersContainer
