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
import {
    getCurrentPage,
    getIsFetching,
    getPageSize, getSetIsFollowingToggle,
    getToggleFollowingProgress,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users_selectors";



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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching:getIsFetching(state),
        toggleFollowingProgress: getToggleFollowingProgress(state),
        setIsFollowingToggle: getSetIsFollowingToggle(state)
    }
}

export default connect(mapStateToProps, {
    follow, unfolded,
    setTotalUsersCount, setIsFollowingToggle, getUsersThunk
})(UsersContainer);