import React, { useState, useEffect } from "react";
import { guestsToJSON } from "../../actions/guestList";
import { useSelector, useDispatch } from "react-redux";
import InviteGuestsForm from "../AddParty/InviteGuestsForm";
import {
  SET_PAGE,
  SET_NEWPARTY_DETAILS,
  RESET_NEWPARTY,
} from "../../action-types";
import GuestList from "../AddParty/GuestList";
import { partyUpdateGuests } from "../../actions/supabase";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export default function EditGuests() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const party = useSelector((state) => state.party);
  const partyUnformatted = useSelector((state) => state.partyUnformatted);
  const newParty = useSelector((state) => state.newParty);
  const [guestList, setGuestList] = useState(null);
  const sendEmails = () => {
    let forms = document.querySelectorAll(".guestForm");
    for (const form of forms) {
      emailjs
        .sendForm("service_sjoq1rm", "contact_form", form, "LczdQHE4kPRZ06EjQ")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  const sendNewGuests = () => {
    sendEmails();
    partyUpdateGuests(partyUnformatted.partyId, [
      ...partyUnformatted.guests,
      ...newParty.guestList,
    ]);
    navigate(`/party/${party.partyId}`);
    dispatch({ type: SET_PAGE, payload: "party" });
    dispatch({ type: RESET_NEWPARTY });
  };

  useEffect(() => {
    console.log(guestList);
    dispatch({ type: SET_PAGE, payload: "editGuests" });
  }, []);

  useEffect(() => {
    setGuestList(party.guests);
    dispatch({
      type: SET_NEWPARTY_DETAILS,
      payload: {
        partyId: partyUnformatted.partyId,
        name: partyUnformatted.name,
        date: partyUnformatted.date,
        time: partyUnformatted.time,
        details: partyUnformatted.details,
        location: partyUnformatted.location,
      },
    });
  }, [party]);

  return (
    <>
      {guestList ? (
        <div>
          <p>Already Invited</p>
          {guestList.map((guest) => {
            return (
              <div>
                <p>{guest.firstName}</p>
                <p>{guest.lastName}</p>
                {guest.attending === "yes" ? <p>Attending</p> : null}
                {guest.attending === "no" ? <p>Not Attending</p> : null}
                {guest.attending === "maybe" ? <p>Maybe Attending</p> : null}
                {guest.attending === "undecided" ? (
                  <p>No Response Yet</p>
                ) : null}
              </div>
            );
          })}
          <InviteGuestsForm />
          <GuestList />
          <button onClick={sendNewGuests}>Send Invites</button>
        </div>
      ) : null}
    </>
  );
}
