import React from "react";
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";
import {messagesPageType} from "../../redux/state";


const Messages = (props: messagesPageType) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => <Dialog text={m.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        alert(newMessageElement.current?.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElement}

                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}


export default Messages

