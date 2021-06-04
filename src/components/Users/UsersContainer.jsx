import React from 'react'
import {connect} from "react-redux";
import {followAC, setCurrentPage, setCurrentPageAC, setUsersAC, unfoldedAC} from "../../Redux/reducerUsers";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setCurrentPage: (currentPage) => {
            dispatch: (setCurrentPageAC(currentPage))
        }
        // setPageSize: (pageSize) => {
        //     dispatch(setPageSizeAC(pageSize))
        // },
        // setTotalUsersCount: (usersCount) => {
        //     dispatch:(setTotalUsersCountAC(usersCount))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

