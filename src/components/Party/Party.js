import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { SET_PARTY } from "../../action-types";
import { guestGetInfo, partyFindById } from "../../actions/supabase";
import { formatDate, formatTime } from "../../actions/format";
import EditDetailsButton from "./EditDetailsButton";
import RSVPButtons from "./RSVPButtons";
import { checkToken } from "../../actions/token";
import PartyDetails from "./PartyDetails";

// Countdown, Details, Playlist, Supplies, Comments

export default function Party() {
  const dispatch = useDispatch();
  const { partyId } = useParams();
  const token = checkToken();
  const party = useSelector((state) => state.party);
  const guest = useSelector((state) => state.guest);
  const [host, setHost] = useState(false);
  const [attending, setAttending] = useState(null);
  const endDate = `May 3, 2022`;
  let timeLeft = Date.now() - Date.parse(endDate);
  const Completionist = () => <span>You are good to go!</span>;

  const setParty = async () => {
    let data = await partyFindById(partyId);
    data.date = formatDate(data.date);
    data.time = formatTime(data.time);
    dispatch({ type: SET_PARTY, payload: data });
  };
  const checkHost = () => {
    if (party) {
      if (guest.guestId === party.hostId) {
        setHost(true);
      } else {
        setHost(false);
      }
    }
  };
  const checkAttending = () => {
    if (host) {
      setAttending("yes");
    } else {
      if (party) {
        let guestsJSON = [];
        if (party.guests) {
          for (const person of party.guests) {
            let guestdata = JSON.parse(person);
            guestsJSON.push(guestdata);
          }
          let filtered = guestsJSON.filter(
            (data) => data.email === guest.email
          );
          setAttending(filtered[0].attending);
        }
      }
    }
  };

  useEffect(() => {
    setParty();
  }, []);
  useEffect(() => {
    checkHost();
    checkAttending();
  }, [party]);

  return (
    <div>
      {token ? (
        <>
          {party ? <PartyDetails host={host} setHost={setHost} /> : null}
          <Countdown date={Date.now() + Math.abs(timeLeft)}>
            <Completionist />
          </Countdown>
          {host ? null : (
            <RSVPButtons attending={attending} setAttending={setAttending} />
          )}
        </>
      ) : null}
    </div>
  );
}
