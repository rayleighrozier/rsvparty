import { SET_PARTY, ADD_SUPPLIES } from "../action-types/index";
const initialState = { supplies: [] };
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

    default:
      return state;
  }
}

export default party;
