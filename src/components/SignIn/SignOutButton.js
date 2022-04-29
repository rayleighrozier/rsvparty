import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignOut } from "../../actions/supabase";
import {
  SET_PAGE,
  RESET_GUEST,
  SET_PARTYDETAILS,
  RESET_NEWPARTY,
  SET_PARTY,
  SET_AVATARS,
  SET_ATTENDING,
  SET_PARTYUNFORMATTED,
} from "../../action-types/index";

export default function SignOutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendSignOut = async () => {
    await userSignOut();
    dispatch({ type: SET_PAGE, payload: "signIn" });
    dispatch({ type: RESET_GUEST });
    dispatch({ type: SET_PARTY, payload: null });
    dispatch({ type: SET_PARTYDETAILS, payload: null });
    dispatch({ type: SET_AVATARS, payload: null });
    dispatch({ type: RESET_NEWPARTY });
    dispatch({ type: SET_ATTENDING, payload: null });
    dispatch({ type: SET_PARTYUNFORMATTED, payload: null });
    navigate("/");
  };

  return (
    <button className="signOutButton" onClick={sendSignOut}>
      Sign out
    </button>
  );
}
