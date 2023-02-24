import {initialStateauthReducerType, setUserData} from "../../redux/auth-Reducer";
import {StoreReduxType} from "../../redux/redux-store";
import axios from "axios";
import Header from "./Header";
import React from 'react'
import {connect} from "react-redux";

class HeaderContainer extends React.Component<MessagesPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            this.props.setUserData(response.data)
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

type MessagesPropsType = mapStateToPropsType & mapActionToPropsType


type mapStateToPropsType = {
    data: initialStateauthReducerType
}

type mapActionToPropsType = {
    setUserData: (data: initialStateauthReducerType) => void
}

const MapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    return {
        data: state.auth
    }
}

export default connect(MapStateToProps, {setUserData})(HeaderContainer);