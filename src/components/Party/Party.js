import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { SET_PAGE, SET_PARTY, SET_PARTYUNFORMATTED } from "../../action-types";
import { guestGetInfo, partyFindById } from "../../actions/supabase";
import { formatDate, formatTime, formatComments } from "../../actions/format";
import { guestsToJSON } from "../../actions/guestList";
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
    data.comments = formatComments(data.comments);
    data.guests = guestsToJSON(data.guests);
    dispatch({ type: SET_PARTY, payload: data });
  };
  const setPartyUnformatted = async () => {
    let data = await partyFindById(partyId);
    dispatch({ type: SET_PARTYUNFORMATTED, payload: data });
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
      } else {
        setInvited(true);
      }
    }
  };
  const checkAttending = () => {
    if (party) {
      if (host) {
        setAttending("yes");
      } else {
        if (party) {
          if (party.guests) {
            let guestList = party.guests;
            let filtered = guestList.filter(
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
    setPartyUnformatted();
    dispatch({ type: SET_PAGE, payload: "party" });
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
