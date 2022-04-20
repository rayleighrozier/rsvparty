import {
  SET_GUEST,
  RESET_GUEST,
  SET_GUEST_PARTIES,
} from "../action-types/index";
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
    case SET_GUEST_PARTIES:
      return {
        ...state,
        parties: action.payload,
      };
    default:
      return state;
  }
}

export default guest;
