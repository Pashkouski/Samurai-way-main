import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, dialogsType, messagesType} from "../../redux/messages-reducer";
import { StoreReduxType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose, Dispatch} from "redux";


export type mapStateToPropsType = {
    newMessage: string
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

export type mapDispatchToPropsType = {
    addNewMessage: (body: string) => void
    addMessage: (body: string) => void
}


const mapStateToProps = (state: StoreReduxType) : mapStateToPropsType => {
    return {
        newMessage: state.messagesPage.newMessage,
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}

/*let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addNewMessage(newMessageText))
        }
    }
}*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect
)(Dialogs)

