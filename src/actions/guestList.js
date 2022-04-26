const guestsToJSON = (guestList) => {
  let guestsJSON = [];
  if (Array.isArray(guestList)) {
    for (const person of guestList) {
      let guestdata = JSON.parse(person);
      guestsJSON.push(guestdata);
    }
    return guestsJSON;
  } else {
    guestsJSON = JSON.parse(guestList);
    return guestsJSON;
  }
};

const checkIfInvited = (guest, guestList) => {
  if (Array.isArray(guestList)) {
    let filtered = guestList.filter((data) => data.email === guest.email);
    if (filtered.length > 0) {
      return true;
    }
    return false;
  } else if (guestList === null) {
    return false;
  } else {
    if (guestList.email === guest.email) {
      return true;
    }
    return false;
  }
};

export { checkIfInvited, guestsToJSON };
