import { combineReducers } from "redux";
import guest from "./guestReducer";
import page from "./pageReducer";
import signedIn from "./signedInReducer";

export default combineReducers({
  guest,
  page,
  signedIn,
});
