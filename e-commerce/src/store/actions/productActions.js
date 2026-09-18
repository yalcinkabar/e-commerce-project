import api from "../../api/axios";

import {
    SET_PRODUCTS,
    SET_FETCH_STATE,
    SET_TOTAL,
    SET_PRODUCT,
} from "../actionTypes";

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    };
};

export const setTotal = (total) => {
    return {
        type: SET_TOTAL,
        payload: total,
    };
};
export const setProduct = (product) => {
    return {
        type: SET_PRODUCT,
        payload: product,
    };
};

export const setFetchState = (state) => {
    return {
        type: SET_FETCH_STATE,
        payload: state,
    };
};

export const fetchProducts = (
    params = {}
) => {
    return async (dispatch) => {
        try {
            dispatch(
                setFetchState("FETCHING")
            );

            const response =
                await api.get("/products", {
                    params,
                });

            dispatch(
                setProducts(
                    response.data.products
                )
            );

            dispatch(
                setTotal(
                    response.data.total
                )
            );

            dispatch(
                setFetchState("FETCHED")
            );
        } catch (error) {
            dispatch(
                setFetchState("FAILED")
            );

            console.error(error);
        }
    };
};
export const fetchProduct = (id) => {
    return async (dispatch) => {
        try {
            dispatch(
                setFetchState("FETCHING")
            );

            const response =
                await api.get(
                    `/products/${id}`
                );

            dispatch(
                setProduct(
                    response.data
                )
            );

            dispatch(
                setFetchState("FETCHED")
            );
        } catch (error) {
            dispatch(
                setFetchState("FAILED")
            );

            console.error(error);
        }
    };
};