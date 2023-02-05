import React from 'react'
import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessageAC, addNewMessageAC, dialogsType, messagesType} from "../../redux/messages-Page-Reducer";
import {DispatchType, StoreReduxType} from "../../redux/redux-store";


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
        messages: state.messagesPage.messages
    }
}//{ type: "ADD-MESSAGE" | "ADD-NEW-MESSAGE"; newMessage?: string; }  === DispatchType    /*найти как сократить, понятно но много...*/


const mapDispatchToProps = (dispatch:(action: DispatchType) => void) : mapDispatchToPropsType=> {
    return {
        addNewMessage: (body: string) => {
            addNewMessage: dispatch(addNewMessageAC(body))
        },
        addMessage: () => {
            addMessage:  dispatch(addMessageAC())
        }
    }
}
let MessagesPropsContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesPropsContainer