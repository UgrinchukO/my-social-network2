import React from "react";
import {getAuthUserData} from "./authReducer";

let initialState = {
    initialized: false
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])                             /*коли ВСІ проміси за-resolve, тоді =>*/
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default appReducer;