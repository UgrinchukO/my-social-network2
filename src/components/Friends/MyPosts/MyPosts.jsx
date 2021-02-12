import React from "react";
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (post) => {


    // let postsElement = props.posts.map(p => <Post message={p.message} value={p.value}/>)

    return (
        <div className={s.posts}>
            <div className={s.item}>
                {/*{postsElement}*/}
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;
