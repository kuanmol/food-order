import * as actionTypes from './ActionType';

const initialState = {
    menuItems: [],
    loading: false,
    error: null,
    search: [],
    message: null
};

const menuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_MENU_ITEMS_REQUEST:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case actionTypes.DELETE_MENU_ITEM_REQUEST:
        case actionTypes.SEARCH_MENU_ITEM_REQUEST:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: null
            };
        case actionTypes.CREATE_MENU_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                menuItems: [...state.menuItems, action.payload],
                message: "Food created successfully"
            };
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                menuItems: action.payload
            };
        case actionTypes.DELETE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                events: state.menuItems.filter(
                    (menuItem) => menuItem.id !== action.payload
                ),

            };
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
            console.log("updated item id", action.payload.id)
            return {
                ...state,
                loading: false,
                menuItems: state.menuItems.map(
                    (menuItem) => menuItem.id === action.payload.id ? action.payload : menuItem
                )
            };
        case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                search: action.payload
            };

        case actionTypes.CREATE_MENU_ITEMS_FAILED:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILED:
        case actionTypes.DELETE_MENU_ITEM_FAILED:
        case actionTypes.SEARCH_MENU_ITEM_FAILED:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
                message: null
            };
        default:
            return state;
    }
};

export default menuItemReducer;