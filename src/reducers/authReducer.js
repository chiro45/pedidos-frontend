import { types } from "../types/types";



const initialState={
    register:false
    
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
        case types.authlogout:
            return{
                register: false
            }
        default:
            return state
    }




}