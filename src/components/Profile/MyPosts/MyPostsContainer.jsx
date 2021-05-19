import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, newPostHandlerActionCreator} from "../../../Redux/reducerProfile";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        updateNewPostText: (text) => {
            dispatch(newPostHandlerActionCreator(text))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
