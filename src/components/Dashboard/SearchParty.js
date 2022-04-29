import React from "react";
import { useDispatch } from "react-redux";
import { captureSearchParty } from "../../actions/input";
import { guestGetInfo, partyFindById } from "../../actions/supabase";
import {
  formatDate,
  formatTime,
  formatComments,
  formatSupplies,
  formatGuests,
} from "../../actions/format";

import { SET_SEARCHRESULTS } from "../../action-types";

export default function SearchParty() {
  const dispatch = useDispatch();

  const getSearchResults = async (e) => {
    let input = captureSearchParty(e);
    let party = await partyFindById(input);
    party.date = formatDate(party.date);
    party.time = formatTime(party.time);
    party.comments = formatComments(party.comments);
    party.guests = formatGuests(party.guests);
    party.supplies = formatSupplies(party.supplies);
    if (party) {
      let host = await guestGetInfo(party.hostId);
      party.host = host;
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
