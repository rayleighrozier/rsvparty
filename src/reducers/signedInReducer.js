import { SET_SIGNEDIN } from "../action-types/index";
const initialState = false;

function signedIn(state = initialState, action) {
  switch (action.type) {
    case SET_SIGNEDIN:
      return action.payload;
    default:
      return state;
  }
}

export default signedIn;
