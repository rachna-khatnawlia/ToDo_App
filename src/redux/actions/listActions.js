import types from "../types";
import { store } from "../store";

const {dispatch} = store;

export const addToDo = (data) => {
    dispatch({
        type: types.SUBMIT_TO_DO,
        payload: data
    })
}

export const removeToDo = (id) => {
    dispatch ({
        type: types.DELETE_TO_DO,
        id
    })
}

export const EditToDoData = (data) => {
    dispatch ({
        type: types.EDIT_TO_DO_DATA,
        payload: data,
    })
}

