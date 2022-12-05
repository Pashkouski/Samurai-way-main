import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <img className={s.img}
                src="https://png.pngtree.com/thumb_back/fw800/png-vector/20200530/ourmid/pngtree-great-wall-scenery-png-image_2214406.jpg"
                alt=""/>
            <div className={s.DescriptionBlock}>
                ava + d
            </div>
        </div>
    )
}


export default ProfileInfo