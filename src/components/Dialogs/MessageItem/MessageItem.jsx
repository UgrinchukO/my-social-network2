import React from 'react'
import s from "./../MessageItem/MessageItem.module.css"


const MessageItem = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default MessageItem