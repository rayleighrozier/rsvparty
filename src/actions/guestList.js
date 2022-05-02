const checkIfInvited = (guest, guestList) => {
  console.log("checking if invited");
  if (Array.isArray(guestList)) {
    let filtered = guestList.filter((data) => data.email === guest.email);
    if (filtered.length > 0) {
      console.log("invited", true);
      return true;
    }
    return false;
  } else if (guestList === null) {
    console.log("guest list is null", false);
    return false;
  } else {
    if (guestList.email === guest.email) {
      console.log("invited", true);
      return true;
    }
    console.log("guest email not in guests", false);
    return false;
  }
};

export { checkIfInvited };
