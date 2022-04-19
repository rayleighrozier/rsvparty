import React from "react";

export default function SignUp() {
  return (
    <div>
      <h1>Sign Up Page</h1>
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
      <button>Sign Up</button>
    </div>
  );
}
