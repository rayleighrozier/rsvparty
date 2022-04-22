import React from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { SET_PARTY } from "../../action-types";
import { partyFindById } from "../../actions/supabase";
import { formatDate, formatTime } from "../../actions/format";
import Supplies from "../Supplies/Supplies";

// Countdown, Details, Playlist, Supplies, Comments

export default function Party() {
  const dispatch = useDispatch();
  const { partyId } = useParams();
  const party = useSelector((state) => state.party);
  const Completionist = () => <span>You are good to go!</span>;
  const setParty = async () => {
    let data = await partyFindById(partyId);
    data.date = formatDate(data.date);
    data.time = formatTime(data.time);
    dispatch({ type: SET_PARTY, payload: data });
    console.log(data);
  };
  useEffect(() => {
    setParty();
  }, []);

  const endDate = `May 3, 2022`;
  let timeLeft = Date.now() - Date.parse(endDate);
  return (
    <div>
      <h1>Party</h1>
      <Countdown date={Date.now() + Math.abs(timeLeft)}>
        <Completionist />
      </Countdown>
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
        </div>
      ) : null}
      <Supplies />
    </div>
  );
}
