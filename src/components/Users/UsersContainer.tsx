import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../redux/users-Page-Reducer";
import {DispatchType, StoreReduxType} from "../../redux/redux-store";


export type mapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


export type mapActionToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (CurrentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}


const mapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapActionToProps = (dispatch: (action: DispatchType) => void): mapActionToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (CurrentPage: number) => {
            dispatch(setCurrentPageAC(CurrentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}
let UsersContainer = connect(mapStateToProps, mapActionToProps)(Users)

export default UsersContainer
