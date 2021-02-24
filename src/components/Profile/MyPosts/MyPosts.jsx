import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElement = props.posts.map(p => <Post message={p.message} value={p.value}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={s.posts}>
            <div>
                <textarea ref={newPostElement}/>
                <button onClick={addPost}>add new post!</button>
            </div>
            <div className={s.item}>
                {postsElement}
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;
