import React from 'react'
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessage} from "../../Redux/state";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message}/>)

    let itemArea = React.createRef()

    let addPost = () => {
        let text = itemArea.current.value
        props.addMessage(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={itemArea}/>
                <button className={s.buttonItem} onClick={addPost}>new messages!</button>
            </div>
        </div>
    )
}

export default Dialogs