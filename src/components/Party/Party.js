import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { SET_PARTY } from "../../action-types";
import { guestGetInfo, partyFindById } from "../../actions/supabase";
import { formatDate, formatTime } from "../../actions/format";
import EditDetailsButton from "./EditDetailsButton";
import RSVPButtons from "./RSVPButtons";
import { checkToken } from "../../actions/token";
import PartyDetails from "./PartyDetails";
import { checkIfInvited } from "../../actions/guestList";
import Guests from "./Guests";
import Comments from "../Comments/Comments";

// Countdown, Details, Playlist, Supplies, Comments

export default function Party() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { partyId } = useParams();
  const token = checkToken();
  const party = useSelector((state) => state.party);
  const guest = useSelector((state) => state.guest);
  const [host, setHost] = useState(false);
  const [attending, setAttending] = useState(null);
  const [invited, setInvited] = useState(false);
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
  const checkInvited = () => {
    if (party) {
      if (!host) {
        let status = checkIfInvited(guest, party.guests);
        setInvited(status);
        console.log("invited", invited);
      } else {
        setInvited(true);
        console.log("host! ", invited);
      }
    }
  };
  const checkAttending = () => {
    if (party) {
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
            if (filtered.length > 0) {
              setAttending(filtered[0].attending);
            }
          }
        }
      }
    }
  };
  const backtoDashboard = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    setParty();
  }, []);
  useEffect(() => {
    checkHost();
    checkInvited();
    checkAttending();
  }, [party]);

  return (
    <div>
      {token ? (
        invited ? (
          <>
            {party ? <PartyDetails host={host} setHost={setHost} /> : null}
            <Countdown date={Date.now() + Math.abs(timeLeft)}>
              <Completionist />
            </Countdown>
            {host ? null : (
              <RSVPButtons attending={attending} setAttending={setAttending} />
            )}
            {party ? <Guests host={host} /> : null}
            {party ? <Comments /> : null}
          </>
        ) : (
          <div>
            <p>Uh oh! Looks like you are not on the guest list.</p>
            <button onClick={backtoDashboard}>Go Back</button>
          </div>
        )
      ) : null}
    </div>
  );
}
