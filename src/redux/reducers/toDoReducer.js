import types from "../types";

const initialState = {
    todo_list: []
};

export const taskInput = (state = initialState, action) => {
    switch (action.type) {
        case types.SUBMIT_TO_DO:
            const { id, data } = action.payload;
            return {
                ...state,
                todo_list: [
                    ...state.todo_list, {
                        id: id,
                        mobile: data.InputMobile,
                        name: data.InputName,
                        age: data.InputAge,
                        address: data.InputAddress,
                    },
                ]
            }

        case types.DELETE_TO_DO:
            const filteredTodos = state.todo_list.filter((element) => element.id !== action.id)
            return{
                ...state,
                todo_list : filteredTodos
            }
        
        case types.EDIT_TO_DO_DATA:
            


        default: return state
    }
}