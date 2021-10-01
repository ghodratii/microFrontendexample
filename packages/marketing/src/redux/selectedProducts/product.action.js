import selectedProductsActionType from "./product.type";

export const addItem = (item) => ({
  type: selectedProductsActionType.ADD_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: selectedProductsActionType.REMOVE_ITEM,
  payload: item,
});
