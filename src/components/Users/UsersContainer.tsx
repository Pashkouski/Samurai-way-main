import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unFollow,
    UsersType
} from "../../redux/users-Page-Reducer";
import {StoreReduxType} from "../../redux/redux-store";
import React from "react";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";


type MessagesPropsType = mapStateToPropsType & mapActionToPropsType

class UsersAPIComponent extends React.Component<MessagesPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(false)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.toggleIsFetching(true)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber,  this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
        })
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
                        unFollow={this.props.unFollow}
                        follow={this.props.follow}
                        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                        followingInProgress={this.props.followingInProgress}
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
}
export type mapActionToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (CurrentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (toggle: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
}


const mapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


let UsersContainer = connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,  toggleFollowingInProgress})(UsersAPIComponent)

export default UsersContainer
