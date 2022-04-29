import React from "react";
import { useSelector } from "react-redux";
import "./InviteGuests.css";

export default function GuestList() {
  const newParty = useSelector((state) => state.newParty);
  const host = useSelector((state) => state.guest);
  return (
    <>
      <div className="guestListTitle">
        Guest List
        {newParty.guestList
          ? newParty.guestList.map((guest, index) => {
              return (
                <form className="form">
                  <div className="guestForm">
                    <div className="guestCard">
                      <input
                        // onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';"

                        className="firstNameInput"
                        name="name"
                        value={guest.firstName}
                        readOnly
                      />
                      <input
                        className="lastNameInput"
                        // size="8"
                        name="lastName"
                        value={guest.lastName}
                        readOnly
                      />
                      <input
                        className="emailInput"
                        // size="25"
                        name="email"
                        value={guest.email}
                        readOnly
                      />
                    </div>
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
                  </div>
                </form>
              );
            })
          : null}
      </div>
    </>
  );
}
