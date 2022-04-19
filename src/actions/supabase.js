import { createClient } from "@supabase/supabase-js";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

const guestSignUp = async (firstName, lastName, email, password) => {
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
  console.log(user.id);
  return user;
};

const guestAddRow = async (firstName, lastName, guestId) => {
  const { data, error } = await supabase
    .from("Guests")
    .insert([{ guestId: guestId, firstName: firstName, lastName: lastName }]);
  return data;
};

const guestSignIn = async (email, password) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  if (error) {
    return error;
  }
  return user;
};

const guestSignOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error;
  }
};

export { guestSignUp, guestSignIn, guestAddRow };
