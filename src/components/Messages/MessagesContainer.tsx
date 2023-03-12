import React from 'react'
import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessage, addNewMessage, dialogsType, messagesType} from "../../redux/messages-reducer";
import { StoreReduxType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


export type mapStateToPropsType = {
    newMessage: string
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

export type mapDispatchToPropsType = {
    addNewMessage: (body: string) => void
    addMessage: () => void
}


const mapStateToProps = (state: StoreReduxType) : mapStateToPropsType => {
    return {
        newMessage: state.messagesPage.newMessage,
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {addNewMessage, addMessage}),
    WithAuthRedirect
)(Messages)

