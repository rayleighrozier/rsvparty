import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkToken } from "../../actions/token";
import { SET_PAGE } from "../../action-types";
import AddDetails from "./AddDetails";
import InviteGuests from "./InviteGuests";
import Error from "../Error/Error";

export default function AddParty() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const token = checkToken();
  useEffect(() => {
    dispatch({ type: SET_PAGE, payload: "addDetails" });
  }, []);

  return (
    <>
      {token ? (
        <div className="addPartyContent">
          <p className="addPartyTitle">CREATE A PARTY</p>
          {page === "addDetails" ? <AddDetails /> : <InviteGuests />}
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}
