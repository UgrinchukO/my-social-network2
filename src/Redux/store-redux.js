import {combineReducers, createStore} from "redux";
import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";


let reducers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile
})

export let store = createStore(reducers)
