import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { partyUpdateGuests } from "../../actions/supabase";

export default function RSVPButtons(props) {
  const party = useSelector((state) => state.party);
  const guest = useSelector((state) => state.guest);

  const changeAttending = (input) => {
    props.setAttending(input);
    sendAttendance(input);
  };
  const sendAttendance = async (input) => {
    let guestsJSON = [];
    if (party.guests) {
      for (const person of party.guests) {
        let guestdata = JSON.parse(person);
        guestsJSON.push(guestdata);
      }
      let filtered = guestsJSON.filter((data) => data.email === guest.email);
      guestsJSON = guestsJSON.filter((data) => data.email !== guest.email);
      if (filtered.length > 0) {
        filtered[0].attending = input;
        guestsJSON.push(filtered[0]);
        await partyUpdateGuests(party.partyId, guestsJSON);
      } else {
        window.alert("Error! You're missing from the guest list.");
      }
    }
  };

  return (
    <div className="party-buttons-container">
      <button className="blue" onClick={() => changeAttending("yes")}>
        Going
      </button>
      <button className="yellow" onClick={() => changeAttending("maybe")}>
        Maybe
      </button>
      <button className="pink" onClick={() => changeAttending("no")}>
        Can't Go
      </button>
    </div>
  );
}
