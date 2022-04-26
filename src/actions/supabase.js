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
    console.log("error", error);
    return error;
  } else {
    console.log("user sent", user);
  }
  let guestId = user.id;
  console.log("userid going to guestid", guestId);
  guestAddRow(firstName, lastName, guestId);
  return user;
};

const guestAddRow = async (firstName, lastName, guestId) => {
  const { data, error } = await supabase
    .from("Guests")
    .insert([{ guestId: guestId, firstName: firstName, lastName: lastName }]);
  if (error) {
    console.log("error", error);
    return error;
  } else {
    console.log("guest created", data);
  }
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
  let { data: guest, error } = await supabase
    .from("Parties")
    .update({ guests: updatedGuests })
    .match({ partyId: partyId });
};

const partyUpdateDetails = async (partyId, updatedDetails) => {
  console.log("party updating details with", updatedDetails);
  let { data: guest, error } = await supabase
    .from("Parties")
    .update({
      name: updatedDetails.name,
      date: updatedDetails.date,
      time: updatedDetails.time,
      details: updatedDetails.details,
      location: updatedDetails.location,
    })
    .match({ partyId: partyId });
};

//update comments on a party
const partyUpdateComments = async (partyId, updatedComments) => {
  let { data: guest, error } = await supabase
    .from("Parties")
    .update({ comments: updatedComments })
    .match({ partyId: partyId });
};

//add parties or update the party list of a guest
const guestUpdateParties = async (guestId, updatedParties) => {
  let { data: guest, error } = await supabase
    .from("Guests")
    .update({ parties: updatedParties })
    .match({ guestId: guestId });
};

//change a guest's avatar
const guestUpdateAvatar = async (guestId, newAvatar) => {
  let { data: guest, error } = await supabase
    .from("Guests")
    .update({ avatar: newAvatar })
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

//get all of the avatars
const avatarsGetAll = async () => {
  let { data: Avatars, error } = await supabase.from("Avatars").select("*");
  return Avatars;
};

//get data for one avatar
const avatarFindById = async (avatarId) => {
  let avatar = null;
  let { data: avatars, error } = await supabase
    .from("Avatars")
    .select("*")
    .match({ avatarId: avatarId });
  if (avatars) {
    avatar = avatars[0];
    return avatar;
  }
  return avatar;
};
//updates supplies
const partyUpdateSupplies = async (partyId, updatedSupplies) => {
  console.log(partyId);
  console.log(updatedSupplies);
  let { data: party, error } = await supabase
    .from("Parties")
    .update({ supplies: updatedSupplies })
    .match({ partyId: partyId });
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
  avatarsGetAll,
  guestUpdateAvatar,
  avatarFindById,
  partyUpdateSupplies,
  partyUpdateComments,
  partyUpdateDetails,
};
