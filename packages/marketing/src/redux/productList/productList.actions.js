import axios from "axios";

import ProductListActionTypes from "./productList.type";

export const fetchProductsStart = () => ({
  type: ProductListActionTypes.FETCH_PRODUCTS_START,
});
export const fetchProductsSuccess = (productList) => ({
  type: ProductListActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: productList,
});
export const fetchProductsFailure = (errorMessage) => ({
  type: ProductListActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage,
});
export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsStart());

  axios
    .get("http://dummy.restapiexample.com/api/v1/employees")
    .then((response) => {
      dispatch(fetchProductsSuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(fetchProductsFailure(error.message));
    });
};
