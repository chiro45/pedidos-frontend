import { types } from "../types/types";



const initialState={
    register: true,
            user: {
                name : 'juan',
                mesa:'juan',
            }
    
}



export const authReducer = (state = initialState, action)=>{

    switch (action.type) {
        case types.authlogin:
        return{
            ...state,
            register: true,
            user: {
                name : action.payload.name,
                mesa: action.payload.mesa
            }
        }
        default:
            return state
    }




}