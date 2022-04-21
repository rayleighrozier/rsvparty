import { createClient } from "@supabase/supabase-js";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

//The beginning of the function names signify
//which table they are related to (ex. user, guest, party)

//sign up
const userSignUp = async (firstName, lastName, email, password) => {
  const { user, session, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    console.log(error);
    return error;
  }
  let guestId = user.id;
  guestAddRow(firstName, lastName, guestId);
  return user;
};

const guestAddRow = async (firstName, lastName, guestId) => {
  const { data, error } = await supabase
    .from("Guests")
    .insert([{ guestId: guestId, firstName: firstName, lastName: lastName }]);
  return data;
};

//sign in and out
const userSignIn = async (email, password) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  if (error) {
    return error;
  }
  return user;
};

const userSignOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error;
  }
};

//send a new party to the database
const partyAddRow = async (hostId, name, date, time, details, location) => {
  const { data, error } = await supabase.from("Parties").insert([
    {
      hostId: hostId,
      name: name,
      date: date,
      time: time,
      details: details,
      location: location,
    },
  ]);
  return data;
};

//find party by id
const partyFindById = async (input) => {
  let party = null;
  let { data: parties, error } = await supabase
    .from("Parties")
    .select("*")
    .match({ partyId: input });
  if (parties) {
    let party = parties[0];
    return party;
  }
  return party;
};

//add guests to a party
const partyUpdateGuests = async (partyId, updatedGuests) => {
  console.log("updating guest list for", partyId, "with", updatedGuests);
  let { data: guest, error } = await supabase
    .from("Parties")
    .update({ guests: updatedGuests })
    .match({ partyId: partyId });
};

//add parties or update the party list of a guest
const guestUpdateParties = async (guestId, updatedParties) => {
  console.log("updating partuies for", guestId, "eith", updatedParties);
  let { data: guest, error } = await supabase
    .from("Guests")
    .update({ parties: updatedParties })
    .match({ guestId: guestId });
};

//grab all info from guest table (name, parties, etc)
const guestGetInfo = async (guestId) => {
  let { data: guest, error } = await supabase
    .from("Guests")
    .select("*")
    .match({ guestId: guestId });
  guest = guest[0];
  return guest;
};

export {
  userSignUp,
  userSignIn,
  userSignOut,
  guestAddRow,
  partyAddRow,
  partyFindById,
  guestUpdateParties,
  guestGetInfo,
  partyUpdateGuests,
};
