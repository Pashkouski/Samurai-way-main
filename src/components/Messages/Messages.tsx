import React from "react";
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";




const Messages = () => {

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name='Dimych' id={1} />
                <DialogItem name='Sveta' id={2} />
                <DialogItem name='Alex' id={3} />
                <DialogItem name='Andrey' id={4} />
                <DialogItem name='Andrey' id={5} />
            </div>
            <div className={s.messages}>
                <Dialog text='yo'/>
                <Dialog text='hi'/>
                <Dialog text='Hellow'/>
                <Dialog text='bye'/>
                <Dialog text='yo'/>
            </div>
        </div>
    )


}


export default Messages

