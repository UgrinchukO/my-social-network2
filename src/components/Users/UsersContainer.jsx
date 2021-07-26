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

export default connect(mapStateToProps, {
    follow, unfolded,
    setTotalUsersCount, setIsFollowingToggle, getUsersThunk
})(UsersContainer);