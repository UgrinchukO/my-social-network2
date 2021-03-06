import React from 'react'
import {connect} from "react-redux";
import {
    follow, getUsersThunk,
    setCurrentPage,
    setIsFollowingToggle,
    setTotalUsersCount,
    unfolded
} from "../../Redux/reducerUsers";
import Users from "./Users";
import Preloader from "../common/Preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    changedPage = (p) => {
        this.props.getUsersThunk(p, this.props.currentPage, this.props.pageSize);
        // this.props.setIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
        // this.props.setCurrentPage(p)
    }

    render() {
        return <>
            {
                this.props.isFetching ? <Preloader/> : null
            }
            <Users
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                changedPage={this.changedPage}
                users={this.props.users}
                unfolded={this.props.unfolded}
                follow={this.props.follow}
                setIsFollowingToggle={this.props.setIsFollowingToggle}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
        setIsFollowingToggle: state.usersPage.setIsFollowingToggle
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfolded: (userId) => {
//             dispatch(unfoldedAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow, unfolded,
    setTotalUsersCount, setIsFollowingToggle, getUsersThunk
})(UsersContainer);