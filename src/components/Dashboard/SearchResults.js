import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_SEARCHRESULTS, SET_GUEST_PARTIES } from "../../action-types";
import { guestUpdateParties, partyFindById } from "../../actions/supabase";
import { formatDate, formatTime } from "../../actions/format";
import { checkIfInvited } from "../../actions/guestList";

export default function SearchResults() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchResults = useSelector((state) => state.searchResults);
  const guest = useSelector((state) => state.guest);
  const [invited, setInvited] = useState(true);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const clearSearchResults = () => {
    dispatch({ type: SET_SEARCHRESULTS, payload: null });
  };
  const addParty = async () => {
    let newPartyId = searchResults.partyId;
    let invitedCheck = checkIfInvited(guest, searchResults.guests);
    if (invitedCheck) {
      let updatedParties = [];
      if (guest.parties !== null) {
        let filtered = guest.parties.filter((id) => id === newPartyId);
        if (filtered.length > 0) {
          setAlreadyAdded(true);
        } else {
          updatedParties = [...guest.parties, newPartyId];
          dispatch({ type: SET_GUEST_PARTIES, payload: updatedParties });
          guestUpdateParties(guest.guestId, updatedParties);
          navigate(`/party/${newPartyId}`);
          clearSearchResults();
        }
      } else {
        updatedParties = [newPartyId];
        dispatch({ type: SET_GUEST_PARTIES, payload: updatedParties });
        guestUpdateParties(guest.guestId, updatedParties);
        navigate(`/party/${newPartyId}`);
        clearSearchResults();
      }
    } else {
      setInvited(false);
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
          <p>
            Hosted by {searchResults?.host?.firstName}{" "}
            {searchResults?.host?.lastName}
          </p>
          <button onClick={addParty}>Add To My Parties</button>
          <button onClick={clearSearchResults}>X</button>
          {invited ? null : (
            <p>Oops! Looks like you aren't on the guest list.</p>
          )}
          {alreadyAdded ? <p>You've already added this party!</p> : null}
        </div>
      )}
    </div>
  );
}
