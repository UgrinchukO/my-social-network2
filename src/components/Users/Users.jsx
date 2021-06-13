import React from 'react'
import s from "./Users.module.css"
import * as axios from "axios";
import photoUrl from './../../Image/usersImage/4482454.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
            props.setUsers(responce.data.items)
        })
    }
    return (
        <div className={s.item}>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.itemName}>
                        <img src={photoUrl}/>
                    </div>
                    <div className={s.butName}>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                    <div className={s.userName}>{u.name}</div>
                </div>)
            }
        </div>
    )
}

export default Users