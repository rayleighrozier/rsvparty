import React from "react";
import { guestSignUp } from "../../actions/supabase";
import { SET_PAGE } from "../../action-types";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch();
  const captureSignUp = (e) => {
    e.preventDefault();
    let input = {
      firstName: e.target.form[0].value,
      lastName: e.target.form[1].value,
      phone: e.target.form[2].value,
      email: e.target.form[3].value,
      password: e.target.form[4].value,
    };
    return input;
  };
  const sendSignUp = async (e) => {
    const input = captureSignUp(e);
    let userEntry = await guestSignUp(
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
    <div>
      <h1>Sign Up Page</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" type="text" placeholder="First Name" />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" type="text" placeholder="Last Name" />
        <label htmlFor="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
          Phone Number
        </label>
        <input name="phone" type="tel" placeholder="xxx-xxx-xxxx" />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="Password" />
        <button onClick={(e) => sendSignUp(e)}>Sign Up</button>
      </form>
    </div>
  );
}
