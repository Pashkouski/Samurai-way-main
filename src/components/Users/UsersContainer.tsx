import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-Page-Reducer";
import {DispatchType, StoreReduxType} from "../../redux/redux-store";



export type mapStateToPropsType = {
    users: Array<UsersType>


}
export type mapActionToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}


const mapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
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
    }
}
let UsersContainer = connect(mapStateToProps, mapActionToProps)(Users)

export default UsersContainer
