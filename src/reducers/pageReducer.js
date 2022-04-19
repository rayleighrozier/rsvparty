import { SET_PAGE } from "../action-types/index";
const initialState = "signIn";

function page(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
}

export default page;
