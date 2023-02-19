import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    UsersType
} from "../../redux/users-Page-Reducer";
import {DispatchType, StoreReduxType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import Preloader from "../Preloader/Preloader";


type MessagesPropsType = mapStateToPropsType & mapActionToPropsType

class UsersAPIComponent extends React.Component<MessagesPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(true)

        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
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
}
export type mapActionToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (CurrentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (toggle: boolean) => void
}


const mapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


let UsersContainer = connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersAPIComponent)

export default UsersContainer
