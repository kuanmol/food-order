import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import restaurantReducer from "./Restaurant/Reducer";
import menuItemReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import restaurantsOrderReducer from "./Restaurant Order/Reducer";
import ingredientReducer from "./Ingredients/Reducer";


const rooteReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantsOrderReducer,
    ingredients: ingredientReducer
});

export const store = legacy_createStore
    (rooteReducer, applyMiddleware(thunk));