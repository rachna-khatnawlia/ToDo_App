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
        payload: {
            id: Math.floor(Math.random()*1000),
            data: data
        },
    }
}

export const removeToDo = (id) => {
    return {
        type: types.DELETE_TO_DO,
        id
    }
}

