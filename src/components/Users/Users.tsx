import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../redux/users-Page-Reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    pages: number[]
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    unFollow: (userID: number) => void
    follow: (userID: number) => void
}

const Users = (props: UsersPropsType) => {
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
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '205fb002-e5ab-4a9d-8440-8b997d10d8ce'
                                        }
                                    },
                                ).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(el.id)
                                    }
                                })

                            }}>unFollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '205fb002-e5ab-4a9d-8440-8b997d10d8ce'
                                        }
                                    },
                                ).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(el.id)
                                    }
                                })


                                props.follow(el.id)


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
