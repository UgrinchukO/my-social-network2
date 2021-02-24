import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        value: 11
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)

}

export default state;