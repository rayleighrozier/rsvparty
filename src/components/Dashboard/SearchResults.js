import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_SEARCHRESULTS, SET_GUEST_PARTIES } from "../../action-types";
import { guestUpdateParties } from "../../actions/supabase";

export default function SearchResults() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchResults = useSelector((state) => state.searchResults);
  const guest = useSelector((state) => state.guest);
  const clearSearchResults = () => {
    dispatch({ type: SET_SEARCHRESULTS, payload: null });
  };
  const addParty = async () => {
    let newPartyId = searchResults.partyId;
    let filtered = guest.parties.filter((id) => id === newPartyId);
    if (filtered.length > 0) {
      window.alert("You have already added this party");
    } else {
      let updatedParties = [...guest.parties, newPartyId];
      // need to add condition here to check guestlist
      dispatch({ type: SET_GUEST_PARTIES, payload: updatedParties });
      guestUpdateParties(guest.guestId, guest.parties);
      clearSearchResults();
      navigate(`/party/${newPartyId}`);
    }
  };

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
          <button onClick={addParty}>Add To My Parties</button>
          <button onClick={clearSearchResults}>X</button>
        </div>
      )}
    </div>
  );
}
