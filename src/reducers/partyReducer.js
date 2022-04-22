import { SET_PARTY, SET_SUPPLIES } from "../action-types/index";
const initialState = null;

function party(state = initialState, action) {
  switch (action.type) {
    case SET_PARTY:
      return action.payload;
    case SET_SUPPLIES:
      return {
        ...state,
        supplies: action.payload,
      };
    default:
      return state;
  }
}

export default party;
