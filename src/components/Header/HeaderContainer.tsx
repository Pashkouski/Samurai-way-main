import {authThunkCreator, initialStateauthReducerType, setUserData} from "../../redux/auth-Reducer";
import {StoreReduxType} from "../../redux/redux-store";
import axios from "axios";
import Header from "./Header";
import React from 'react'
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<MessagesPropsType> {
    componentDidMount() {
        this.props.authThunkCreator()
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
    authThunkCreator: () => void
}

const MapStateToProps = (state: StoreReduxType): mapStateToPropsType => {
    return {
        data: state.auth
    }
}

export default connect(MapStateToProps, {authThunkCreator})(HeaderContainer);