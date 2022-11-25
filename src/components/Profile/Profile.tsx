import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";




const Profile = () => {
    return (
                <div>
            <div>
                <img
                    src="https://png.pngtree.com/thumb_back/fw800/png-vector/20200530/ourmid/pngtree-great-wall-scenery-png-image_2214406.jpg"
                    alt=""/>
            </div>
            <div>
                ava + d
            </div>
        <MyPosts />
        </div>
    )
}

export default Profile;