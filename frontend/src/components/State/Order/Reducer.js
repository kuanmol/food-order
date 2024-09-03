import { GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionTypes";

const initialState = {
    loading: false,
    orders: [],
    error: null,
};

export const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS_ORDERS_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case GET_USERS_ORDERS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                orders: payload
            };
        case GET_USERS_ORDERS_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
};

export default orderReducer;