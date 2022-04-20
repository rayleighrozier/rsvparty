const checkToken = () => {
  let token = localStorage.getItem("supabase.auth.token");
  if (token) {
    return true;
  }
  return false;
};

export { checkToken };
