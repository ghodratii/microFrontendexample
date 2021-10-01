import { combineReducers } from "redux";

import productListReducer from "./productList/productList.reducer";
import selectedProductsReducer from "./selectedProducts/selectedProducts.reducer";

const rootReducer = combineReducers({
  producList: productListReducer,
  selectedProducts: selectedProductsReducer,
});

export default rootReducer;
