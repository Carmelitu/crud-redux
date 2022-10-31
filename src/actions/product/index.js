import { ADD_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT_OK } from "../../types";

const addProduct = () => {
  return {
    type: ADD_PRODUCT
  }
}

const addProductOK = (product) => {
  return {
    type: ADD_PRODUCT_OK,
    payload: product
  }
}

const addProductError = () => {
  
}


export function createNewProduct(product) {
  return (dispatch) => {
    dispatch(addProduct());
    try {
      dispatch(addProductOK(product));
    } catch (error) {
      dispatch(addProductError(true));
    }
  }
}