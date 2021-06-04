const FOLLOW = 'FOLLOW'
const UNFOLDED = 'UNFOLDED'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
//const setPageSizeAC = 'SET_PAGE_SIZE'
//const setTotalUsersCountAC = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 15,
    currentPage: 2
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
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: [...action.currentPage]}
        default:
            return state
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId})

export const unfoldedAC = (userId) => ({type: 'UNFOLDED', userId})

export const setUsersAC = (users) => ({type: 'SET_USERS', users})

export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage})

export default reducerUsers;