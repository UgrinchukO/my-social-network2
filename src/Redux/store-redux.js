import {combineReducers, createStore} from "redux";
import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";


let reducers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile
})

let store = createStore(reducers)


export default store;