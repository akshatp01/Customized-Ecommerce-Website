import handleCart from './handleCart'
import { combineReducers } from "redux";
import userReducer from './user';
const rootReducers = combineReducers({
    handleCart, userReducer
})
export default rootReducers