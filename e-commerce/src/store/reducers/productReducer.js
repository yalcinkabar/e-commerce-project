import {
    SET_CATEGORIES,
    SET_PRODUCTS,
    SET_FETCH_STATE,
    SET_TOTAL,
    SET_PRODUCT,
} from "../actionTypes";


const initialState = {
    categories: [],
    productList: [],
    selectedProduct: null,
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
};

export default function productReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };

        case SET_PRODUCTS:
            return {
                ...state,
                productList: action.payload,
            };

        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload,
            };
        case SET_TOTAL:
            return {
                ...state,
                total: action.payload,
            };
        case SET_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            };

        default:
            return state;
    }
}