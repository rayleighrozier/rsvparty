import { createClient } from "@supabase/supabase-js";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

const guestSignUp = async (email, password) => {
  console.log("email", email);
  console.log("password", password);
  const { guest, session, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  console.log("sent to supabase");
  if (error) {
    console.log(error);
    return error;
  }

  return guest;
};

const guestSignIn = async (email, password) => {
  const { guest, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  if (error) {
    return error;
  }
  return guest;
};

const guestSignOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error;
  }
};

export { guestSignUp, guestSignIn, guestSignOut };
