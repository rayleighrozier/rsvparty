import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../Error/Error";
import EditInput from "./EditInput";
import EditLocation from "./EditLocation";
import { formatDate, formatTime } from "../../actions/format";
import { partyUpdateDetails } from "../../actions/supabase";

export default function EditParty() {
  const navigate = useNavigate();
  const party = useSelector((state) => state.party);
  const partyUnformatted = useSelector((state) => state.partyUnformatted);
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
  const updateParty = () => {
    partyUpdateDetails(party.partyId, newInputs);
    navigate(`/party/${party.partyId}`);
  };

  return party ? (
    <div>
      <h1>Edit Details</h1>
      <p>{newInputs.name}</p>{" "}
      <button onClick={() => setNewName(true)}>Edit</button>
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
      <p>{formatDate(newInputs.date)}</p>{" "}
      <button onClick={() => setNewDate(true)}>Edit</button>
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
      <p>{formatTime(newInputs.time)}</p>{" "}
      <button onClick={() => setNewTime(true)}>Edit</button>
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
      <p>{newInputs.details}</p>{" "}
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
        <p>{newInputs.location.address}</p>
        <p>{newInputs.location.city}</p>
        <p>{newInputs.location.state}</p>
        <p>{newInputs.location.zip}</p>
      </div>
      <button onClick={() => setNewLocation(true)}>Edit</button>
      {newLocation ? (
        <EditLocation
          newInputs={newInputs}
          setNewInputs={setNewInputs}
          state={newLocation}
          setState={setNewLocation}
        />
      ) : null}
      <button onClick={updateParty}>Looks Good!</button>
    </div>
  ) : (
    <Error />
  );
}
