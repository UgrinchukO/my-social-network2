import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserAuthData} from "../../Redux/authReducer";
import {withRouter} from "react-router-dom";
import Header from "./Header";



class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                debugger;
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserAuthData(id, login, email)
                }
            })
    }

    render() {
        return (
                <Header {...this.props} />
        )
    }
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

let authUrl = withRouter(HeaderContainer)

export default connect(mapStateToProps, {setUserAuthData})(authUrl);
