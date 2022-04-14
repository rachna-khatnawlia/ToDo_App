import types from "../types";

import { setItemLocally } from "../../utils/utils";

const initialState = {
    todo_list: []
};

export const taskInput = (state = initialState, action) => {
    switch (action.type) {
        case types.SUBMIT_TO_DO: {
            console.log("payloadData in Submit form of Addtask",action.payload)
            const data = action.payload;

           let mergeData = [
               ...state.todo_list,
               ...data
           ]
           setItemLocally(mergeData).then((val)=>{
               console.log("Data set Locally", val);
           });
            return {
                ...state,
                todo_list: mergeData
            }

        }

        case types.DELETE_TO_DO: {
            const filteredTodos = state.todo_list.filter((element) => element.id !== action.id)
            
            return {
                ...state,
                todo_list: filteredTodos
            }

        }

        case types.EDIT_TO_DO_DATA: {
            console.log("update data", action.payload)
            let data = action.payload;

            let updateArray = state.todo_list.map((val) => {
                if (val.id === data.idForEdit) {
                    return data
                }
                return val
            })

            console.log("update todo with", updateArray);
            return {
                ...state,
                todo_list: updateArray
            }

            // const newArr = [...state.todo_list]
            // const userIndex = state.todo_list.findIndex((item) => item.id === data.idForEdit);
            // newArr[userIndex] = {
            //     id: data.idForEdit,
            //     mobile: data.mobile,
            //     name: data.name,
            //     age: data.age,
            //     address: data.address,
            // }
            // console.log(newArr);
            // return {
            //     ...state,
            //     todo_list: newArr
            // }
        }

        default: return state
    }
}