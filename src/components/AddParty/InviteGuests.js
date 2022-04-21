import React from "react";
import InviteGuestsForm from "./InviteGuestsForm";
import GuestList from "./GuestList";
import { useSelector, useDispatch } from "react-redux";
import { partyUpdateGuests } from "../../actions/supabase";
import { RESET_NEWPARTY, SET_PAGE } from "../../action-types";
import { useNavigate } from "react-router-dom";

export default function InviteGuests() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newParty = useSelector((state) => state.newParty);
  const saveParty = async () => {
    console.log("partyid", newParty.details.partyId);
    //send data to supabase
    await partyUpdateGuests(newParty.details.partyId, newParty.guestList);
    //navigate to party page
    dispatch({ type: SET_PAGE, payload: "party" });
    navigate(`/party/${newParty.details.partyId}`);
    // clear newParty variable
    dispatch({ type: RESET_NEWPARTY });
  };
  return (
    <div>
      <p>Party Created!</p>
      {newParty.details ? (
        <div>
          <p>{newParty.details.name}</p>
          <p>{newParty.details.date}</p>
          <p>{newParty.details.time}</p>
          <div>
            <p>{newParty.details.location.address}</p>
            <p>{newParty.details.location.city}</p>
            <p>{newParty.details.location.state}</p>
            <p>{newParty.details.location.zip}</p>
          </div>
        </div>
      ) : null}
      <h1>Invite Guests</h1>
      <InviteGuestsForm />
      <GuestList />
      {/* button will send to database, clear new party and redirect to party page */}
      <button onClick={saveParty}>Looks Good!</button>
    </div>
  );
}
