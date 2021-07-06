import React from 'react'
import s from './Users.module.css'
import userPhoto from "../../Image/usersImage/4482454.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={s.item}>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && s.active}
                                 onClick={() => {
                                     props.changedPage(p)
                                 }}>{p}</span>
                })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                </NavLink>
                <div className={s.buttonName}>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {"API-KEY": "8a5c27e2-deae-4f8b-b7e0-a258ff10cea7"}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfolded(u.id)
                                    }
                                })
                        }}>Unfolded</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {"API-KEY": "8a5c27e2-deae-4f8b-b7e0-a258ff10cea7"}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }}>Follow</button>}
                </div>
                <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
            </div>)
        }
    </div>
}

export default Users