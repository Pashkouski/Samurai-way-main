import React from "react";
import s from './Messages.module.css';


const Messages = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Андрей
                </div>
                <div className={s.dialog}>
                    Андрей
                </div>
                <div className={s.dialog}>
                    Андрей
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

