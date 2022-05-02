import React from "react";
import { useSelector } from "react-redux";
import { partyUpdateGuests } from "../../actions/supabase";

export default function RSVPButtons(props) {
  const party = useSelector((state) => state.party);
  const guest = useSelector((state) => state.guest);

  const changeAttending = (input) => {
    props.setAttending(input);
    sendAttendance(input);
  };
  const sendAttendance = async (input) => {
    let partyGuests = party.guests;
    console.log(partyGuests);
    let filtered = partyGuests.filter((data) => data.email === guest.email);
    if (filtered.length > 0) {
      partyGuests = partyGuests.filter((data) => data.email !== guest.email);
      filtered[0].attending = input;
      partyGuests.push(filtered[0]);
      await partyUpdateGuests(party.partyId, partyGuests);
    } else {
      window.alert("Error! You're missing from the guest list.");
    }
  };

  return (
    <div className="party-buttons-container">
      <button
        className="blue RSVPbutton"
        onClick={() => changeAttending("yes")}
      >
        Going
      </button>
      <button
        className="yellow RSVPbutton"
        onClick={() => changeAttending("maybe")}
      >
        Maybe
      </button>
      <button className="pink RSVPbutton" onClick={() => changeAttending("no")}>
        Can't Go
      </button>
    </div>
  );
}
