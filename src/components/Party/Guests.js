import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { guestsToJSON } from "../../actions/guestList";

export default function Guests(props) {
  const navigate = useNavigate();
  const party = useSelector((state) => state.party);
  const [guestList, setGuestList] = useState(null);
  const editGuests = () => {
    navigate("/editguests");
  };
  useEffect(() => {
    setGuestList(party.guests);
  }, [party]);
  return (
    <>
      <p>Guest List</p>
      {guestList ? (
        <div>
          {guestList.map((guest) => {
            return (
              <div>
                <p>{guest.firstName}</p>
                <p>{guest.lastName}</p>
                {guest.attending === "yes" ? <p>Attending</p> : null}
                {guest.attending === "no" ? <p>Not Attending</p> : null}
                {guest.attending === "maybe" ? <p>Maybe Attending</p> : null}
                {guest.attending === "undecided" ? (
                  <p>No Response Yet</p>
                ) : null}
              </div>
            );
          })}
          {props.host ? (
            <button onClick={editGuests}>Invite Guests</button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
