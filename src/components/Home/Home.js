import React from "react";
import { useSelector } from "react-redux";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignIn/SignUp";
import SignInNav from "../SignIn/SignInNav";
import RSVPimage from "../../assets/RSVPimage.png";
import "./Home.css";

export default function Home() {
  let page = useSelector((state) => state.page);

  return (
    <div className="homePage">
      <div className="homeImgContainer">
        <img className="RSVPimage" src={RSVPimage} />
        <p className="homeText homeTextPhrase">UNLEASH YOUR PARTY ANIMAL!</p>
        <p className="homeText homeText2">
          Built by Rayleigh Rozier, Santos Gutierrez, Jason Reichert, and Ciara
          Cloud
        </p>
      </div>
      <div className="homePageInputs">
        {page === "signIn" ? <SignIn /> : <SignUp />}
        <SignInNav />
      </div>
    </div>
  );
}
