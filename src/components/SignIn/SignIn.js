import React from "react";
import SignInNav from "./SignInNav";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { captureSignIn } from "../../actions/input";
import { guestSignIn } from "../../actions/supabase";
import { SET_PAGE } from "../../action-types/index";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendSignIn = async (e) => {
    let input = captureSignIn(e);
    let currentGuest = await guestSignIn(input.email, input.password);
    let token = localStorage.getItem("supabase.auth.token");
    console.log("token", token);
    if (token !== undefined) {
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
