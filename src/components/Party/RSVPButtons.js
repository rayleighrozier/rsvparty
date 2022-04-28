import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { guestGetInfo } from "../../actions/supabase";
import { partyUpdateGuests } from "../../actions/supabase";

export default function RSVPButtons(props) {
  const dispatch = useDispatch();
  const party = useSelector((state) => state.party);
  const guest = useSelector((state) => state.guest);
  const [host, setHost] = useState(null);

  const getHostData = async () => {
    let data = await guestGetInfo(party.hostId);
    setHost(data);
  };
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
  useEffect(() => {
    getHostData();
  }, []);
  useEffect(() => {}, [props.attending]);

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
