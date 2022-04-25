import { SET_PARTY, SET_SUPPLIES, ADD_SUPPLIES } from "../action-types/index";
const initialState = null;
function party(state = initialState, action) {
  switch (action.type) {
    case SET_PARTY:
      return action.payload;
    case ADD_SUPPLIES:
      console.log("state is here", state);
      return {
        ...state,
        supplies: [...state.supplies, action.payload],
      };
    case SET_SUPPLIES:
      console.log(state);
      return {
        ...state,
        supplies: [...state.supplies, action.payload],
      };
    default:
      return state;
  }
}

export default party;
