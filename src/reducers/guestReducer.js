import { TEST_GUEST } from "../action-types/index";
const initialState = {};

function guest(state = initialState, action) {
  switch (action.type) {
    case TEST_GUEST:
      return { ...state };
    default:
      return state;
  }
}

export default guest;
