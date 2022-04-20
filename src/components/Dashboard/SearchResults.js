import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SEARCHRESULTS } from "../../action-types";

export default function SearchResults() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const clearSearchResults = () => {
    dispatch({ type: SET_SEARCHRESULTS, payload: null });
  };
  return (
    <div>
      {searchResults === "notFound" ? (
        <div>
          <p>Party Not Found</p>
          <button onClick={clearSearchResults}>X</button>
        </div>
      ) : (
        <div>
          <p>{searchResults?.name}</p>
          <p>{searchResults?.date}</p>
          <p>{searchResults?.time}</p>
          <p>{searchResults?.details}</p>
          <button>Add To My Parties</button>
          <button onClick={clearSearchResults}>X</button>
        </div>
      )}
    </div>
  );
}
