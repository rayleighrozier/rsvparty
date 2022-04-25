import React, { useState } from "react";
import { useSelector } from "react-redux";
import Error from "../Error/Error";
import EditInput from "./EditInput";
import EditLocation from "./EditLocation";

export default function EditParty() {
  const party = useSelector((state) => state.party);
  const partyUnformatted = useSelector((state) => state.partyUnformatted);
  const editDetails = useSelector((state) => state.editDetails);
  const [newName, setNewName] = useState(false);
  const [newDate, setNewDate] = useState(false);
  const [newTime, setNewTime] = useState(false);
  const [newDetails, setNewDetails] = useState(false);
  const [newLocation, setNewLocation] = useState(false);
  const [newInputs, setNewInputs] = useState({
    name: partyUnformatted.name,
    date: partyUnformatted.date,
    time: partyUnformatted.time,
    details: partyUnformatted.details,
    location: {
      address: partyUnformatted.location.address,
      city: partyUnformatted.location.city,
      state: partyUnformatted.location.state,
      zip: partyUnformatted.location.zip,
    },
  });

  return party ? (
    <div>
      <h1>Edit Details</h1>
      <p>{party.name}</p> <button onClick={() => setNewName(true)}>Edit</button>
      {newName ? (
        <EditInput
          type="text"
          inputType="name"
          newInputs={newInputs}
          setNewInputs={setNewInputs}
          state={newName}
          setState={setNewName}
        />
      ) : null}
      <p>{party.date}</p> <button onClick={() => setNewDate(true)}>Edit</button>
      {newDate ? (
        <EditInput
          type="date"
          inputType="date"
          newInputs={newInputs}
          setNewInputs={setNewInputs}
          state={newDate}
          setState={setNewDate}
        />
      ) : null}
      <p>{party.time}</p> <button onClick={() => setNewTime(true)}>Edit</button>
      {newTime ? (
        <EditInput
          type="time"
          inputType="time"
          newInputs={newInputs}
          setNewInputs={setNewInputs}
          state={newTime}
          setState={setNewTime}
        />
      ) : null}
      <p>{party.details}</p>{" "}
      <button onClick={() => setNewDetails(true)}>Edit</button>
      {newDetails ? (
        <EditInput
          type="text"
          inputType="details"
          newInputs={newInputs}
          setNewInputs={setNewInputs}
          state={newDetails}
          setState={setNewDetails}
        />
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
