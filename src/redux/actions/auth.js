import types from "../types";

export const loginFunction = () =>{
    return{
        type:types.LOGIN
    }
}

export const Logout = () =>{
    return {
        type: types.USER_LOGOUT
    }
}