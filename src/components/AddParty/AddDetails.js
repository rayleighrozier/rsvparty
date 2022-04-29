import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { partyAddRow } from "../../actions/supabase";
import { captureAddParty } from "../../actions/input";
import {
  SET_PAGE,
  SET_NEWPARTY_DETAILS,
  SET_GUEST_PARTIES,
} from "../../action-types";
import "./AddParty.css";

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
    <>
      <p className="addPartyPhrase">
        Please enter the details for your party below!
      </p>
      <div className="addPartyContent">
        <form>
          <div className="addDetailsFormFirstRow">
            <div className="inputContent">
              <label htmlFor="name">Event name</label>
              <input
                className="firstRowInput addPartyInput"
                name="name"
                type="text"
              ></input>
            </div>
            <div className="inputContent">
              <label htmlFor="date">Date</label>
              <input
                className="firstRowInput addPartyInput"
                name="date"
                type="date"
              ></input>
            </div>
            <div className="inputContent">
              <label htmlFor="time">Start Time</label>
              <input
                className="firstRowInput addPartyInput"
                time="time"
                type="time"
              ></input>
            </div>
          </div>
          <div className="formSecondRow">
            <div>
              <p className="addPartyAddress">Address</p>
              <div className="inputContent">
                <label className="addressLabel" htmlFor="address">
                  Address line 1
                </label>
                <input
                  className="addressLabel addressLine1 addPartyInput"
                  name="address"
                  type="text"
                ></input>
              </div>
              <div className="cityStateZip">
                <div className="inputContent">
                  <label className="addressLabel" htmlFor="city">
                    City
                  </label>
                  <input
                    className="cityInput addPartyInput"
                    name="city"
                    type="text"
                  ></input>
                </div>
                <div className="inputContent">
                  <label className="addressLabel" htmlFor="state">
                    State
                  </label>
                  <input
                    className="stateInput addPartyInput"
                    name="state"
                    type="text"
                  ></input>
                </div>
                <div className="inputContent">
                  <label className="addressLabel" htmlFor="zip">
                    Zip Code
                  </label>
                  <input
                    className="zipInput addPartyInput"
                    name="zip"
                    type="text"
                  ></input>
                </div>
              </div>
            </div>
            <div className="inputContent">
              <label htmlFor="details">Event Details</label>
              <textarea
                className="details"
                name="details"
                type="text"
              ></textarea>
            </div>
          </div>
          <button
            className="addPartySubmitButton"
            onClick={(e) => createParty(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
