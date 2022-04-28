import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../Error/Error";
import EditInput from "./EditInput";
import EditLocation from "./EditLocation";
import { formatDate, formatTime } from "../../actions/format";
import { partyUpdateDetails } from "../../actions/supabase";
import { SET_PAGE } from "../../action-types";
import "./EditParty.css";
export default function EditParty() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch({ type: SET_PAGE, payload: "editParty" });
  }, []);

  return party ? (
    <div className="editPartyContent">
      <h1>Edit Details</h1>
      <div className="editPartyContent">
        <div className="formFirstRow">
          <div className="editRow">
            <div className="editParaAndButton">
              <p className="editPartyPara">{newInputs.name}</p>
              <button className="editButton" onClick={() => setNewName(true)}>
                Edit
              </button>
            </div>
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
          </div>

          <div className="editRow">
            <div className="editParaAndButton">
              <p className="editPartyPara">{formatDate(newInputs.date)}</p>
              <button className="editButton" onClick={() => setNewDate(true)}>
                Edit
              </button>
            </div>
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
          </div>

          <div className="editRow">
            <div className="editParaAndButton">
              <p className="editPartyPara">{formatTime(newInputs.time)}</p>
              <button className="editButton" onClick={() => setNewTime(true)}>
                Edit name
              </button>
            </div>
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
          </div>
        </div>

        <div className="formSecondRow">
          <div className="locationNames">
            <p>{newInputs.location.address}</p>
            <p>{newInputs.location.city},</p>
            <p>{newInputs.location.state}</p>
            <p>{newInputs.location.zip}</p>
          </div>

          <button className="editButton" onClick={() => setNewLocation(true)}>
            Edit date
          </button>
        </div>
        {newLocation ? (
          <EditLocation
            newInputs={newInputs}
            setNewInputs={setNewInputs}
            state={newLocation}
            setState={setNewLocation}
          />
        ) : null}
        <div className="formThirdRow">
          <p>{newInputs.details}</p>
          <button className="editButton" onClick={() => setNewDetails(true)}>
            Edit time
          </button>
        </div>
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

        <button className="editPartySubmitButton" onClick={updateParty}>
          Looks Good!
        </button>
      </div>
    </div>
  ) : (
    <Error />
  );
}
