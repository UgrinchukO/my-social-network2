let initialState = (
    {
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
        ],
        messageText: ''
    })

const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newPost = {
                message: state.messageText,
            };
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newPost)
            stateCopy.messageText = [...state.messageText]
            stateCopy.messageText = ''
            return stateCopy
        }
        case 'UPDATE-NEW-POST': {
            let stateCopy = {...state}
            stateCopy.messageText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const messageActionCreator = () => {
    return ({type: 'ADD-MESSAGE'})
}

export const messageUpdateCreator = (text) => {
    return ({type: 'UPDATE-NEW-POST', newText: text})
}
export default reducerDialogs;