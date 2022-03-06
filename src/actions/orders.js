import { types } from "../types/types";

export const addItem = (name, cantidad)=>({
    type: types.addNewItem,
    payload:{
         name,
         cantidad
    }
})