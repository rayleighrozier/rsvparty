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
  console.log(input);
  return input;
};
export { captureSignUp, captureSignIn, captureSearchParty };
