const captureSignUp = (e) => {
  e.preventDefault();
  let input = {
    firstName: e.target.form[0].value,
    lastName: e.target.form[1].value,
    phone: e.target.form[2].value,
    email: e.target.form[3].value,
    password: e.target.form[4].value,
  };
  return input;
};
const captureSignIn = (e) => {
  e.preventDefault();
  let input = {
    email: e.target.form[0].value,
    password: e.target.form[1].value,
  };
  return input;
};
const captureSearchParty = (e) => {
  e.preventDefault();
  let input = e.target.form[0].value;
  return input;
};
const captureAddParty = (e) => {
  e.preventDefault();
  let input = {
    name: e.target.form[0].value,
    date: e.target.form[1].value,
    time: e.target.form[2].value,
    address: e.target.form[3].value,
    city: e.target.form[4].value,
    state: e.target.form[5].value,
    zip: e.target.form[6].value,
    details: e.target.form[7].value,
  };
  return input;
};
export { captureSignUp, captureSignIn, captureAddParty, captureSearchParty };
