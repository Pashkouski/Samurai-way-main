import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../redux/users-Page-Reducer";
import {NavLink, Redirect} from "react-router-dom";



type UsersPropsType = {
    pages: number[]
    currentPage: number
    users: UsersType[]
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    followThunkCreator: (id: number) => void
    unFollowThunkCreator: (id: number) => void
    isAuth: boolean
}

const Users = (props: UsersPropsType) => {

    if( !props.isAuth ) return <Redirect to={'/login'}/>

    return (
        <>
            <div>
                {
                    props.pages.map((el, index) => <span className={props.currentPage === el ? s.selectedPage : ''}
                                                         key={index}
                                                         onClick={() => props.onPageChanged(el)}>{el}</span>)
                }

            </div>
            <div> {
                props.users.map(el => {
                        return (
                            <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + el.id}>
                             <img className={s.img} src={el.photos.small !== null
                                 ? el.photos.small
                                 : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Gyrus_Dentatus_40x.jpg/1008px-Gyrus_Dentatus_40x.jpg'}
                                  alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {el.followed
                            ? <button
                                disabled={props.followingInProgress.some(id => id == el.id)}
                                onClick={() => {
                                    props.unFollowThunkCreator(el.id)
                                }}>unFollow</button>
                            : <button disabled={props.followingInProgress.some(id => id == el.id)}
                                      onClick={() => {
                                          props.followThunkCreator(el.id)
                                      }}>Follow</button>}
                    </div>
                </span>
                                <span>
                    <span>
                        <div>{el.name}</div><div>{el.status}</div>
                    </span>
                    <span>
                        {/*<div>{u.location.country}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                    </span>
                </span>
                            </div>
                        )
                    }
                )}
            </div>
        </>
    );
};

export default Users;
