import {api} from "../../../config/api.js";
import { UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";

export const updateOrderStatus = ({orderId,orderStatus,jwt}) => {
    return async (dispatch) => {
        try{
            dispatch({type:UPDATE_ORDER_STATUS_REQUEST});
            const response = await api.put(
                `/api/admin/orders/${orderId}/${orderStatus}`,{},{
                    headers:{
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            const updatedOrder = response.data;
            console.log("updated order", updatedOrder);
            dispatch({
                type:UPDATE_ORDER_STATUS_SUCCESS,
                payload:updatedOrder,
            });
        }catch(error){
            console.log("catch error", error);
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE, error});
        }
    };
};

