const FOLLOW = 'FOLLOW'
const UNFOLDED = 'UNFOLDED'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}


const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLDED:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, action.users]}
        default:
            return state
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId})


export const unfoldedAC = (userId) => ({type: 'UNFOLDED', userId})


export const setUsersAC = (users) => ({type: 'SET_USERS', users})

export default reducerUsers;