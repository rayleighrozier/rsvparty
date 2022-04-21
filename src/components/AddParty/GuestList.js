import React from "react";
import { useSelector } from "react-redux";

export default function GuestList() {
  const guestList = useSelector((state) => state.newParty.guestList);
  return (
    <div>
      <h1>Guest List</h1>
      {guestList
        ? guestList.map((guest) => {
            return (
              <div>
                <p>
                  {guest.firstName} {guest.lastName}
                </p>
                <p> {guest.email}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}
