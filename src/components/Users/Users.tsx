import React from 'react';
import {mapActionToPropsType, mapStateToPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";


type MessagesPropsType = mapStateToPropsType & mapActionToPropsType


class Users extends React.Component<MessagesPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <>
                <div>
                    {
                        pages.map((el, index) => <span className={this.props.currentPage === el ? s.selectedPage : ''}
                                                       key={index} onClick={()=>this.onPageChanged(el)}>{el}</span>)
                    }

                </div>
                <div> {
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
                </div>
            </>
        );
    }


};

export default Users;