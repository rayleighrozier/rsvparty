import React from "react";
import { useNavigate } from "react-router-dom";

export default function EditDetailsButton() {
  const navigate = useNavigate();
  const editDetails = () => {
    navigate("/editparty");
  };
  return (
    <div>
      <button onClick={editDetails}>Edit Details</button>
    </div>
  );
}
