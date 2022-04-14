import types from "../types";

export const loginFunction = () => {
    return {
        type: types.LOGIN,
    }
}

export const Logout = () => {
    return {
        type: types.USER_LOGOUT
    }
}


export const addToDo = (data) => {
    return {
        type: types.SUBMIT_TO_DO,
        payload: data
    }
}

export const removeToDo = (id) => {
    return {
        type: types.DELETE_TO_DO,
        id
    }
}

export const EditToDoData = (data) => {
    return {
        type: types.EDIT_TO_DO_DATA,
        payload: data,

    }
}

