import { combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { drawerReducer } from './reducers/drawer'
import {productsReducer} from './reducers/productsReducer'
import { productDetailReducer } from './reducers/productDetailReducer'

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
let initialState = {
    cart: {cartItems}
}

const reducers = combineReducers({

    drawer : drawerReducer,
    products : productsReducer,
    product : productDetailReducer
}) 

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;