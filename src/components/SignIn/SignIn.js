import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { captureSignIn } from "../../actions/input";
import { guestGetInfo, userSignIn } from "../../actions/supabase";
import { checkToken } from "../../actions/token";
import { SET_GUEST } from "../../action-types/index";
import logo from "../../assets/logo.png";
import "./SignIn.css";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendSignIn = async (e) => {
    let input = captureSignIn(e);
    let currentGuest = await userSignIn(input.email, input.password);
    let token = checkToken();
    if (token) {
      let guestInfo = await guestGetInfo(currentGuest.id);
      dispatch({
        type: SET_GUEST,
        payload: {
          guestId: guestInfo.guestId,
          firstName: guestInfo.firstName,
          lastName: guestInfo.lastName,
          parties: guestInfo.parties,
          avatar: guestInfo.avatar,
          email: input.email,
        },
      });
      navigate("/dashboard");
    } else {
      window.alert("Invalid sign in. Try again!");
    }
  };

  return (
    <>
      <img className="homePageLogo" src={logo} alt="Home Logo" />
      <div className="homeInputsContainer">
        <div className="headerDiv">
          <p className="homeHeader">Sign in</p>
          <p className="homePhrase">Welcome back, party animal!</p>
        </div>

        <form>
          <div className="inputContainer">
            <label htmlFor="email" className="inputLabel">
              Email address
            </label>
            <input
              className="inputField"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password" className="inputLabel">
              Password
            </label>
            <input
              className="inputField"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <button className="loginButton" onClick={(e) => sendSignIn(e)}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
