import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { guestsToJSON } from "../../actions/guestList";

export default function Guests() {
  const party = useSelector((state) => state.party);
  const [guestList, setGuestList] = useState(null);

  useEffect(() => {
    setGuestList(guestsToJSON(party.guests));
  }, [party]);

  return (
    <>
      {guestList ? (
        <div>
          {guestList.map((guest) => {
            return (
              <div>
                <p>{guest.firstName}</p>
                <p>{guest.lastName}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
