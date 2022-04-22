import React from "react";
import { useSelector } from "react-redux";
import userAvatar from "../../assets/userAvatar.JPG";

export default function DashboardTop() {
  const guest = useSelector((state) => state.guest);
  return (
    <div>
      <img className="userAvatar" src={userAvatar} />
      <p className="guestName">Hi {guest?.firstName}!</p>
    </div>
  );
}
