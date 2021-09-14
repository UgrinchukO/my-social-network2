import {profileAPI, usersAPI} from "../api/api";
import {setIsFollowingToggle, unfoldedSuccess} from "./reducerUsers";
import ProfileContainer from "../components/Profile/ProfileContainer";

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
const SET_UPDATE_STATUS = 'SET_UPDATE_STATUS'

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
        case SET_UPDATE_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: 'ADD-POST', newPostText: newPostText})

export const setProfile = (profile) => ({type: 'SET_PROFILE', profile})

export const setStatus = (status) => ({type: 'SET_STATUS', status})

export const setUpdateStatus = (status) => ({type: 'SET_UPDATE_STATUS', status})


export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setProfile(response.data))
        })
    }
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        debugger;
        dispatch(setStatus(response.data))
    })
}

export const getUpdateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUpdateStatus(status))
        }
    });
}

export default reducerProfile;