import React from 'react'
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from "../../assets/images/boy-afro-african-young-512.png"


class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={s.item}>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <img src={u.small != null ? u.small : userPhoto}/>
                        </div>
                        <div className={s.buttonName}>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfolded(u.id)
                                }}>Unfolded</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
        )
    }
}

export default Users