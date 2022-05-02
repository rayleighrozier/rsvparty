import React from "react";
import SignOutButton from "../SignIn/SignOutButton";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <a href="https://rsvparty.netlify.app/dashboard">
          <img className="rsvpLogo" src={logo} />
        </a>
        <div className="navbarLinks">
          <a
            className="addPartyLink"
            href="https://rsvparty.netlify.app/addparty"
          >
            Add party
          </a>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
