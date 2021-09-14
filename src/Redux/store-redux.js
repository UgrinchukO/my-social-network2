import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";
import reducerUsers from "./reducerUsers";
import reducerAuth from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile,
    usersPage: reducerUsers,
    auth: reducerAuth,
    form: formReducer,
    app: appReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))