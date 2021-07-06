import reducerProfile from "./reducerProfile";
import reducerDialogs from "./reducerDialogs";
import reducerUsers from "./reducerUsers";

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
            ],
            messageText: ''
        },
        profilePage: {
            posts: [
                {message: "how are you?", value: "15"},
                {message: "what is your name?", value: "20"}
            ]
        },

        // usersPage: {
        //     users: [
        //         {
        //             id: "1",
        //             photoUrl: 'https://img.icons8.com/bubbles/2x/man-with-monitor.png',
        //             followed: 'true',
        //             fullName: "Oleg",
        //             status: 'I am a boss!',
        //             location: {city: 'Poltava', country: 'Ukraine'}
        //         },
        //         {
        //             id: "2",
        //             photoUrl: 'https://img.icons8.com/bubbles/2x/man-with-monitor.png',
        //             followed: 'true',
        //             fullName: "Roman",
        //             status: 'I am a boss too!',
        //             location: {city: 'Kyiv', country: 'Ukraine'}
        //         },
        //         {
        //             id: "3",
        //             photoUrl: 'https://img.icons8.com/bubbles/2x/man-with-monitor.png',
        //             followed: 'false',
        //             fullName: "Nazar",
        //             status: 'I am a boss too!',
        //             location: {city: 'Ternopil', country: 'Ukraine'}
        //         },
        //         {
        //             id: "4",
        //             photoUrl: 'https://img.icons8.com/bubbles/2x/man-with-monitor.png',
        //             followed: 'true',
        //             fullName: "Ruslan",
        //             status: 'I am a boss too!',
        //             location: {city: 'Kharkiv', country: 'Ukraine'}
        //         }]
        // }
    },
    _rerenderEntireTree() {
        console.log("save changes!")
    },


    dispatch(action) {
        store._state.profilePage = reducerProfile(store._state.profilePage, action)
        store._state.dialogsPage = reducerDialogs(store._state.dialogsPage, action)
        // store._state.usersPage = reducerUsers(store._state.usersPage, action)
        store._rerenderEntireTree(store._state)
    },

    subscribe(observer) {
        store._rerenderEntireTree = observer
    }
}