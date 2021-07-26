import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLDED = 'UNFOLDED';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_FOLLOWING_TOGGLE = 'SET_IS_FOLLOWING_TOGGLE'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    toggleFollowingProgress: [],
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
        case SET_IS_FOLLOWING_TOGGLE: {
            return {
                ...state,
                toggleFollowingProgress: action.isFetching
                    ? [...state.toggleFollowingProgress, action.userId]
                    : state.toggleFollowingProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: 'FOLLOW', userId})

export const unfoldedSuccess = (userId) => ({type: 'UNFOLDED', userId})

export const setUsers = (users) => ({type: 'SET_USERS', users})

export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage})

export const setTotalUsersCount = (totalCount) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})

export const setIsFetching = (isFetching) => ({type: 'SET_IS_FETCHING', isFetching})

export const setIsFollowingToggle = (isFetching, userId) => ({type: 'SET_IS_FOLLOWING_TOGGLE', isFetching, userId})


export const getUsersThunk = (p, currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
        dispatch(setCurrentPage(p))
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingToggle(true, userId))
        usersAPI.followUsers(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setIsFollowingToggle(false, userId))
            })
    }
}

export const unfolded = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingToggle(true, userId))
        usersAPI.unfoldedUsers(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfoldedSuccess(userId))
                }
                dispatch(setIsFollowingToggle(false, userId))
            })
    }
}

export default reducerUsers;