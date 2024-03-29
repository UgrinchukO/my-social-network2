import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Post from "../Friends/MyPosts/Post/Post";


const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/login'} activeClassName={s.active}>Login</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/users'} activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.itemFriends}>
            <NavLink to={'/friends'} activeClassName={s.active}>Friends</NavLink>
            <div className={s.friendsPage}>
                <NavLink to={'/friends/myPosts/post'} activeClassName={s.active}> <Post/></NavLink>
                <NavLink to={'/friends/myPosts/post'} activeClassName={s.active}> <Post/></NavLink>
                <NavLink to={'/friends/myPosts/post'} activeClassName={s.active}> <Post/></NavLink>
            </div>
        </div>
    </nav>
}
export default Navbar;