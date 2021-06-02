import React from 'react'
import {connect} from "react-redux";
import {followAC, setUsersAC, unfoldedAC} from "../../Redux/reducerUsers";
import Users from "./Users";


let mapStateToProps = (state) => {
    console.log(state.usersPage.users)
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfolded: (userId) => {
            dispatch(unfoldedAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

