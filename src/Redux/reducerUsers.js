const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: "1",
            photoUrl:'https://img.icons8.com/bubbles/2x/man-with-monitor.png',
            followed: 'true',
            fullName: "Oleg",
            status: 'I am a boss!',
            location: {city: 'Poltava', country: 'Ukraine'}
        },
        {
            id: "2",
            photoUrl:'https://img.icons8.com/bubbles/2x/man-with-monitor.png',
            followed: 'true',
            fullName: "Roman",
            status: 'I am a boss too!',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
        {
            id: "3",
            photoUrl:'https://img.icons8.com/bubbles/2x/man-with-monitor.png',
            followed: 'false',
            fullName: "Nazar",
            status: 'I am a boss too!',
            location: {city: 'Ternopil', country: 'Ukraine'}
        },
        {
            id: "4",
            photoUrl:'https://img.icons8.com/bubbles/2x/man-with-monitor.png',
            followed: 'true',
            fullName: "Ruslan",
            status: 'I am a boss too!',
            location: {city: 'Kharkiv', country: 'Ukraine'}
        },
    ]
}


const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case(FOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: 'true'}
                    }
                    return u
                })
            }
        case(UNFOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: 'false'}
                    }
                    return u
                })
            }
        case(SET_USERS):
            return {...state, users: [...state.users, action.users]}
        default:
            return state
    }
}

export const followAC = (userId) => {
    return ({type: 'FOLLOW', userId})
}

export const unfollowUC = (userId) => {
    return ({type: 'UNFOLLOW', userId})
}

export const setUsersAC = (users) => {
    return ({type: 'SET_USERS', users})
}
export default reducerUsers;