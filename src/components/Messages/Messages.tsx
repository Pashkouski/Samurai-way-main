import React from "react";
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";




const Messages = () => {

    let dialogData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Andrey"}
     ]

    let messagesData = [
        {id: 1, message: "hi"},
        {id: 2, message: "Hellow"},
        {id: 3, message: "yo"},
        {id: 4, message: "bye"},
        {id: 5, message: "yo"}
    ]



    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
                <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
                <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
                <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
            </div>
            <div className={s.messages}>
                <Dialog text={messagesData[0].message}/>
                <Dialog text={messagesData[1].message}/>
                <Dialog text={messagesData[2].message}/>
                <Dialog text={messagesData[3].message}/>
                <Dialog text={messagesData[4].message}/>
            </div>
        </div>
    )


}


export default Messages

