let initialState = ({
    posts: [
        {message: "how are you?", value: "15"},
        {message: "what is your name?", value: "20"}
    ]
})

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: action.messagePost,
                value: 0
            };
            state.posts.push(newPost)
            switch (action.type) {
                case 'UPDATE-NEW-POST-TEXT':
                    state.newPostText = action.newText
            }

        default:
            return state
    }
}

export const addPostActionCreator = (text) => {
    return {type: 'ADD-POST', messagePost: text}
}
export const newPostHandlerActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}

export default reducerProfile;