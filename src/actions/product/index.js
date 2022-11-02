import axiosClient from "../../services/axios";
import Swal from "sweetalert2";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_OK,
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_OK,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_OK,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_OK,
  EDIT_PRODUCT_ERROR
} from "../../types";

const addProduct = () => ({
  type: ADD_PRODUCT
})

const addProductOK = (product) => ({
  type: ADD_PRODUCT_OK,
  payload: product
})

const addProductError = (error) => ({
  type: ADD_PRODUCT_ERROR
})


export const createNewProduct = (product) => {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      await axiosClient.post('/products', product);
      dispatch(addProductOK(product));
      Swal.fire('Correct', 'Product added successfully', 'success');
    } catch (error) {
      dispatch(addProductError());
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error ocurred. Please, try again later.'
      });
    }
  }
}

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProducts())
    try {
      const res = await axiosClient.get('/products');
      dispatch(fetchProductsOK(res.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchProductsError());
    }
  }
}

const fetchProducts = () => ({
  type: GET_PRODUCTS_STARTED
});

const fetchProductsOK = (products) => ({
  type: GET_PRODUCTS_OK,
  payload: products,
});

const fetchProductsError = () => ({
  type: GET_PRODUCTS_ERROR
})

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(dispatchDeleteProduct())
    try {
      await axiosClient.delete(`/products/${id}`);
      dispatch(dispatchDeleteProductOK(id));
    } catch (error) {
      console.log(error);
      dispatch(dispatchDeleteProductError());
    }
  }
}

const dispatchDeleteProduct = () => ({
  type: DELETE_PRODUCT
})

const dispatchDeleteProductOK = (id) => ({
    type: DELETE_PRODUCT_OK,
    payload: id,
});

const dispatchDeleteProductError = (id) => ({
    type: DELETE_PRODUCT_ERROR,
    payload: true,
});

export const editProduct = (product) => {
  return async (dispatch) => {
    dispatch(dispatchEditProduct(product));

    try {
      console.log(product)
      await axiosClient.put(`/products/${product.id}`, product);
      dispatch(dispatchEditProductOK(product));
    } catch (error) {
      console.log(error)
      dispatch(dispatchEditProductError());
    }
  }
}

const dispatchEditProduct = () => ({
  type: EDIT_PRODUCT
})

const dispatchEditProductOK = (product) => ({
  type: EDIT_PRODUCT_OK,
  payload: product
});

const dispatchEditProductError = () => ({
  type: EDIT_PRODUCT_ERROR,
  payload: true
});