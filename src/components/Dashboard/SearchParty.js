import React from "react";
import { captureSearchParty } from "../../actions/input";
import { partyFindById } from "../../actions/supabase";

export default function SearchParty() {
  const showSearchResults = (e) => {
    let input = captureSearchParty(e);
    partyFindById(input);
  };
  return (
    <div>
      <form>
        <input type="text" />{" "}
        <button onClick={showSearchResults}>Find Party By ID</button>
      </form>
    </div>
  );
}
