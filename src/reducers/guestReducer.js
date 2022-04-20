import { SET_GUEST, RESET_GUEST } from "../action-types/index";
const initialState = {
  guestId: "",
  firstName: "",
  lastName: "",
  parties: null,
};

function guest(state = initialState, action) {
  switch (action.type) {
    case RESET_GUEST:
      return initialState;
    case SET_GUEST:
      return {
        ...state,
        guestId: action.payload.guestId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        parties: action.payload.parties,
      };
    default:
      return state;
  }
}

export default guest;
