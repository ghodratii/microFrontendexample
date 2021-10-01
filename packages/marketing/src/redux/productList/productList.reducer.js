import ProductListActionTypes from "./productList.type";

const INITIAL_STATE = {
  productList: [],
  isFetching: false,
  errorMessage: undefined,
};

const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductListActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ProductListActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        productList: action.payload,
      };
    case ProductListActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default productListReducer;
