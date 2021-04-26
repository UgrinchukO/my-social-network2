let initialState = {
    posts: [
        {message: "how are you?", value: "15"},
        {message: "what is your name?", value: "20"}
    ], newPostText: ''
}

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                value: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = [...state.newPostText]
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}
export const newPostHandlerActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}

export default reducerProfile;