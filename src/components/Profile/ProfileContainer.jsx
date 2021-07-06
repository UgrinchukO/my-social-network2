import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setProfile} from "../../Redux/reducerProfile";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setProfile(response.data)
            })
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
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfile})(WithUrlDataContainerComponent);
