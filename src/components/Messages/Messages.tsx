import React from "react";
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";


const Messages = () => {

    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Andrey"}
    ]

    let messages = [
        {id: 1, message: "hi"},
        {id: 2, message: "Hellow"},
        {id: 3, message: "yo"},
        {id: 4, message: "bye"},
        {id: 5, message: "yo"}
    ]
    
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m => <Dialog text={m.message}/>)

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

