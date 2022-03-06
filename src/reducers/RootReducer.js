import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { itemsReducer } from "./itemsReducer";
import { uiReducer } from "./uiReducer";



export const RootReducers = combineReducers({
    authReducer,
    uiReducer,
    itemsReducer
})