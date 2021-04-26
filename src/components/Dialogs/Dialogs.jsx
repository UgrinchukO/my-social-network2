import React from 'react'
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map(m => <MessageItem message={m.message}/>)

    let itemArea = React.createRef()

    let addPost = () => {
        let text = itemArea.current.value
        props.addMessage(text)
        itemArea.current.value = ''
    }

    let updatePost = () => {
        let text = itemArea.current.value
        props.updateNewPost(text)
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
                <textarea ref={itemArea} onChange={updatePost} value={props.messageText}/>
                <button className={s.buttonItem} onClick={addPost}>Click!</button>
            </div>
        </div>
    )
}

export default Dialogs