import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditDetailsButton from "./EditDetailsButton";

export default function PartyDetails(props) {
  const party = useSelector((state) => state.party);
  const guest = useSelector((state) => state.guest);
  //   const checkHost = () => {
  //     console.log("CHECKING THE HOST");
  //     if (guest.guestId === party.hostId) {
  //       props.setHost(true);
  //     } else {
  //       props.setHost(false);
  //     }
  //     console.log("in details", props.host);
  //   };

  //   useEffect(() => {
  //     checkHost();
  //   }, []);

  return (
    <div>
      {party ? (
        <div>
          <p>{party.name}</p>
          <p>{party.date}</p>
          <p>{party.time}</p>
          <p>{party.details}</p>
          <p>{party.location.address}</p>
          <p>{party.location.city}</p>
          <p>{party.location.state}</p>
          <p>{party.location.zip}</p>
          {props.host === true ? <EditDetailsButton /> : null}
        </div>
      ) : null}
    </div>
  );
}
