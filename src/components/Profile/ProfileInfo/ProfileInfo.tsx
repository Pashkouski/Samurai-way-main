import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileUsersType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoPropsType = {
    profileUsers: ProfileUsersType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            {/*            <img className={s.img}
                src="https://png.pngtree.com/thumb_back/fw800/png-vector/20200530/ourmid/pngtree-great-wall-scenery-png-image_2214406.jpg"
                alt=""/>*/}
            <div className={s.DescriptionBlock}>
                <img src={props.profileUsers.photos?.large} alt=""/>
                <ProfileStatus status={'Hello my friends'}/>
            </div>
        </div>
    )
}


export default ProfileInfo