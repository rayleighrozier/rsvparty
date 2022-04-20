import React from "react";
import SignOutButton from "../SignIn/SignOutButton";
export default function Navbar() {
  return (
    <div>
      <div>
        <a href="/dashboard">Home</a>
        <a href="/addparty">Add Party</a>
        <SignOutButton />
      </div>
    </div>
  );
}
