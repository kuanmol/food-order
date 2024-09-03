import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";


const initialState = {
    loading: false,
    error: null,
    orders: [],
};

export const restaurantsOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANTS_ORDER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case GET_RESTAURANTS_ORDER_REQUEST:
            return {
                ...state,
                loading: false,
                orders: action.payload
            };
        case UPDATE_ORDER_STATUS_SUCCESS:
            const updatedOrders = state.orders.map((order) =>
                order.id === action.payload.id ? action.payload : order);
            return {
                ...state,
                loading: false,
                orders: updatedOrders
            };
        case GET_RESTAURANTS_ORDER_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};

export default restaurantsOrderReducer;