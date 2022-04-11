import { combineReducers } from "redux"
import { UserStatus } from "./auth";
import { taskInput } from "./toDoReducer";

export const rootReducer = combineReducers({
    UserStatus, 
    taskInput
});