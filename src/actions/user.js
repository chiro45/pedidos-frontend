import { types } from "../types/types"



export const login = (name, mesa)=>({
    
        type: types.authlogin,
        payload:{
            name,
            mesa
        }
    
       
})


export const logout = ()=>({
    
    type: types.authlogout

   
})