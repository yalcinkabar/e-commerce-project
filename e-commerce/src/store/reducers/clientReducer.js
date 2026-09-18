import {
    SET_USER,
    SET_ROLES,
    SET_CATEGORIES,
    SET_ADDRESS_LIST,
    SET_CARDS,
    SET_ORDERS,
} from "../actionTypes";

const initialState = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "",
    language: "",
    categories: [],
    orderList: [],
};

export default function clientReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        case SET_ROLES:
            return {
                ...state,
                roles: action.payload,
            };

        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };

        case SET_ADDRESS_LIST:
            return {
                ...state,
                addressList: action.payload,
            };

        case SET_CARDS:
            return {
                ...state,
                creditCards: action.payload,
            };
        case SET_ORDERS:
            return {
                ...state,
                orderList:
                    action.payload,
            };

        default:
            return state;
    }
}