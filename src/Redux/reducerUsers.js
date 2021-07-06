const FOLLOW = 'FOLLOW';
const UNFOLDED = 'UNFOLDED';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const follow = (userId) => ({type: 'FOLLOW', userId})

export const unfolded = (userId) => ({type: 'UNFOLDED', userId})

export const setUsers = (users) => ({type: 'SET_USERS', users})

export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage})

export const setTotalUsersCount = (totalCount) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})

export const setIsFetching = (isFetching) => ({type: 'SET_IS_FETCHING', isFetching})


export default reducerUsers;