import React from "react";
import { userSignUp } from "../../actions/supabase";
import { SET_PAGE } from "../../action-types";
import { useDispatch } from "react-redux";
import { captureSignUp } from "../../actions/input";
import "./SignIn.css";
import logo from "../../assets/logo.png";

export default function SignUp() {
  const dispatch = useDispatch();
  const sendSignUp = async (e) => {
    const input = captureSignUp(e);
    let userEntry = await userSignUp(
      input.firstName,
      input.lastName,
      input.email,
      input.password
    );
    if (userEntry.message) {
      window.alert(`${userEntry.message}`);
    } else {
      window.alert("Account created! Check your email to confirm and sign in.");
      dispatch({ type: SET_PAGE, payload: "signIn" });
    }
  };
  return (
    <div className="homeInputsContainer">
      <img className="homePageLogo" src={logo} />
      <h1 className="homeHeader">Sign up</h1>
      <p className="homePhrase">Become a party animal!</p>
      <form>
        <div className="namesContainer">
          <div className="inputContainer">
            <label htmlFor="firstName" className="inputLabel">
              First Name
            </label>
            <input
              className="inputField"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lastName" className="inputLabel">
              Last Name
            </label>
            <input
              className="inputField"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="inputContainer">
          <label
            className="inputLabel"
            htmlFor="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          >
            Phone Number
          </label>
          <input
            className="inputField"
            name="phone"
            type="tel"
            placeholder="xxx-xxx-xxxx"
          />
        </div>
        <div className="inputContainer">
          <label className="inputLabel" htmlFor="email">
            Email
          </label>
          <input
            className="inputField"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="inputContainer">
          <label className="inputLabel" htmlFor="password">
            Password
          </label>
          <input
            className="inputField"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="loginButton" onClick={(e) => sendSignUp(e)}>
          Register
        </button>
      </form>
    </div>
  );
}
