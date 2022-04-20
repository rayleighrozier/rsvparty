import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SEARCHRESULTS } from "../../action-types";
import { guestUpdateParties } from "../../actions/supabase";

export default function SearchResults() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const clearSearchResults = () => {
    dispatch({ type: SET_SEARCHRESULTS, payload: null });
  };
  const addParty = async () => {
    let newPartyId = searchResults.partyId;
  };
  guestUpdateParties("75e383a8-1500-4843-897d-cb91c2e80fed", ["testttttt"]);
  return (
    <div>
      {searchResults === "notFound" ? (
        <div>
          <p>Party Not Found</p>
          <button onClick={clearSearchResults}>X</button>
        </div>
      ) : (
        <div>
          <p>{searchResults?.name}</p>
          <p>{searchResults?.date}</p>
          <p>{searchResults?.time}</p>
          <p>{searchResults?.details}</p>
          <button>Add To My Parties</button>
          <button onClick={clearSearchResults}>X</button>
        </div>
      )}
    </div>
  );
}
