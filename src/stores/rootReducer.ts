import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice.mjs"


const rootReducer = combineReducers(
    {
        cart: cartReducer
    }
)

export default rootReducer;