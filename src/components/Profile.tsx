import React from "react";
import s from "./Profile.module.css"
const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://png.pngtree.com/thumb_back/fw800/png-vector/20200530/ourmid/pngtree-great-wall-scenery-png-image_2214406.jpg"
                    alt=""/>
            </div>
            <div>
                ava + d
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
            </div>
            <div className={s.post}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
                <div>
                    post 3
                </div>
            </div>
        </div>
    )
}

export default Profile;