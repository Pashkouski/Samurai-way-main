import React from "react";
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";
import {MessagesPageType, RootStateType} from "../../redux/state";


const Messages = (props:MessagesPageType) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Dialog text={m.message}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )


}


export default Messages

