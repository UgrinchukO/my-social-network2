import React from "react";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import {withRouter} from "react-router-dom";
import Header from "./Header";


class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, {logout})(authUrl);
