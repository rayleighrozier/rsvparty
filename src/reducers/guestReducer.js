import {
  SET_GUEST,
  RESET_GUEST,
  SET_GUEST_PARTIES,
  SET_GUEST_AVATAR,
  SET_GUEST_AVATARDATA,
} from "../action-types/index";
const initialState = {
  guestId: "",
  firstName: "",
  lastName: "",
  parties: null,
  avatar: null,
  avatarData: null,
  email: "",
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
        avatar: action.payload.avatar,
        email: action.payload.email,
      };
    case SET_GUEST_PARTIES:
      return {
        ...state,
        parties: action.payload,
      };
    case SET_GUEST_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    case SET_GUEST_AVATARDATA:
      return {
        ...state,
        avatarData: action.payload,
      };
    default:
      return state;
  }
}

export default guest;
