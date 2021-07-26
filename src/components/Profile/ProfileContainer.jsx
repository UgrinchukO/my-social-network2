import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../Redux/reducerProfile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let authRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})
authRedirectComponent = connect(mapStateToPropsForRedirect)(authRedirectComponent);

let WithUrlDataContainerComponent = withRouter(authRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
