import { store } from "../store";
import types from "../types";

const { dispatch } = store;

export const loginFunction = (data) => {
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}

export const Logout = () => {
    dispatch({
        type: types.USER_LOGOUT,
    })
}