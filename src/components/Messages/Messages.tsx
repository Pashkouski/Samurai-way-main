import React from 'react'
import s from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem'
import Dialog from './Dialog/Dialog'
import {mapDispatchToPropsType, mapStateToPropsType} from "./MessagesContainer";


export type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType

const Messages = (props: MessagesPropsType) => {

    let dialogsElements = props.dialogs.map(d => (
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    ))
    let messagesElement = props.messages.map(m => <Dialog key={m.id} text={m.message}/>)

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

