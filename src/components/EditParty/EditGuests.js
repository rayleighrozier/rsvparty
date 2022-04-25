import React, { useState, useEffect } from "react";
import { guestsToJSON } from "../../actions/guestList";
import { useSelector, useDispatch } from "react-redux";
export default function EditGuests() {
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
