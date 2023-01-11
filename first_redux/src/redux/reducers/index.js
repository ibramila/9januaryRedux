import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { toDoReducers } from "./toDoReducers"

const rootReducer = combineReducers(
    {
        counter: counterReducer,
        todo: toDoReducers
    }
)
export default rootReducer;