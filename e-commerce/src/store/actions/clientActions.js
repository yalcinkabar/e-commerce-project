import api from "../../api/axios";


import {
    SET_USER,
    SET_ROLES,
    SET_CATEGORIES,
    SET_ADDRESS_LIST,
    SET_CARDS,
    SET_ORDERS,
} from "../actionTypes";


export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

export const setRoles = (roles) => {
    return {
        type: SET_ROLES,
        payload: roles,
    };
};

export const fetchRoles = () => {
    return async (dispatch) => {
        try {
            const response = await api.get("/roles");

            dispatch(setRoles(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

export const loginUser = (formData) => {
    return async (dispatch) => {
        try {
            const response = await api.post("/login", formData);

            const user = response.data;

            // JWT'yi kaydet
            localStorage.setItem("token", user.token);

            // Axios bundan sonraki isteklerde token'ı otomatik göndersin
            api.defaults.headers.common["Authorization"] =
                `Bearer ${user.token}`;

            dispatch(setUser(user));

            return user;
        } catch (error) {
            throw error;
        }
    };
};

export const verifyToken = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                return;
            }

            // Token'ı Axios'a ekle
            api.defaults.headers.common["Authorization"] =
                `Bearer ${token}`;

            const response = await api.get("/verify");

            dispatch(setUser(response.data));

            // Backend yeni token gönderdiyse güncelle
            if (response.data.token) {
                localStorage.setItem(
                    "token",
                    response.data.token
                );

                api.defaults.headers.common["Authorization"] =
                    `Bearer ${response.data.token}`;
            }

        } catch (error) {

            localStorage.removeItem("token");

            delete api.defaults.headers.common["Authorization"];

            console.error("Token verification failed:", error);
        }
    };
};

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories,
    };
};

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const response = await api.get("/categories");

            console.log(response.data);

            dispatch(
                setCategories(response.data)
            );
        } catch (error) {
            console.error(error);
        }
    };
};
export const setAddressList = (
    addressList
) => {
    return {
        type: SET_ADDRESS_LIST,
        payload: addressList,
    };
};
export const fetchAddresses = () => {
    return async (dispatch) => {
        try {
            const response =
                await api.get(
                    "/user/address"
                );

            dispatch(
                setAddressList(
                    response.data
                )
            );
        } catch (error) {
            console.error(error);
        }
    };
};
export const addAddress = (
    addressData
) => {
    return async (dispatch) => {
        try {
            await api.post(
                "/user/address",
                addressData
            );

            dispatch(
                fetchAddresses()
            );
        } catch (error) {
            console.error(error);
        }
    };
};
export const deleteAddress = (
    addressId
) => {
    return async (dispatch) => {
        try {
            await api.delete(
                `/user/address/${addressId}`
            );

            dispatch(
                fetchAddresses()
            );
        } catch (error) {
            console.error(error);
        }
    };
};
export const updateAddress = (
    addressData
) => {
    return async (dispatch) => {
        try {
            await api.put(
                "/user/address",
                addressData
            );

            dispatch(
                fetchAddresses()
            );
        } catch (error) {
            console.error(error);
        }
    };
};
export const setCards = (cards) => {
    return {
        type: SET_CARDS,
        payload: cards,
    };
};
export const fetchCards = () => {
    return async (dispatch) => {
        try {

            const response =
                await api.get("/user/card");

            dispatch(
                setCards(response.data)
            );
        } catch (error) {
            console.error(error);
        }
    };
};
export const addCard = (
    cardData
) => {
    return async (dispatch) => {
        try {
            await api.post(
                "/user/card",
                cardData
            );

            dispatch(fetchCards());
        } catch (error) {
            console.error(error);
        }
    };
};
export const updateCard = (
    cardData
) => {
    return async (dispatch) => {
        try {
            await api.put(
                "/user/card",
                cardData
            );

            dispatch(fetchCards());
        } catch (error) {
            console.error(error);
        }
    };
};
export const deleteCard = (
    cardId
) => {
    return async (dispatch) => {
        try {
            await api.delete(
                `/user/card/${cardId}`
            );

            dispatch(fetchCards());
        } catch (error) {
            console.error(error);
        }
    };
};
export const createOrder = (
    orderData
) => {
    return async () => {
        try {
            const response =
                await api.post(
                    "/order",
                    orderData
                );

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
};
export const setOrders = (
    orders
) => {
    return {
        type: SET_ORDERS,
        payload: orders,
    };
};
export const fetchOrders = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get("/order", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(setOrders(response.data));

        } catch (error) {
            console.error(error);
        }
    };
};