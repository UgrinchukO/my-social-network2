import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/reducerProfile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId;
        }
        /*if(!userId){this.props.history.push("/login")}*/
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
        this.props.updateStatus('status')
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.userId,
    isAuth: state.auth.isAuth
})

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

// let authRedirectComponent = withAuthRedirect(ProfileContainer)
// authRedirectComponent = connect(mapStateToPropsForRedirect)(authRedirectComponent);
//
// let WithUrlDataContainerComponent = withRouter(authRedirectComponent)
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    connect(mapStateToPropsForRedirect),
    withAuthRedirect)
(ProfileContainer)