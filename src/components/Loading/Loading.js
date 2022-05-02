import React from "react";
import spinner from "../../assets/spinner.gif";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-spinner">
      <img src={spinner} alt="loading" />
    </div>
  );
}
