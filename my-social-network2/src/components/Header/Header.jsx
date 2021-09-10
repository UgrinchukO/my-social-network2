import React from "react";
import  "./Header.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className = "header">
            <img
                src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
            ></img>
            <div className="loginAuth">
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
