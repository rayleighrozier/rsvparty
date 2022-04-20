import { combineReducers } from "redux";
import guest from "./guestReducer";
import page from "./pageReducer";
import searchResults from "./searchResultsReducer";
import partyDetails from "./partyDetailsReducer";

export default combineReducers({
  guest,
  page,
  searchResults,
  partyDetails,
});
