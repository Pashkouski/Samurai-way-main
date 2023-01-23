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

type MessagesPropsType = {
    addNewMessage: (body: string) => void
    addMessage: () => void
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessage: string
}

const Messages = (props: MessagesPropsType) => {
    let dialogsElements = props.dialogs.map(d => (
        <DialogItem name={d.name} id={d.id}/>
    ))
    let messagesElement = props.messages.map(m => <Dialog text={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        props.addMessage()
    }
    let addNewMessage = () => {
        if (newMessageElement.current) {
            let body = newMessageElement.current.value
            props.addNewMessage(body)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElement}

                <div>
					<textarea
                        ref={newMessageElement}
                        onChange={addNewMessage}
                        value={props.newMessage}
                    ></textarea>
                </div>

                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Messages
