import { combineReducers } from "redux";
import guest from "./guestReducer";
import page from "./pageReducer";
import searchResults from "./searchResultsReducer";

export default combineReducers({
  guest,
  page,
  searchResults,
});
