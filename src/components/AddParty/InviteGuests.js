import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { partyUpdateGuests, guestUpdateParties } from "../../actions/supabase";
import {
  RESET_NEWPARTY,
  SET_PAGE,
  RESET_NEWPARTY_GUESTLIST,
} from "../../action-types";
import InviteGuestsForm from "./InviteGuestsForm";
import GuestList from "./GuestList";
import "./InviteGuests.css";

export default function InviteGuests() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newParty = useSelector((state) => state.newParty);
  const guest = useSelector((state) => state.guest);

  const savePartyNoGuests = async () => {
    await guestUpdateParties(guest.guestId, guest.parties);
    dispatch({ type: SET_PAGE, payload: "party" });
    navigate(`/party/${newParty.details.partyId}`);
    dispatch({ type: RESET_NEWPARTY });
  };
  const saveParty = async () => {
    await partyUpdateGuests(newParty.details.partyId, newParty.guestList);
    await guestUpdateParties(guest.guestId, guest.parties);
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
    guestUpdateParties(guest.guestId, guest.parties);
  }, []);

  return (
    <div className="addPartyContent">
      <p className="addPartyPhrase">Party created! Invite your guests below!</p>
      <InviteGuestsForm />
      <div className="inviteGuestsSecondRow">
        {newParty.details ? (
          <>
            <div className="inviteParty">
              <div className="newPartyPartyHeader">{newParty.details.name}</div>
              <div className="boxOverlay">
                <div>{newParty.details.date}</div>
                <div>{newParty.details.time}</div>
                <div>{newParty.details.location.address}</div>
                <div>
                  {newParty.details.location.city},{" "}
                  {newParty.details.location.state}{" "}
                  {newParty.details.location.zip}
                </div>
              </div>
            </div>
          </>
        ) : null}
        <GuestList />
      </div>

      <div className="buttonContainer">
        <div className="inviteButtons">
          <button className="sendInvitesButton" onClick={saveAndSend}>
            Send invites
          </button>
        </div>
        <div>
          <button className="sendInvitesButton" onClick={savePartyNoGuests}>
            Invite guests later
          </button>
        </div>
      </div>
    </div>
  );
}
