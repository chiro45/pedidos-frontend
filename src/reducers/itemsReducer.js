import { types } from "../types/types";

const initialState = {
    items: []
}
export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addNewItem:
            return {
                ...state,
                items:[
                    ...state.items,
                    action.payload
                ]
            }   
            case types.deleteItem:
                return {
                    ...state,
                    items: state.items.filter( e => (e.id !=action.payload.id))
                } 
            
            case types.authlogout:
                return{
                    ...initialState
                }    
        
    
        default:
           return state;
    }
}