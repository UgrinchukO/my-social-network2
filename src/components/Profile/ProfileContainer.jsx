import React from "react";
import Profile from "./Profile";
import axios from "axios";


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/')
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
};

export default ProfileContainer;
