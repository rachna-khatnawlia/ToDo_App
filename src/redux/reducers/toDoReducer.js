import types from "../types";
import update from "react-addons-update";

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
            return {
                ...state,
                todo_list: filteredTodos
            }

        case types.EDIT_TO_DO_DATA:
            console.log('hello fro reducer', action.payload.id, action.payload.data, action.payload.index);
            // return{
            //     function update(mobile,name,age,address){
            //         var i=0;
            //         while(i<data.todo_list.length{
            //             if(todo_list[i].id == action.payload.id){
            //                 mobile: actiondata.InputMobile,
            //                 name: actiondata.InputName,
            //                 age: actiondata.InputAge,
            //                 address: actiondata.InputAddress,
            //                 todo_list[i].mobile = ACTION.PAYLOAD.
            //             }
            //             i++;
            //         })
            //     }
            //     data.forEach(x => update(x))

                // ...state,
                // todo_list: [
                //     ...state.todo_list, {
                //         id: action.payload.id,
                //         mobile: action.payload.data.InputMobile,
                //         name: action.payload.data.InputName,
                //         age: action.payload.data.InputAge,
                //         address: action.payload.data.InputAddress,
                //     },
                // ]
            // }


        default: return state
    }

}