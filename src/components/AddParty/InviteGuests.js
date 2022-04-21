import React, { useEffect } from "react";
import InviteGuestsForm from "./InviteGuestsForm";
import GuestList from "./GuestList";
import { useSelector, useDispatch } from "react-redux";
import { partyUpdateGuests, guestUpdateParties } from "../../actions/supabase";
import { RESET_NEWPARTY, SET_PAGE } from "../../action-types";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export default function InviteGuests() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newParty = useSelector((state) => state.newParty);
  const guest = useSelector((state) => state.guest);

  const saveParty = async () => {
    await partyUpdateGuests(newParty.details.partyId, newParty.guestList);
    dispatch({ type: SET_PAGE, payload: "party" });
    navigate(`/party/${newParty.details.partyId}`);
    dispatch({ type: RESET_NEWPARTY });
  };
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
  const saveAndSend = () => {
    sendEmails();
    saveParty();
  };
  useEffect(() => {
    console.log("use effect firing");
    guestUpdateParties(guest.guestId, guest.parties);
  }, []);

  return (
    <div>
      <p>Party Created!</p>
      {newParty.details ? (
        <div>
          <p>{newParty.details.name}</p>
          <p>{newParty.details.date}</p>
          <p>{newParty.details.time}</p>
          <div>
            <p>{newParty.details.location.address}</p>
            <p>{newParty.details.location.city}</p>
            <p>{newParty.details.location.state}</p>
            <p>{newParty.details.location.zip}</p>
          </div>
        </div>
      ) : null}
      <h1>Invite Guests</h1>
      <InviteGuestsForm />
      <GuestList />
      <button onClick={saveAndSend}>Send Invites</button>
      <button onClick={saveParty}>Invite Guests Later</button>
    </div>
  );
}
