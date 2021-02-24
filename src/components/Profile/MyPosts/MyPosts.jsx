import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElement = props.posts.map(p => <Post message={p.message} value={p.value}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    let newPostHandler = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.posts}>
            <div>
                <textarea ref={newPostElement} onChange={newPostHandler} value={props.newPostText}/>
                <button onClick={addPost}>add new post!</button>
            </div>
            <div className={s.item}>
                {postsElement}
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;
