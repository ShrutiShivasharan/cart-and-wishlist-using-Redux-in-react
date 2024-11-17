import { combineReducers, createStore } from "redux";
import CartReducer from './reducers/CartReducer'
import WishlistReducer from  './reducers/WishlistReducer'

const rootReducer = combineReducers({
    cart : CartReducer,
    wishlist : WishlistReducer
})

const store = createStore(rootReducer);
export default store;