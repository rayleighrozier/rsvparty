import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { partyAddRow } from "../../actions/supabase";
import { SET_PAGE } from "../../action-types";
import InviteGuests from "./InviteGuests";

export default function AddParty() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const guestId = useSelector((state) => state.guest.guestId);
  //these are fake variables we will replace with inputs from form)
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
      {page === "addParty" ? (
        <>
          <h1>Add Party Form</h1>
          <button onClick={createParty}>Submit</button>
        </>
      ) : (
        <InviteGuests />
      )}

      {/* render party details stuff if page = add party ,then on submit siwtch page to add guests */}
    </div>
  );
}
