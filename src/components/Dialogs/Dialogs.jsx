import React from 'react'
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message}/>)

    let itemArea = React.createRef()

    let addPost = () => {
        let text = itemArea.current.value
        props.addPost(text)
        itemArea.current.value = '';
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
                <button className={s.buttonItem} onClick={addPost}>Click!</button>
            </div>
        </div>
    )
}

export default Dialogs