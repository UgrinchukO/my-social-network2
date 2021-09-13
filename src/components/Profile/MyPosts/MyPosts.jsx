import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} value={p.value}/>)

    let newPostElement = React.createRef()

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.posts}>

            <AddPostReduxForm onSubmit={addNewPost}/>

            <div className={s.item}>
                {postsElement}
                <Post/>
            </div>
        </div>
    );
};

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component= {Textarea} validate={[required, maxLength10]}/>
            <button>add new post!</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddPostForm)


export default MyPosts;
