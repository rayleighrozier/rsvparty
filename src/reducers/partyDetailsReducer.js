import { SET_PARTYDETAILS } from "../action-types/index";
const initialState = null;

function partyDetails(state = initialState, action) {
  switch (action.type) {
    case SET_PARTYDETAILS:
      return action.payload;
    default:
      return state;
  }
}

export default partyDetails;
