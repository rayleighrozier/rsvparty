import React from "react";
import { captureSearchParty } from "../../actions/input";
import { partyFindById } from "../../actions/supabase";
import { useSelector, useDispatch } from "react-redux";
import { SET_SEARCHRESULTS } from "../../action-types";

export default function SearchParty() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const getSearchResults = async (e) => {
    let input = captureSearchParty(e);
    let party = await partyFindById(input);
    dispatch({ type: SET_SEARCHRESULTS, payload: party });
  };

  return (
    <div>
      <form>
        <input type="text" />{" "}
        <button onClick={(e) => getSearchResults(e)}>Find Party By ID</button>
      </form>
    </div>
  );
}
