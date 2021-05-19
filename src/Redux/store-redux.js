import {combineReducers, createStore} from "redux";
import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";
import reducerUsers from "./reducerUsers";


let reducers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile,
    usersPage: reducerUsers
})

export let store = createStore(reducers)
