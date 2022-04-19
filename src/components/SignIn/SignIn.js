import React from "react";
import SignInNav from "./SignInNav";

export default function SignIn() {
  return (
    <div>
      <h1>Sign In Page</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="Password" />
        <button>Sign In</button>
        <SignInNav />
      </div>
    </div>
  );
}
