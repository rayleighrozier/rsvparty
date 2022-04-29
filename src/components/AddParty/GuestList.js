import React from "react";
import { useSelector } from "react-redux";
import "./InviteGuests.css";

export default function GuestList() {
  const newParty = useSelector((state) => state.newParty);
  const host = useSelector((state) => state.guest);
  return (
    <>
      <div className="guestListContainer">
        <p className="guestListHeader">Guest List</p>
        <div className="testDiv">
          {newParty.guestList
            ? newParty.guestList.map((guest, index) => {
                return (
                  <form className="guestForm">
                    <div>
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
      </div>
    </>
  );
}
