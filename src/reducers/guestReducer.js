import { SET_GUESTID, RESET_GUEST } from "../action-types/index";
const initialState = {
  guestId: "",
};

function guest(state = initialState, action) {
  switch (action.type) {
    case RESET_GUEST:
      return initialState;
    case SET_GUESTID:
      return {
        ...state,
        guestId: action.payload,
      };
    default:
      return state;
  }
}

export default guest;
