import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { guestGetInfo } from "../../actions/supabase";

export default function RSVPButtons() {
  const dispatch = useDispatch();
  const party = useSelector((state) => state.party);
  const [host, setHost] = useState(null);

  const getHostData = async () => {
    let data = await guestGetInfo(party.hostId);
    setHost(data);
  };
  useEffect(() => {
    getHostData();
  }, []);

  return (
    <div>
      {host ? <p>Let {host.firstName} know if you can make it!</p> : null}
      <button>Going</button>
      <button>Maybe</button>
      <button>Can't Go</button>
    </div>
  );
}
