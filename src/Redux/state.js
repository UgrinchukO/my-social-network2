export const addPostActionCreator = (text) => {
    return {type: 'ADD-POST', messagePost: text}
}

export const newPostHandlerActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}

let store = {
    getState() {
        return this._state
    },
    _state: {
        dialogsPage: {
            dialogs: [
                {name: 'Anastasia', id: '1'},
                {name: 'Sofia', id: '2'},
                {name: 'Ulia', id: '3'},
                {name: 'Roman', id: '4'},
                {name: 'Oleg', id: '5'}
            ],

            messages: [
                {message: 'Hi'},
                {message: "How are you?"},
                {message: 'How old are you?'},
                {message: 'Where are you live?'}
            ]
        },
        profilePage: {
            posts: [
                {message: "how are you?", value: "15"},
                {message: "what is your name?", value: "20"}
            ]
        }
    },
    _rerenderEntireTree() {
        console.log("save changes!")
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: action.messagePost,
                value: 0
            };
            store._state.profilePage.posts.push(newPost)
            store._rerenderEntireTree(store._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newPost = {
                message: action.messageText,
            };

            store._state.dialogsPage.messages.push(newPost)
            store._rerenderEntireTree(store._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            store._state.profilePage.newPostText = action.newText
            store._rerenderEntireTree(store._state)
        }
    },

    subscribe(observer) {
        store._rerenderEntireTree = observer
    }
}

export default store;