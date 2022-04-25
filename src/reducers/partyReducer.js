import { SET_PARTY, SET_PARTY_COMMENTS } from "../action-types/index";
const initialState = null;

function party(state = initialState, action) {
  switch (action.type) {
    case SET_PARTY:
      return action.payload;
    case SET_PARTY_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
}

export default party;
