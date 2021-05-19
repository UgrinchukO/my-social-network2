import React from 'react'
import {messageActionCreator} from "../../Redux/reducerDialogs";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

   let state = props.store.getState()

    let addMessage = (text) => {
        props.store.dispatch(messageActionCreator(text))
    }

    return (
        <Dialogs addMessage={addMessage} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>
    )
}

export default DialogsContainer