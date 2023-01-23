import React from 'react'
import s from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem'
import Dialog from './Dialog/Dialog'
import {
    addMessageAC,
    addNewMessageAC,
    dialogsType,
    DispatchType,
    messagesType
} from '../../redux/store'
import Messages from "./Messages";

type MessagesPropsContainerType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessage: string
    dispatch: (action: DispatchType) => void
}

const MessagesPropsContainer  = (props: MessagesPropsContainerType) => {


    let addMessage = () => {
        props.dispatch(addMessageAC())
    }
    let addNewMessage = (body: string) => {
            props.dispatch(addNewMessageAC(body))
    }

    return (
     <Messages addNewMessage={addNewMessage}
               addMessage={addMessage}
               messages={props.messages}
               dialogs={props.dialogs}
               newMessage={props.newMessage}

     />
    )
}

export default MessagesPropsContainer
