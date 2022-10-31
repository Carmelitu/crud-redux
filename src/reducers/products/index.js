import { ADD_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT_OK } from "../../types";

const initialState = {
  products: [],
  error: null,
  loading: false
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
        return {
            ...state,
            loading: true,
        };
    case ADD_PRODUCT_OK:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      };
    default:
        return state;
  }
}

export default productsReducer;