import {usersAPI} from "../api/api";
import {updateObjectsInArray} from "../utils/objects -helpers";

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
                users: updateObjectsInArray(state.items, action.userId, "id",{followed:true})
            }
        case UNFOLDED:
            return {
                ...state,
                users: updateObjectsInArray(state.items, action.userId, "id",{followed:false})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false}
                //     }
                //     return u
                // })
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
                    : state.toggleFollowingProgress.filter(id => id !== action.userId)
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


export const getUsersThunk = (p, currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(p))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}


export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setIsFollowingToggle(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setIsFollowingToggle(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.followUsers(userId).bind(usersAPI)
        // let actionCreator = followSuccess(userId)
        followUnfollowFlow(dispatch, userId, usersAPI.followUsers.bind(usersAPI), followSuccess)
    }
}

export const unfolded = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.unfoldedUsers(userId).bind(usersAPI)
        // let actionCreator = unfoldedSuccess(userId)
        followUnfollowFlow(dispatch, userId, usersAPI.unfoldedUsers.bind(usersAPI), unfoldedSuccess)
    }
}

export default reducerUsers;