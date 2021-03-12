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
            ],
            newPostText: 'skinnyjointt.com'
        }
    },

    _rerenderEntireTree() {
        console.log("Save changed!")
    },

    addPost(newItem) {
        let newPost = {
            id: 5,
            message: newItem,
            value: 11
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newItem = ' '
        this._rerenderEntireTree(this._state)
    },

    addMessage(textMessage) {
        let newMessage = {
            message: textMessage
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.textMessage = ' '
        this._rerenderEntireTree(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state)

    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}


export default store;