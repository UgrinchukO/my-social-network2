import rerenderEntireTree from "../render";

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
        ]
    }
}

export let addPost = (messagePost) => {
    let newPost = {
        id: 5,
        message: messagePost,
        value: 0
    }

    state.profilePage.posts.push(newPost)

}

export default state;