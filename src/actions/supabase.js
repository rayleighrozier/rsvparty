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

//add a party id to a guest

export { userSignUp, userSignIn, userSignOut, guestAddRow };
