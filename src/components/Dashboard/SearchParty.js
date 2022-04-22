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
      <form className="searchPartyContainer">
        <p className="searchPartyTitle">FIND PARTY BY ID</p>
        <input className="searchPartyInput" type="text" />
        <button
          className="searchPartyButton"
          onClick={(e) => getSearchResults(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
}
