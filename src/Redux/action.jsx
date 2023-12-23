import { ADD_TO_CART,FORM_DATA_INTO_TABLE } from "./Constant";

export const AddToCart = (data) => {
  console.log("action is calledz");
  return { type: ADD_TO_CART, data: data };
};
export const FormData = (data) => {
  console.log("acton is called from form")
  return{type:FORM_DATA_INTO_TABLE,data:data}
};
