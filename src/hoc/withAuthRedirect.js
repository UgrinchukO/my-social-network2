import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class authRedirect extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to='/login'/>
            }
            return <Component {...this.props} />
        }
    }

    let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(authRedirect);

    return connectedAuthRedirectComponent
}