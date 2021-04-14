let initialState = ({
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
})

const reducerDialogs = (state = initialState, action) => {
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