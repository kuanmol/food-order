import { api } from "../../../config/api"
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";

export const updateOrderStatus = (orderId, orderStatus, jwt) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
        try {
            const response = await api.put(`/api/admin/orders/${orderId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            const updateOrder = response.data;
            console.log("updated order", updateOrder)
            dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: updateOrder })
        }
        catch (error) {
            console.log("catch error", data)
            dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error })
        }

    };
};

export const fetchRestaurantsOrder = ({ restaurantId, orderStatus, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
        try {
            const { data } = await api.get(`/api/admin/order/restaurant/${restaurantId}`, {
                params: { order_status: orderStatus },
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            const orders = data;
            console.log("restaurants order .......", orders)
            dispatch({ type: GET_RESTAURANTS_ORDER_SUCCESS, payload: data })
        }
        catch (error) {
            dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, payload: error })
        }

    };
};