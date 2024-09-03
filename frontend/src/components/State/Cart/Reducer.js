import { LOGOUT } from "../Authentication/ActionTypes";
import * as actionTypes from "./ActionType";

const initialState = {
    cart: null,
    cartItems: [],
    loading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FIND_CART_REQUEST:
        case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
        case actionTypes.UPDATE_CARTITEM_REQUEST:
        case actionTypes.REMOVE_CARTITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FIND_CART_SUCCESS:
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartItems: action.payload.items,
            };
        case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [action.payload, ...state.cartItems],
            };
        case actionTypes.UPDATE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.map(
                    (item) => item.id === action.payload.id ? action.payload : item
                )
            };
        case actionTypes.REMOVE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload
                ),

            };
        case actionTypes.FIND_CART_FAILURE:
        case actionTypes.UPDATE_CARTITEM_FAILURE:
        case actionTypes.REMOVE_CARTITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,

            };
        case LOGOUT:
            localStorage.removeItem("jwt");
            return { ...state, cartItems: [], cart: null, success: "logout success" };
        default:
            return state;
    }
};

export default cartReducer;