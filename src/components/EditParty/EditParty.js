import React, { useState } from "react";
import { useSelector } from "react-redux";
import Error from "../Error/Error";
import EditInput from "./EditInput";
import EditLocation from "./EditLocation";

export default function EditParty() {
  const party = useSelector((state) => state.party);
  const editDetails = useSelector((state) => state.editDetails);
  const [newName, setNewName] = useState(false);
  const [newDate, setNewDate] = useState(false);
  const [newTime, setNewTime] = useState(false);
  const [newDetails, setNewDetails] = useState(false);
  const [newLocation, setNewLocation] = useState(false);

  return party ? (
    <div>
      <h1>Edit Details</h1>
      <p>{party.name}</p> <button onClick={() => setNewName(true)}>Edit</button>
      {newName ? (
        <EditInput type="text" state={newName} setState={setNewName} />
      ) : null}
      <p>{party.date}</p> <button onClick={() => setNewDate(true)}>Edit</button>
      {newDate ? (
        <EditInput type="date" state={newDate} setState={setNewDate} />
      ) : null}
      <p>{party.time}</p> <button onClick={() => setNewTime(true)}>Edit</button>
      {newTime ? (
        <EditInput type="time" state={newTime} setState={setNewTime} />
      ) : null}
      <p>{party.details}</p>{" "}
      <button onClick={() => setNewDetails(true)}>Edit</button>
      {newDetails ? (
        <EditInput type="text" state={newDetails} setState={setNewDetails} />
      ) : null}
      <div>
        <p>{party.location.address}</p>
        <p>{party.location.city}</p>
        <p>{party.location.state}</p>
        <p>{party.location.zip}</p>
      </div>
      <button onClick={() => setNewLocation(true)}>Edit</button>
      {newLocation ? (
        <EditLocation state={newLocation} setState={setNewLocation} />
      ) : null}
    </div>
  ) : (
    <Error />
  );
}
