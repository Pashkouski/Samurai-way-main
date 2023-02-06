import React from 'react';
import {mapActionToPropsType, mapStateToPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";


type MessagesPropsType = mapStateToPropsType & mapActionToPropsType


class Users extends React.Component<MessagesPropsType> {

    getUsers = () => {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                <button onClick={this.getUsers}> getUsers </button>
                {
                    this.props.users.map(el => {
                            return (
                                <div key={el.id}>
                <span>
                    <div>
                        <img className={s.img} src={el.photos.small !== null
                            ? el.photos.small
                            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Gyrus_Dentatus_40x.jpg/1008px-Gyrus_Dentatus_40x.jpg'}
                             alt=""/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                this.props.unFollow(el.id)
                            }}>unFollow</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
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
            </>
        );
    }


};

export default Users;