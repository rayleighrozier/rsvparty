import React from "react";
import { partyAddRow } from "../../actions/supabase";
import { useDispatch, useSelector } from "react-redux";
import { SET_PAGE, SET_NEWPARTY_DETAILS } from "../../action-types";
import { captureAddParty } from "../../actions/input";

export default function AddDetails() {
  const dispatch = useDispatch();
  const guestId = useSelector((state) => state.guest.guestId);

  const createParty = async (e) => {
    const input = captureAddParty(e);
    let location = {
      address: input.address,
      city: input.city,
      state: input.state,
      zip: input.zip,
    };

    let userEntry = await partyAddRow(
      guestId,
      input.name,
      input.date,
      input.time,
      input.details,
      location
    );
    if (userEntry.message) {
      window.alert(`${userEntry.message}`);
    } else {
      window.alert("Party created!");
      dispatch({
        type: SET_NEWPARTY_DETAILS,
        payload: {
          name: input.name,
          date: input.date,
          time: input.time,
          details: input.details,
          location: location,
        },
      });
      dispatch({ type: SET_PAGE, payload: "inviteGuests" });
    }
  };

  return (
    <div>
      <h1>Input Details</h1>
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
