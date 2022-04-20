import { SET_SEARCHRESULTS } from "../action-types/index";
const initialState = {};

function searchResults(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCHRESULTS:
      return action.payload;
    default:
      return state;
  }
}

export default searchResults;
