import React from "react";
import s from '../Post/Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            {" "}
            <img
                src="https://img.icons8.com/bubbles/452/girl-and-smartphone.png"
                alt="not img"
            />{" "}
        </div>

    );
};

export default Post;
