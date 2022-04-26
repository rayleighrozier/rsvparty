import {
  SET_PARTY,
  SET_PARTY_COMMENTS,
  ADD_SUPPLIES,
  SET_PARTY_GUESTS,
} from "../action-types/index";
const initialState = null;

function party(state = initialState, action) {
  switch (action.type) {
    case SET_PARTY:
      return action.payload;
    case ADD_SUPPLIES:
      console.log("state.supplies", state.supplies);
      return {
        ...state,
        supplies: [
          ...state.supplies,
          { item: action.payload, guest: null, claimed: false },
        ],
      };

    case SET_PARTY_COMMENTS:
      return { ...state, comments: action.payload };
    case SET_PARTY_GUESTS:
      return { ...state, guests: [...state.guests, action.payload] };
    default:
      return state;
  }
}

export default party;
