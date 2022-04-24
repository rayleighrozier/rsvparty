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
                {guest.attending === "yes" ? <p>Attending</p> : null}
                {guest.attending === "no" ? <p>Not Attending</p> : null}
                {guest.attending === "maybe" ? <p>Maybe Attending</p> : null}
                {guest.attending === "undecided" ? (
                  <p>No Response Yet</p>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
