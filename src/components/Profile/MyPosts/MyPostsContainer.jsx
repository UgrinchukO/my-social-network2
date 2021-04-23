<<<<<<< HEAD
import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, newPostHandlerActionCreator} from "../../../Redux/reducerProfile";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
         // newPostText: state.profilePage.newPostText
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
=======
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
>>>>>>> origin/main
