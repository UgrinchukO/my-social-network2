import React from "react";
import "./Header.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"/>
            <div className="loginAuth">
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>LOG OUT</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
        </header>
    );
};

export default Header;
