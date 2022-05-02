import React from "react";
import { useSelector } from "react-redux";

export default function GuestList() {
  const newParty = useSelector((state) => state.newParty);
  const host = useSelector((state) => state.guest);
  return (
    <div className="e-guest-new-background">
      <div className="e-guest-new blue">
        <p className="e-guest-new-header">Guest List</p>
        <div className="e-guest-white-container">
          <div className="e-guest-new-inner">
            {newParty.guestList
              ? newParty.guestList.map((guest, index) => {
                  return (
                    <form className="e-guest-new-form">
                      <div className="e-guest-new-name">
                        <input name="name" value={guest.firstName} readOnly />
                        <input
                          name="lastName"
                          value={guest.lastName}
                          readOnly
                        />
                      </div>
                      <input
                        className="e-guest-email"
                        name="email"
                        value={guest.email}
                        readOnly
                      />

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
      </div>
    </div>
  );
}
