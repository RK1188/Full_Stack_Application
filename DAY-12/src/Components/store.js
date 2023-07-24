
import { createStore } from "redux";

const initialState = {
  items: [],
  productItems: [],
  // email: "",
  // password: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };
    case "CLEAR_ITEMS":
      return {
        ...state,
        items: [],
      };
    case "ADD_PRODUCT_ITEMS":
      return {
        ...state,
        productItems: [...state.productItems, action.payload],
      };
    // case "POSTEMAIL":
    //   return {
    //     ...state,
    //     email: action.payload,
    //   };
    // case "POSTPASSWORD":
    //   return {
    //     ...state,
    //     password: action.payload,
    //   };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
