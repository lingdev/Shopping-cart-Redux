import {createStore, combineReducers} from "redux"
import ProductsReducer from "./reducers/ProductsReducer"
import CartReducer from "./reducers/CartReducer"
// import { devToolsEnhancer } from 'redux-devtools-extension';
const root = combineReducers({
    ProductsReducer,
    CartReducer
    
});
const store = createStore(root);
export default store;