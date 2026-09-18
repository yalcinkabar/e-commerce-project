import {
    SET_CART,
    SET_PAYMENT,
    SET_ADDRESS,
} from "../actionTypes";

export const setCart = (cart) => {
    return {
        type: SET_CART,
        payload: cart,
    };
};

export const setPayment = (payment) => {
    return {
        type: SET_PAYMENT,
        payload: payment,
    };
};

export const setAddress = (address) => {
    return {
        type: SET_ADDRESS,
        payload: address,
    };
};
export const addToCart = (product) => {
    return (dispatch, getState) => {
        const cart =
            getState().shoppingCart.cart;

        const existingItem = cart.find(
            (item) =>
                item.product.id === product.id
        );

        let newCart;

        if (existingItem) {
            newCart = cart.map((item) =>
                item.product.id === product.id
                    ? {
                        ...item,
                        count: item.count + 1,
                    }
                    : item
            );
        } else {
            newCart = [
                ...cart,
                {
                    count: 1,
                    checked: true,
                    product,
                },
            ];
        }

        dispatch(setCart(newCart));
    };
};
export const increaseCartItem = (productId) => {
    return (dispatch, getState) => {
        const cart =
            getState().shoppingCart.cart;

        const newCart = cart.map((item) =>
            item.product.id === productId
                ? {
                    ...item,
                    count: item.count + 1,
                }
                : item
        );

        dispatch(setCart(newCart));
    };
};
export const decreaseCartItem = (productId) => {
    return (dispatch, getState) => {
        const cart =
            getState().shoppingCart.cart;

        const newCart = cart
            .map((item) =>
                item.product.id === productId
                    ? {
                        ...item,
                        count: item.count - 1,
                    }
                    : item
            )
            .filter((item) => item.count > 0);

        dispatch(setCart(newCart));
    };
};
export const removeCartItem = (productId) => {
    return (dispatch, getState) => {
        const cart =
            getState().shoppingCart.cart;

        const newCart = cart.filter(
            (item) =>
                item.product.id !== productId
        );

        dispatch(setCart(newCart));
    };
};
export const toggleCartItem = (
    productId
) => {
    return (dispatch, getState) => {
        const cart =
            getState().shoppingCart.cart;

        const newCart = cart.map(
            (item) =>
                item.product.id ===
                    productId
                    ? {
                        ...item,
                        checked:
                            !item.checked,
                    }
                    : item
        );

        dispatch(setCart(newCart));
    };
};