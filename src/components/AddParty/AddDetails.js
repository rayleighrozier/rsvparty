import React from "react";
import { partyAddRow } from "../../actions/supabase";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_PAGE,
  SET_NEWPARTY_DETAILS,
  SET_GUEST_PARTIES,
} from "../../action-types";
import { captureAddParty } from "../../actions/input";

export default function AddDetails() {
  const dispatch = useDispatch();
  const guest = useSelector((state) => state.guest);
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

  return (
    <div>
      <p>Please enter the details for your party below</p>
      <form>
        <div>
          <label htmlFor="name">Event name</label>
          <input name="name" type="text"></input>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input name="date" type="date"></input>
        </div>
        <div>
          <label htmlFor="time">Start Time</label>
          <input time="time" type="time"></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input name="address" type="text"></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input name="city" type="text"></input>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input name="state" type="text"></input>
        </div>
        <div>
          <label htmlFor="zip">Zip Code</label>
          <input name="zip" type="text"></input>
        </div>
        <div>
          <label htmlFor="details">Event Details</label>
          <textarea name="details" type="text"></textarea>
        </div>
        <button onClick={(e) => createParty(e)}>Submit</button>
      </form>
    </div>
  );
}
