import React from 'react'
import {messageActionCreator} from "../../Redux/reducerDialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageText) => {
            dispatch(messageActionCreator(messageText))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)
(Dialogs)
