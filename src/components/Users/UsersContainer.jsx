import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowUC} from "../../Redux/reducerUsers";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        FOLLOW: (userId) => {
            dispatch(followAC(userId))
        },

        UNFOLLOW: (userId) => {
            dispatch(unfollowUC(userId))
        },
        SET_USERS: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer