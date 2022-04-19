import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignIn/SignUp";
import SignInNav from "../SignIn/SignInNav";

export default function Home() {
  let page = useSelector((state) => state.page);
  return (
    <div>
      <h1>Home</h1>
      {page === "signIn" ? <SignIn /> : <SignUp />}
      <SignInNav />
    </div>
  );
}
