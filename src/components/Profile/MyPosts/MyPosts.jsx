import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElement = props.posts.map(p => <Post message={p.message} value={p.value}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={s.posts}>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>add button</button>
            </div>
            <div className={s.item}>
                {postsElement}
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;
