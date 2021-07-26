import React from 'react'
import {messageActionCreator, messageUpdateCreator} from "../../Redux/reducerDialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)
(Dialogs)
