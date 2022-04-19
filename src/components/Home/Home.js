import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SignIn from "../SignIn/SignIn";
import SignInNav from "../SignIn/SignInNav";
import SignUp from "../SignIn/SignUp";

export default function Home() {
  let dispatch = useDispatch();
  let page = useSelector((state) => state.page);
  return (
    <div>
      <h1>Home</h1>
      {page === "signIn" ? <SignIn /> : <SignUp />}
    </div>
  );
}
