import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { guestUpdateParties } from "../../actions/supabase";
import { checkIfInvited } from "../../actions/guestList";
import { SET_SEARCHRESULTS, SET_GUEST_PARTIES } from "../../action-types";
import "./SearchResults.css";

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
    <div className="search-results-container">
      {searchResults === "notFound" ? (
        <div className="search-results">
          <p className="search-results-header">Party Not Found</p>
          <div className="search-results-body search-results-not-found">
            <div className="search-results-buttons">
              <button onClick={clearSearchResults}>X</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="search-results">
          <p className="search-results-header">{searchResults?.name}</p>
          <div className="search-results-body">
            <p>
              Hosted by {searchResults?.host?.firstName}{" "}
              {searchResults?.host?.lastName}
            </p>
            <div className="search-results-buttons">
              <button onClick={addParty}>Add To My Parties</button>
              <button onClick={clearSearchResults}>X</button>
            </div>

            {invited ? null : (
              <p className="search-results-oops">
                Oops! Looks like you aren't on the guest list.
              </p>
            )}
            {alreadyAdded ? (
              <p className=" search-results-oops">
                You've already added this party!
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
