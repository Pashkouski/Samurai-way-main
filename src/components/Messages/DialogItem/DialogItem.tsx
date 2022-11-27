import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: number
    name: string
}


const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/Messages/' + props.id}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem
