import { types } from "../types/types";

export const addItem = (name, cantidad, sobre = undefined, id, precio)=>({
    type: types.addNewItem,
    payload:{
         name,
         cantidad,
         sobre,
         id,
         precio

    }
})

export const itemDelete = (id)=>({
    type: types.deleteItem,
    payload:{
        id
    }
  
})

export const itemsLogout = ()=>({
    type: types.authlogout
})