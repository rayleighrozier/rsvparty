import { SET_PARTY } from "../action-types/index";
const initialState = null;

function party(state = initialState, action) {
  switch (action.type) {
    case SET_PARTY:
      return action.payload;
    default:
      return state;
  }
}

export default party;
