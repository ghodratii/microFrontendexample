import selectedProductsActionType from "./product.type";

const INITIAL_STATE = {
  selectItems: [],
};
const selectedProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case selectedProductsActionType.ADD_ITEM:
      return {
        ...state,
        selectItems: [...state.selectItems, action.payload],
      };

    case selectedProductsActionType.REMOVE_ITEM:
      return {
        ...state,
        selectItems: state.selectItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default selectedProductsReducer;
