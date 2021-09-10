import {authMe} from "../api/api";

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
                ...action.payload,
                isAuth: true
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

export const getAuthUserData = (userId) => {
    return (dispatch) => {
        authMe.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserAuthData(id, login, email, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authMe.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authMe.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData(null, null, null, false))
                }
            })
    }
}

export default reducerAuth;