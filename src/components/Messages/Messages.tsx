import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";


const Messages = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/Messages/1'}> Andrey </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/Messages/2'> Sveta </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/Messages/3'> Andrey </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/Messages/4'> Andrey </NavLink>
                 </div>
                <div className={s.dialog}>
                    <NavLink to='/Messages/5'> Andrey </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>yo</div>
                <div className={s.message}>hi</div>
                <div className={s.message}>hellow</div>
                <div className={s.message}>bye</div>
                <div className={s.message}>wqewq</div>
            </div>
        </div>
    )


}


export default Messages

