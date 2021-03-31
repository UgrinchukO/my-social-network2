const reducerDialogs = (state, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newPost = {
                message: action.messageText,
            };
            state.messages.push(newPost)

        default:
            return state
    }
}

export const messageActionCreator = (text) => {
    return ({type: 'ADD-MESSAGE', messageText: text})
}

export default reducerDialogs;