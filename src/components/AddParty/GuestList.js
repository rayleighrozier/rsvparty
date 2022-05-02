import React from "react";
import { useSelector } from "react-redux";
import "./InviteGuests.css";

export default function GuestList() {
  const newParty = useSelector((state) => state.newParty);
  const host = useSelector((state) => state.guest);
  return (
    <>
      <div className="guestListContainer">
        <div className="guestListHeader">Guest List</div>
        <div className="testDiv">
          {newParty.guestList
            ? newParty.guestList.map((guest, index) => {
                return (
                  <form className="guestForm">
                    <div className="guestCard">
                      <div className="fullNameContainer">
                        <input
                          className="firstNameInput"
                          name="name"
                          value={guest.firstName}
                          readOnly
                        />
                        <input
                          className="lastNameInput"
                          name="lastName"
                          value={guest.lastName}
                          readOnly
                        />
                      </div>
                      <input
                        className="emailInput"
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
                  </form>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
