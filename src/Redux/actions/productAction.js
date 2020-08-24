import {
    GetAllProduct,
    particularProduct,
    particularProductOwner,
} from "./productType";
import axios from "axios";
export const getProducts = () => async (dispatch) => {
    const res = await axios(
        "/allProduct/1"
    );

    dispatch({ type: GetAllProduct, payload: res.data });
};
export const particularProductDetail = (id) => async (dispatch) => {
    const res = await axios.get(`/singleProduct/${id}`);

    const userId = res.data.data.user;
    const particularProductOwners = await axios.get(
        `/userProfile/${userId}`
    );

    dispatch({ type: particularProduct, payload: res.data.data });
    dispatch({
        type: particularProductOwner,
        payload: particularProductOwners.data,
    });
};
export const addPro = (token, data) => async (dispatch) => {
    console.log(data);
    console.log(token);
};
