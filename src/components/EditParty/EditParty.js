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
      <h1 className="editPartyHeader">EDIT PARTY DETAILS</h1>
      <div className="editPartyContent1">
        <div className="formFirstRow">
          <div className="editRowContainer firstRowContent">
            <p className="editRowHeader">Edit name</p>
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
          </div>

          <div className="editRowContainer firstRowContent">
            <p className="editRowHeader">Edit date</p>
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
          </div>

          <div className="editRowContainer firstRowContent">
            <p className="editRowHeader">Edit time</p>
            <div className="editRow">
              <div className="editParaAndButton">
                <p className="editPartyPara">{formatTime(newInputs.time)}</p>
                <button className="editButton" onClick={() => setNewTime(true)}>
                  Edit
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
        </div>

        <div className="editAddressAndDetails">
          <div className="editRowContainer secondRowContent">
            <p className="editRowHeader">Edit address</p>
            <div className="formSecondRow editRow">
              <div className="locationAndEdit">
                <div className="locationNames">
                  <p className="locationName">{newInputs.location.address}</p>
                  <p className="locationName">
                    {newInputs.location.city}, {newInputs.location.state}{" "}
                    {newInputs.location.zip}
                  </p>
                </div>

                <button
                  className="editButton"
                  onClick={() => setNewLocation(true)}
                >
                  Edit
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
            </div>
          </div>

          <div className="editRowContainer secondRowContent">
            <p className="editRowHeader">Edit details</p>
            <div className="formThirdRow editRow">
              <div className="detailsAndEdit">
                <p className="detailsPara">{newInputs.details}</p>
                <button
                  className="editButton"
                  onClick={() => setNewDetails(true)}
                >
                  Edit
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
                  className="detailsInputField"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <button className="editPartyLooksGoodButton" onClick={updateParty}>
        Looks Good!
      </button>
    </div>
  ) : (
    <Error />
  );
}
