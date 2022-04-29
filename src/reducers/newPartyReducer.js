import {
  SET_NEWPARTY_DETAILS,
  UPDATE_NEWPARTY_GUESTLIST,
  RESET_NEWPARTY,
} from "../action-types/index";
const initialState = {
  details: null,
  guestList: [],
};

function newParty(state = initialState, action) {
  switch (action.type) {
    case RESET_NEWPARTY:
      return initialState;
    case SET_NEWPARTY_DETAILS:
      return {
        ...state,
        details: {
          partyId: action.payload.partyId,
          name: action.payload.name,
          date: action.payload.date,
          time: action.payload.time,
          details: action.payload.details,
          location: action.payload.location,
        },
      };
    case UPDATE_NEWPARTY_GUESTLIST:
      return {
        ...state,
        guestList: [...state.guestList, action.payload],
      };
    default:
      return state;
  }
}

export default newParty;
