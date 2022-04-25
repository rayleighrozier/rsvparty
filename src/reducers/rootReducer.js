import { combineReducers } from "redux";
import guest from "./guestReducer";
import page from "./pageReducer";
import searchResults from "./searchResultsReducer";
import partyDetails from "./partyDetailsReducer";
import newParty from "./newPartyReducer";
import party from "./partyReducer";
import avatars from "./avatarsReducer";
import editDetails from "./editDetailsReducer";

export default combineReducers({
  guest,
  page,
  searchResults,
  partyDetails,
  newParty,
  party,
  avatars,
  editDetails,
});
