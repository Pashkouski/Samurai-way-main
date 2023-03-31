import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: string
    name: string
}


const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/Dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem
