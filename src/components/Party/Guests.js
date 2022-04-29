import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { guestGetInfo } from "../../actions/supabase";

export default function Guests(props) {
  const party = useSelector((state) => state.party);
  const [guestList, setGuestList] = useState(null);
  const [host, setHost] = useState(null);
  const getHostData = async () => {
    let data = await guestGetInfo(party.hostId);
    setHost(data);
  };

  useEffect(() => {
    setGuestList(party.guests);
  }, [party]);
  useEffect(() => {
    getHostData();
  }, []);

  return (
    <div className="party-guest-container">
      <div className="party-guest-header">
        <p>Guest List</p>
      </div>
      {guestList ? (
        <div className="party-guest-list">
          {host ? (
            <div className="party-guest party-host">
              {" "}
              <p>
                {host.firstName}
                {"  "} {host.lastName}
              </p>
              <p>Host</p>
            </div>
          ) : null}
          {guestList.map((guest) => {
            return (
              <div className="party-guest">
                <p>
                  {guest.firstName}
                  {"  "} {guest.lastName}
                </p>
                {guest.attending === "yes" ? <p>Attending</p> : null}
                {guest.attending === "no" ? <p>Not Attending</p> : null}
                {guest.attending === "maybe" ? <p>Maybe Attending</p> : null}
                {guest.attending === "undecided" ? <p>No Response </p> : null}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="party-guest-list">
          {" "}
          {host ? (
            <div className="party-guest party-host">
              {" "}
              <p>
                {host.firstName}
                {"  "} {host.lastName}
              </p>
              <p>Host</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
