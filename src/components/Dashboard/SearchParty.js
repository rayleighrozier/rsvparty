import React from "react";
import { captureSearchParty } from "../../actions/input";
import { partyFindById } from "../../actions/supabase";
import { useDispatch } from "react-redux";
import { SET_SEARCHRESULTS } from "../../action-types";

export default function SearchParty() {
  const dispatch = useDispatch();
  const getSearchResults = async (e) => {
    let input = captureSearchParty(e);
    let party = await partyFindById(input);
    if (party) {
      dispatch({ type: SET_SEARCHRESULTS, payload: party });
      e.target.form[0].value = "";
    } else {
      dispatch({ type: SET_SEARCHRESULTS, payload: "notFound" });
    }
  };

  return (
    <div>
      <form>
        <input type="text" />
        <button onClick={(e) => getSearchResults(e)}>Find Party By ID</button>
      </form>
    </div>
  );
}
