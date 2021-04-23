<<<<<<< HEAD
import {combineReducers, createStore} from "redux";
import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";


let reducers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile
})

let store = createStore(reducers)


=======
import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerDialogs from "./reducerDialogs";

let reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialogs
})

let store = createStore(reducers);

>>>>>>> origin/main
export default store;