import React from "react";
import { useSelector } from "react-redux";
import "./InviteGuests.css";

export default function GuestList() {
  const newParty = useSelector((state) => state.newParty);
  const host = useSelector((state) => state.guest);
  return (
    <>
      <div className="guestList">
        <p className="guestListTitle">Guest List</p>
        {newParty.guestList
          ? newParty.guestList.map((guest, index) => {
              return (
                <form className="guestForm">
                  <input name="name" value={guest.firstName} readOnly />
                  <input name="lastName" value={guest.lastName} readOnly />
                  <input name="email" value={guest.email} readOnly />
                  <input
                    className="hide"
                    name="partyId"
                    value={newParty.details.partyId}
                    readOnly
                  />
                  <input
                    className="hide"
                    name="partyName"
                    value={newParty.details.name}
                    readOnly
                  />
                  <input
                    className="hide"
                    name="hostName"
                    value={host.firstName + " " + host.lastName}
                    readOnly
                  />
                </form>
              );
            })
          : null}
      </div>
    </>
  );
}
