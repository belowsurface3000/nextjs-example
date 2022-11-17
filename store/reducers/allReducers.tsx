import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { peopleReducer } from "./peopleReducer"

export const allReducers = combineReducers({
    userReducer: userReducer,
    peopleReducer: peopleReducer
});