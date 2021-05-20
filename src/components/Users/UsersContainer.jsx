import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfoldedAC} from "../../Redux/reducerUsers";


let mapStateToProps = (state) => {
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer