import React from 'react'
import s from './Users.module.css'


const Users = (props) => {
    return (
        <div className={s.item}>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.unfolded(u.id)}}>Unfolded</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </div>)
            }
        </div>
    )
}

export default Users