import {authMe, usersAPI} from "../api/api";
import {setIsFollowingToggle, unfoldedSuccess} from "./reducerUsers";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const SET_DATA_USER = 'SET_DATA_USER'

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_USER: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}


export const setUserAuthData = (id, email, login) => ({type: 'SET_DATA_USER', data: {id, email, login}})

export const getAuthUserData = (userId) => {
    return (dispatch) => {
        authMe.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserAuthData(id, login, email))
                }
            })
    }
}
export default reducerAuth;