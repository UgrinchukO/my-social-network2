import React from 'react'
import {messageActionCreator, messageUpdateCreator} from "../../Redux/reducerDialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(messageActionCreator())
        },

        updateNewPost: (text) => {
            dispatch(messageUpdateCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer