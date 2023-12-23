import { ADD_TO_CART, FORM_DATA_INTO_TABLE } from "./Constant";

const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case FORM_DATA_INTO_TABLE:
      console.log(action.data);
      return [action.data];
    default:
      return data;
  }
};

export default cartData;
