import { SET_ATTENDING } from "../action-types/index";
const initialState = null;

function attending(state = initialState, action) {
  switch (action.type) {
    case SET_ATTENDING:
      return action.payload;
    default:
      return state;
  }
}

export default attending;
