import React from "react";
import { useSelector } from "react-redux";

export default function DashboardTop() {
  const guest = useSelector((state) => state.guest);
  return (
    <div>
      <p>Hi {guest?.firstName}!</p>
    </div>
  );
}
