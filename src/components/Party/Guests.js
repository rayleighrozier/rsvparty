import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Guests(props) {
  const party = useSelector((state) => state.party);
  const [guestList, setGuestList] = useState(null);

  useEffect(() => {
    setGuestList(party.guests);
  }, [party]);
  return (
    <div className="party-middle-left">
      <div className="party-middle-left-header">
        <p>Guest List</p>
      </div>
      {guestList ? (
        <div className="party-guest-list">
          {guestList.map((guest) => {
            return (
              <div className="party-guest">
                <p>
                  {guest.firstName}
                  {"  "} {guest.lastName}
                </p>

                {guest.attending === "yes" ? <p>Attending</p> : null}
                {guest.attending === "no" ? <p>Not Attending</p> : null}
                {guest.attending === "maybe" ? <p>Maybe Attending</p> : null}
                {guest.attending === "undecided" ? <p>No Response </p> : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
