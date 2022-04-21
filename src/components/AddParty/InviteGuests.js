import React from "react";
import InviteGuestsForm from "./InviteGuestsForm";
import GuestList from "./GuestList";

export default function InviteGuests() {
  return (
    <div>
      <h1>Invite Guests</h1>
      <InviteGuestsForm />
      <GuestList />
    </div>
  );
}
