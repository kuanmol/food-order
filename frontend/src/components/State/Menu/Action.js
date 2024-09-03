import { type } from "@testing-library/user-event/dist/type";
import { api } from "../../../config/api"
import { CREATE_MENU_ITEMS_FAILED, CREATE_MENU_ITEMS_REQUEST, CREATE_MENU_ITEMS_SUCCESS, DELETE_MENU_ITEM_FAILED, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILED, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILED, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILED, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType"

export const createMenuItem = ({ menu, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_MENU_ITEMS_REQUEST });
        try {
            const { data } = await api.post("api/admin/food", menu,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
            console.log("craeted menu", data);
            dispatch({ type: CREATE_MENU_ITEMS_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: CREATE_MENU_ITEMS_FAILED, payload: error });
        }
    };
};

export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
        try {
            const { data } = await api.get(
                `api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}
                &seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`,
                    },
                });
            console.log("menu item by restaurants ", data);
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILED, payload: error });
        }
    };
};

export const searchMenuItem = ({ keyword, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.get(
                `api/food/search?name=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            console.log("data____________ ", data);
            dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: SEARCH_MENU_ITEM_FAILED, payload: error });
        }
    };
};

// export const getAllIngredientsOfMenuItem = (reqData) => {
//     return async (dispatch) => {
//         dispatch({ type: getall });
//         try {
//             const { data } = await api.get(
//                 `api/food/search?name=${keyword}`, {
//                 headers: {
//                     Authorization: `Bearer ${reqData.jwt}`,
//                 },
//             });
//             console.log("data____________ ", data);
//             dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
//         } catch (error) {
//             console.log("catch error", error);
//             dispatch({ type: SEARCH_MENU_ITEM_FAILED, payload: error });
//         }
//     };
// };

export const updateMenuItemsAvailability = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
        try {
            const { data } = await api.put(
                `api/admin/food=${foodId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("update menuItems Availability", data);
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data });
        } catch (error) {
            console.log("error", error)
            console.log("catch error", error);
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILED, payload: error });
        }
    };
};

export const deleteFoodAction = ({ foodId, jwt }) => {
     async (dispatch) => {
        dispatch({ type: DELETE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.delete(
                `api/admin/food=${foodId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("delete food", data);
            dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: foodId });
        } catch (error) {
            console.log("error", error)
            console.log("catch error", error);
            dispatch({ type: DELETE_MENU_ITEM_FAILED, payload: error });
        }
    };
};
