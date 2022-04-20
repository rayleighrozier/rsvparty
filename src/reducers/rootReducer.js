import { combineReducers } from "redux";
import guest from "./guestReducer";
import page from "./pageReducer";

export default combineReducers({
  guest,
  page,
});
