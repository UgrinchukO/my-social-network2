import React from 'react'
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControls/FormControls";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map(m => <MessageItem message={m.message}/>)

    let itemArea = React.createRef()

    let addNewMessage = (values) => {
        props.addMessage(values.messageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddNewMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

let addNewMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='messageText' component={Textarea} validate={[required, maxLength50]}/>
            <button className={s.buttonItem}>Click!</button>
        </form>
    )
}

let AddNewMessageForm = reduxForm({form: "addNewMessage"})(addNewMessage)

export default Dialogs