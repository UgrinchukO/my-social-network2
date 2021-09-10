import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (
        <div className={s.item}>
            {" "}
            <img
                src="https://img.icons8.com/bubbles/452/girl-and-smartphone.png"
                alt="not img"
            />{" "}
            {props.message}
            <div>
                <span>like {props.value}</span>
            </div>
        </div>
    );
};

export default Post;
