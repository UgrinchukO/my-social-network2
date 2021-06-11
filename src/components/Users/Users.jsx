import React from 'react'
import s from './Users.module.css'
import userPhoto from "../../assets/images/boy-afro-african-young-512.png"


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
                                 onClick={() => {props.changedPage(p)
                                 }}>{p}</span>
                })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </div>
                <div className={s.buttonName}>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfolded(u.id)
                        }}>Unfolded</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <span>
                        <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
            </div>)
        }
    </div>
}

export default Users