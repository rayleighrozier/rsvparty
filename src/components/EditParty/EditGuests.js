import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { partyUpdateGuests } from "../../actions/supabase";
import {
  SET_PAGE,
  SET_NEWPARTY_DETAILS,
  RESET_NEWPARTY,
} from "../../action-types";
import EditGuestsForm from "../EditParty/EditGuestsForm";
import EditGuestList from "../EditParty/EditGuestList";
import "./EditGuests.css";

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
        <div className="edit-guests-container">
          <p className="e-guests-header">INVITE MORE GUESTS</p>
          <EditGuestsForm />
          <div className="edit-guests-lists-container">
            <div className="e-guest-invited-background">
              <div className="e-guest-invited pink">
                <p className="e-guest-invited-header">Already Invited</p>
                <div className="e-guest-white-container">
                  {guestList.map((guest) => {
                    return (
                      <>
                        <div className="e-guest-invited-guest light-pink">
                          <p>
                            {guest.firstName} {guest.lastName}
                          </p>
                          {guest.attending === "yes" ? <p>Attending</p> : null}
                          {guest.attending === "no" ? (
                            <p>Not Attending</p>
                          ) : null}
                          {guest.attending === "maybe" ? (
                            <p>Maybe Attending</p>
                          ) : null}
                          {guest.attending === "undecided" ? (
                            <p>No Response Yet</p>
                          ) : null}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <EditGuestList />
          </div>

          <button className="e-guests-send-invites" onClick={sendNewGuests}>
            Send Invites
          </button>
        </div>
      ) : null}
    </>
  );
}
