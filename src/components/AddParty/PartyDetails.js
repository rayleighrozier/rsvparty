import React from "react";
import { partyAddRow } from "../../actions/supabase";
import { useDispatch, useSelector } from "react-redux";
import { SET_PAGE } from "../../action-types";

export default function PartyDetails() {
  const dispatch = useDispatch();
  const guestId = useSelector((state) => state.guest.guestId);

  //these are fake variables we will replace with inputs from the form)
  let name = "Test Party3";
  let date = new Date();
  let time = "6:00 PM";
  let location = {
    address1: "123 Sesame Street",
  };
  let details = "more party details here";

  const createParty = async () => {
    await partyAddRow(guestId, name, date, time, details, location);
    dispatch({ type: SET_PAGE, payload: "inviteGuests" });
  };
  return (
    <div>
      <h1>Input Details</h1>
      <button onClick={createParty}>Submit</button>
    </div>
  );
}
