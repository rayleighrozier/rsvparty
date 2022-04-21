import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddDetails from "./AddDetails";
import InviteGuests from "./InviteGuests";
import Error from "../Error/Error";
import { checkToken } from "../../actions/token";
import { SET_PAGE } from "../../action-types";
import { useDispatch } from "react-redux";

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
        <div>
          <h1>Add A New Party</h1>
          {page === "addDetails" ? <AddDetails /> : <InviteGuests />}
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}
