import types from "../types";

import { setItemLocally } from "../../utils/utils";

const initialState = {
    todo_list: []
};

export const taskInput = (state = initialState, action) => {
    switch (action.type) {
        case types.SUBMIT_TO_DO: {
            console.log("payloadData in Submit form of Addtask", action.payload)
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
            // -------------------------------delete on the basis of index------------------------------------
            const deleteArrayItem = [...state.todo_list];
            const indexToBeDeleted = state.todo_list.findIndex((element) => element.id === action.id)
            console.log("Index to delete",indexToBeDeleted) //find index to delete
            if(indexToBeDeleted>=0){
                deleteArrayItem.splice(indexToBeDeleted, 1); //delete one row from that returned inndex 
            }
            else{
                console.log("Cannot delete item as its not in the list");
            }

            setItemLocally(deleteArrayItem).then((val)=>{
                console.log("values after delete operation should be an empty array",val)
            })
            
            return {
                ...state,
                todo_list: deleteArrayItem
            }


            // -------------------------------delete on the basis of id---------------------------------------
            // delete on the basis of id
            // const filteredTodos = state.todo_list.filter((element) => element.id !== action.id)
            
            // return {
            //     ...state,
            //     todo_list: filteredTodos
            // }



        }

        case types.EDIT_TO_DO_DATA: {
            // -------------------------------Update on the basis of id using findIndex------------------------------------
            const updateArrayitem = [...state.todo_list]

            // console.log("Id for edit", action.payload.idForEdit);
            // console.log("Id for edit", action.payload);

            const data = action.payload;

            const indexToBeUpdated = state.todo_list.findIndex((element) => element.id === data.idForEdit); //find index to update
            console.log("index to update",indexToBeUpdated);

            updateArrayitem[indexToBeUpdated] = {       //update data from returned inndex
                id: data.idForEdit,
                mobile: data.mobile,
                name: data.name,
                age: data.age,
                address: data.address,
            }
            console.log(updateArrayitem);

            return {
                ...state,
                todo_list: updateArrayitem
            }


            // -------------------------------Update on the basis of id using map - method:1 ------------------------------------
            // console.log("update data", action.payload)
            // let data = action.payload;
            // 
            // let updateArray = state.todo_list.map((val) => {
            //     if (val.id === data.idForEdit) {
            //         return data
            //     }
            //     return val
            // })
            // 
            // console.log("update todo with", updateArray);
            // return {
            //     ...state,
            //     todo_list: updateArray
            // }

            // -------------------------------Update on the basis of id using filter - method:2 ------------------------------------
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