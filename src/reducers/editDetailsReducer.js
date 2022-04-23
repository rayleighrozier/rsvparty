import { RESET_EDITDETAILS, SET_EDITDETAILS } from "../action-types/index";
const initialState = {
  name: null,
  date: null,
  time: null,
  location: null,
};
function editDetails(state = initialState, action) {
  switch (action.type) {
    case RESET_EDITDETAILS:
      return initialState;
    case SET_EDITDETAILS:
      return action.payload;
    default:
      return state;
  }
}

export default editDetails;
