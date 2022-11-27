import React from "react";
import s from "../Messages.module.css";

type DialogType = {
    text: string
}

const Dialog = (props: DialogType) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}

export default Dialog


