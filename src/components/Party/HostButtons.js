import React from "react";
import { useNavigate } from "react-router-dom";

export default function HostButtons() {
  const navigate = useNavigate();
  const editDetails = () => {
    navigate("/editparty");
  };
  const editGuests = () => {
    navigate("/editguests");
  };
  return (
    <div className="party-buttons-container">
      <button className="blue" onClick={editDetails}>
        EDIT PARTY
      </button>
      <button className="pink" onClick={editGuests}>
        INVITE GUESTS
      </button>
    </div>
  );
}
