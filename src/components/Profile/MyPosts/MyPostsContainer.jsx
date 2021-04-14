import React from "react";
import {addPostActionCreator, newPostHandlerActionCreator} from "../../../Redux/reducerProfile";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = (text) => {
        props.store.dispatch(addPostActionCreator(text))
    }

    let newPostHandler = (text) => {
        props.store.dispatch(newPostHandlerActionCreator(text))
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={newPostHandler} posts={state.profilePage.posts}/>
    );
};

export default MyPostsContainer;
