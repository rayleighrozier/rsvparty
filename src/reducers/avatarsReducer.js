import { SET_AVATARS } from "../action-types/index";
const initialState = null;

function avatars(state = initialState, action) {
  switch (action.type) {
    case SET_AVATARS:
      return action.payload;
    default:
      return state;
  }
}

export default avatars;
