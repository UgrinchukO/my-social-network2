import {profileAPI, usersAPI} from "../api/api";

let initialState = {
    posts: [
        {message: "how are you?", value: "15"},
        {message: "what is your name?", value: "20"}
    ],
    profile: "",
    status: ""
}
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                value: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: 'ADD-POST', newPostText: newPostText})

export const deletePost = (postId) => ({type: 'DELETE_POST', postId})

export const setProfile = (profile) => ({type: 'SET_PROFILE', profile})

export const setStatus = (status) => ({type: 'SET_STATUS', status})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setProfile(response.data))
}


export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default reducerProfile;