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
    const regex =
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    const input = captureSignUp(e);
    const validateEmail = (email) => {
      if (regex.test(email)) {
        return true;
      }
      return false;
    };
    let userEntry = await userSignUp(
      input.firstName,
      input.lastName,
      input.email,
      input.password
    );
    if (input.firstName.length < 1) {
      window.alert("Please provide your first name");
    } else if (input.lastName.length < 2) {
      window.alert("Please provide your last name");
    } else if (!validateEmail(input.email)) {
      window.alert("Please provide a valid email address");
    } else if (input.password.length < 6) {
      window.alert(
        "Please make sure your password contains at least six characters"
      );
    } else {
      window.alert("Account created! Check your email to confirm and sign in.");
      dispatch({ type: SET_PAGE, payload: "signIn" });
    }
  };
  return (
    <>
      <img className="homePageLogo" src={logo} />
      <div className="homeInputsContainer">
        <p className="homeHeader">Sign up</p>
        <p className="homePhrase">Become a party animal!</p>
        <form>
          <div className="namesContainer">
            <div className="inputContainer">
              <label htmlFor="firstName" className="inputLabel">
                First name
              </label>
              <input
                className="inputField nameInput"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="lastName" className="inputLabel">
                Last name
              </label>
              <input
                className="inputField nameInput"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
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
              Phone number
            </label>
            <input
              className="inputField"
              name="phone"
              type="tel"
              placeholder="e.g. 999-999-9999"
            />
          </div>
          <div className="inputContainer">
            <label className="inputLabel" htmlFor="email">
              Email address
            </label>
            <input
              className="inputField"
              name="email"
              type="email"
              placeholder="e.g. email@address.com"
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
              placeholder="Must contain 6+ characters"
            />
            <button className="loginButton" onClick={(e) => sendSignUp(e)}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
