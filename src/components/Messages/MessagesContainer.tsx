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
import {StoreContext} from "../../StoreContext";

// type MessagesPropsContainerType = {
//     // dialogs: Array<dialogsType>
//     // messages: Array<messagesType>
//     // newMessage: string
//     // dispatch: (action: DispatchType) => void
//     store: StoreReduxType
// }

const MessagesPropsContainer = () => {

    return (

        <StoreContext.Consumer>
            {

                (store) => {
                    const addMessage = () => {
                        store.dispatch(addMessageAC())
                    }
                    const addNewMessage = (body: string) => {
                        store.dispatch(addNewMessageAC(body))
                    }
                    return (
                        <Messages addNewMessage={addNewMessage}
                                  addMessage={addMessage}
                                  messages={store.getState().messagesPage.messages}
                                  dialogs={store.getState().messagesPage.dialogs}
                                  newMessage={store.getState().messagesPage.newMessage}

                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MessagesPropsContainer
