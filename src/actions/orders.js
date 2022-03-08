import { types } from "../types/types";

export const addItem = (name, cantidad, sobre = undefined, id)=>({
    type: types.addNewItem,
    payload:{
         name,
         cantidad,
         sobre,
         id
    }
})

export const itemDelete = (id)=>({
    type: types.deleteItem,
    payload:{
        id,
    }
  
})

export const itemsLogout = ()=>({
    type: types.authlogout
})