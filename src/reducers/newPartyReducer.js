import {
  SET_NEWPARTY_DETAILS,
  SET_NEWPARTY_GUESTLIST,
  RESET_NEWPARTY,
} from "../action-types/index";
const initialState = {
  details: null,
  guestList: null,
};

function newParty(state = initialState, action) {
  switch (action.type) {
    case RESET_NEWPARTY:
      return initialState;
    case SET_NEWPARTY_DETAILS:
      return {
        ...state,
        details: {
          name: action.payload.name,
          date: action.payload.date,
          time: action.payload.time,
          details: action.payload.details,
          location: action.payload.location,
        },
      };
    case SET_NEWPARTY_GUESTLIST:
      return {
        ...state,
        guestList: action.payload.guestList,
      };
    default:
      return state;
  }
}

export default newParty;
