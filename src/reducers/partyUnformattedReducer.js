import { SET_PARTYUNFORMATTED } from "../action-types/index";
const initialState = null;

function partyUnformatted(state = initialState, action) {
  switch (action.type) {
    case SET_PARTYUNFORMATTED:
      return action.payload;
    default:
      return state;
  }
}

export default partyUnformatted;
