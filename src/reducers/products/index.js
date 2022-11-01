import { ADD_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT_OK, GET_PRODUCTS_ERROR, GET_PRODUCTS_OK, GET_PRODUCTS_STARTED } from "../../types";

const initialState = {
  products: [],
  error: null,
  loading: false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_STARTED:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_PRODUCT_OK:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload],
            };
        case GET_PRODUCTS_OK:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload,
            };
        default:
            return state;
    }
}

export default productsReducer;