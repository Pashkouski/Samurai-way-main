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
import {StoreReduxType} from "../../redux/redux-store";

type MessagesPropsContainerType = {
    // dialogs: Array<dialogsType>
    // messages: Array<messagesType>
    // newMessage: string
    // dispatch: (action: DispatchType) => void
    store: StoreReduxType
}

const MessagesPropsContainer  = (props: MessagesPropsContainerType) => {


    let addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    let addNewMessage = (body: string) => {
            props.store.dispatch(addNewMessageAC(body))
    }

    return (
     <Messages addNewMessage={addNewMessage}
               addMessage={addMessage}
               messages={props.store.getState().messagesPage.messages}
               dialogs={props.store.getState().messagesPage.dialogs}
               newMessage={props.store.getState().messagesPage.newMessage}

     />
    )
}

export default MessagesPropsContainer
