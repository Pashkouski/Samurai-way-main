import React from "react";
import s from './Header.module.css'
import {initialStateauthReducerType} from "../../redux/auth-Reducer";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
 data: initialStateauthReducerType
}


const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                alt="img"/>

            <div className={s.loginBlock}>
                { props.data.isAuth
                    ? props.data.data.login
                    : <NavLink to={'login'}> LOGIN </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;