import {usersAPI} from "../api/api";
import {setIsFollowingToggle, unfoldedSuccess} from "./reducerUsers";
import ProfileContainer from "../components/Profile/ProfileContainer";

let initialState = {
    posts: [
        {message: "how are you?", value: "15"},
        {message: "what is your name?", value: "20"}
    ], newPostText: '',
    profile: null
}

const SET_PROFILE = 'SET_PROFILE'

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                value: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})

export const newPostHandlerActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export const setProfile = (profile) => ({type: 'SET_PROFILE', profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setProfile(response.data))
        })
    }
}

export default reducerProfile;