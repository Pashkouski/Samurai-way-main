import React from "react";
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";
import {dialogsType, messagesType} from "../../redux/state";

type MessagesPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    addMessage: () => void
    addNewMessage: (str: string) => void
    newMessage: string
}


const Messages = (props: MessagesPropsType) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => <Dialog text={m.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        props.addMessage()
    }
    let addNewMessage = () => {
        if (newMessageElement.current) {
            props.addNewMessage(newMessageElement.current.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElement}

                <div>
                    <textarea ref={newMessageElement} onChange={addNewMessage} value={props.newMessage}></textarea>
                </div>

                <div>
                    <button onClick={addMessage}>add message</button>
                </div>

            </div>
        </div>
    )
}


export default Messages

