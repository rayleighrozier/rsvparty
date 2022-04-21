import React from "react";
import { useSelector } from "react-redux";

export default function GuestList() {
  const newParty = useSelector((state) => state.newParty);
  const host = useSelector((state) => state.guest);
  return (
    <div>
      <h1>Guest List</h1>
      {newParty.guestList
        ? newParty.guestList.map((guest, index) => {
            return (
              <form className="guestForm">
                <input name="name" value={guest.firstName} readonly />
                <input name="email" value={guest.email} readonly />
                <p className="hide" name="partyId">
                  {newParty.details.partyId}
                </p>
                <p className="hide" name="partyName">
                  {newParty.details.name}
                </p>
                <p className="hide" name="hostName">
                  {host.firstName} {host.lastName}
                </p>
              </form>
            );
          })
        : null}
    </div>
  );
}
