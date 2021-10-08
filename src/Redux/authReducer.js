import {authMe} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload
            }
        }
        default:
            return state
    }
}

export const setUserAuthData = (id, email, login, isAuth) => ({
    type: 'SET_DATA_USER',
    payload: {id, email, login, isAuth}
})

export const getAuthUserData = (userId) => async (dispatch) => {
    const response = await authMe.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setUserAuthData(id, login, email, true))
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authMe.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}


export const logout = () => async (dispatch) => {
    let response = await authMe.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false))
    }
}

export default reducerAuth;