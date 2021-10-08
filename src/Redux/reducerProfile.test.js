import reducerProfile, {addPostActionCreator, deletePost} from "./reducerProfile";

let state = {
    posts: [
        {id:1, message: "how are you?", value: "15"},
        {id:2, message: "what is your name?", value: "20"}
    ]
}

it ('check adding post', () => {
    //test data
    let action = addPostActionCreator("skinny")
    //action
    let newPost = reducerProfile(state, action)
    //expectation
    expect(newPost.posts[2].message).toBe("skinny")
    expect(newPost.posts.length).toBe(3)                    /* ми очікуємо що значення (newPost.posts.length) === 3  */
});

it ('after render length post should be a decrement', () => {
    //test data
    let action = deletePost(2)
    //action
    let newPost = reducerProfile(state, action)
    //expectation
    expect(newPost.posts.length).toBe(1)                     /*  ми очікуємо що значення (newPost.posts.length) === 1  */
});

