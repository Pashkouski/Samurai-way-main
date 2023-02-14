import React from 'react'
import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessage, addNewMessage, dialogsType, messagesType} from "../../redux/messages-Page-Reducer";
import { StoreReduxType} from "../../redux/redux-store";


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
}
// const mapDispatchToProps = (dispatch:(action: DispatchType) => void) : mapDispatchToPropsType=> {
//     return {
//         addNewMessage: (body: string) => {
//             addNewMessage: dispatch(addNewMessageAC(body))
//         },
//         addMessage: () => {
//             addMessage:  dispatch(addMessageAC())
//         }
//     }
// }
let MessagesPropsContainer = connect(mapStateToProps, {addNewMessage, addMessage})(Messages);

export default MessagesPropsContainer