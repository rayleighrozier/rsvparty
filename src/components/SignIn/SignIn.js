import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { captureSignIn } from "../../actions/input";
import { userSignIn } from "../../actions/supabase";
import { SET_GUESTID, SET_PAGE } from "../../action-types/index";
import { checkToken } from "../../actions/token";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendSignIn = async (e) => {
    let input = captureSignIn(e);
    let currentGuest = await userSignIn(input.email, input.password);
    let token = checkToken();
    if (token) {
      dispatch({ type: SET_GUESTID, payload: currentGuest.id });
      dispatch({ type: SET_PAGE, payload: "dashboard" });
      navigate("/dashboard");
    } else {
      window.alert("Invalid sign in. Try again!");
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="Password" />
        <button onClick={(e) => sendSignIn(e)}>Sign In</button>
      </form>
    </div>
  );
}
