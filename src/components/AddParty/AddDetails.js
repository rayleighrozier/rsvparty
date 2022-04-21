import React, { useEffect } from "react";
import { partyAddRow } from "../../actions/supabase";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_PAGE,
  SET_NEWPARTY_DETAILS,
  SET_GUEST_PARTIES,
} from "../../action-types";
import { captureAddParty } from "../../actions/input";
import { guestUpdateParties } from "../../actions/supabase";

export default function AddDetails() {
  const dispatch = useDispatch();
  const guest = useSelector((state) => state.guest);
  const newParty = useSelector((state) => state.newParty);
  const createParty = async (e) => {
    const input = captureAddParty(e);
    let location = {
      address: input.address,
      city: input.city,
      state: input.state,
      zip: input.zip,
    };

    let userEntry = await partyAddRow(
      guest.guestId,
      input.name,
      input.date,
      input.time,
      input.details,
      location
    );
    if (userEntry.message) {
      window.alert(`${userEntry.message}`);
    } else {
      dispatch({
        type: SET_NEWPARTY_DETAILS,
        payload: {
          partyId: userEntry[0].partyId,
          name: userEntry[0].name,
          date: userEntry[0].date,
          time: userEntry[0].time,
          details: userEntry[0].details,
          location: userEntry[0].location,
        },
      });
      dispatch({ type: SET_PAGE, payload: "inviteGuests" });
      dispatch({
        type: SET_GUEST_PARTIES,
        payload: [...guest.parties, userEntry[0].partyId],
      });
    }
  };

  useEffect(() => {
    console.log("use effect firing");
    guestUpdateParties(guest.guestId, guest.parties);
  }, [guest.parties]);

  return (
    <div>
      <h1>Details</h1>
      <form>
        <label htmlFor="name">Event Name</label>
        <input name="name" type="text"></input>

        <label htmlFor="date">Date</label>
        <input name="date" type="date"></input>

        <label htmlFor="time">Start Time</label>
        <input time="time" type="time"></input>

        <label htmlFor="address">Address</label>
        <input name="address" type="text"></input>

        <label htmlFor="city">City</label>
        <input name="city" type="text"></input>

        <label htmlFor="state">State</label>
        <input name="state" type="text"></input>

        <label htmlFor="zip">Zip Code</label>
        <input name="zip" type="text"></input>

        <label htmlFor="details">Event Details</label>
        <input name="details" type="text"></input>

        <button onClick={(e) => createParty(e)}>Submit</button>
      </form>
    </div>
  );
}
