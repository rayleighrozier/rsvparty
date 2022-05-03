<div align="center">

  <img src="src\assets\readme\logo.png" alt="logo" width="200" height="auto" />

  <p>
    Welcome Party Animals! 
  </p>

<h4>
    [Video Walkthrough](https://youtu.be/qHjhDcWw_XM) | <a >Article</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# Table of Contents

- [About the Project](#about-the-project)
  - [Screenshots](#screenshots)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Color Reference](#color-reference)
  - [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
  - [Run Locally](#run-locally)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

- [Acknowledgements](#acknowledgements)

<!-- About the Project -->

## About the Project

<!-- Screenshots -->

  <img src="src\assets\readme\preview.PNG" style= width:600px alt="screenshot" />

<!-- TechStack -->

### Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.npmjs.com/package/redux-persist">redux-persist</a></li>
    <li><a href="https://reactrouter.com/">React-Router</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://react-redux.js.org/">React-Redux.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://supabase.com/">Supabase</a></li>
  </ul>
</details>

<!-- Features -->

### Features

- Account Creation
- Ability to Create Events
- Ability to Edit Events as the Host
- Automated Invites Sent to People the User Chooses
- Comments Section With Emoji Support
- Countdown for Event

<!-- Color Reference -->

### Color Reference

<img src="src\assets\readme\colors.png"></img>

<!-- Env Variables -->

### Environment Variables

To run this project locally, you will need to add the following environment variables to your .env file

`REACT_APP_SUPABASE_URL`

`REACT_APP_SUPABASE_KEY`

<!-- Getting Started -->

## Getting Started

<!-- Run Locally -->

### Run Locally

Clone the project

https://github.com/rayleighrozier/rsvparty

Go to the project directory

```bash
  cd rsvparty
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

<!-- Usage -->

## Usage

Users fill out a form to sign up, the contents of the form get sent to our database to create a user.

<details>
  <summary>Sign Up Page</summary>
  <div align="center"> 
<img style="width: 400px" src="src\assets\readme\signup.PNG"/>
</div>
</details>

```javascript
const userSignUp = async (firstName, lastName, email, password) => {
  const { user, session, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    return error;
  }
  let guestId = user.id;
  guestAddRow(firstName, lastName, guestId);
  return user;
};
```

User can then create a party after once signed in. The information also gets sent to the database to be created.

<details>
  <summary>Add Party Page</summary>
  <div align="center"> 
<img style="width: 550px" src="src\assets\readme\createParty.PNG"/>
</div>
</details>

```javascript
const createParty = async (e) => {
    const input = captureAddParty(e);
    let location = {
      address: input.address,
      city: input.city,
      state: input.state,
      zip: input.zip,
    };

    let userEntry = await partyAddRow(
      guest.guestId,
      input.name,
      input.date,
      input.time,
      input.details,
      location
    );
```

From the dashboard users can then view their party, change their avatar, or search for a specidfic party if the party ID is known.

<details>
  <summary>Dashboard</summary>
  <div align="center"> 
<img style="width: 550px" src="src\assets\readme\dashboard.PNG"/>
</div>
</details>

```javascript
        page === "dashboard" ? (
          <div className="dashboardContainer">
            <div className="userContainer">
              <DashboardTop />
              <SearchParty />
              {searchResults ? <SearchResults /> : null}
            </div>
            <div className="partyContainer">
              <p className="partiesHeader">Parties</p>
              <div className="partiesContainer">
                <AddPartyButton />
                {parties != null && parties.length > 0 ? (
                  <PartyList />
                ) : (
                  <NoParties />
                )}
              </div>
            </div>
          </div>
        ) : (
          <ChooseAvatar />
```

The party page displays all the information the user submitted once creating the party, and features a countdown, comment section, guest list, supplies section, and a place for guests to let the host know if they can attend. Hosts have the ability to invite guests or edit the party.

<details>
  <summary>Party Details (Host Point of View)</summary>
  <div align="center"> 
<img style="width: 550px" src="src\assets\readme\hostView.PNG"/>
</div>
</details>
<details>
  <summary>Party Details (Guest Point of View)</summary>
  <div align="center"> 
<img style="width: 550px" src="src\assets\readme\guestView.PNG"/>
</div>
</details>

```javascript
        invited ? (
          <div className="party-main-container">
            <p className="timeToParty">TIME TO PARTY!</p>
            <div className="party-top-container">
              <div className="party-countdown-container">
                <div className="party-countdown-numbers">
                  <Countdown date={Date.now() + tl}>
                    <Completionist />
                  </Countdown>
                </div>
                <CountdownTitles />
              </div>
              {party ? <PartyDetails host={host} setHost={setHost} /> : null}
            </div>
            {host ? (
              <HostButtons />
            ) : (
              <RSVPButtons attending={attending} setAttending={setAttending} />
            )}
            <div className="party-middle-container">
              <div className="party-middle-left">
                {party ? <AdditionalDetails /> : null}
                {party ? <Guests host={host} /> : null}
              </div>
              <div className="party-middle-right">
                {party ? <Comments /> : null}
              </div>
            </div>
            {party ? <Supplies host={host} /> : null}
          </div>
```

<!-- Roadmap -->

## Roadmap

- [ ] Spotify Implementation
- [ ] Image Uploading

<!-- Contributing -->

## Contributing

<div style=display:flex>

<a href="https://github.com/rayleighrozier">
  <img src="https://i.imgur.com/X3lNfks.png" />
</a>

<a href="https://github.com/ciaracloud">
  <img src="https://i.imgur.com/CQmhomk.png" />
</a>
</div>

<div style=display:flex>

<a href="https://github.com/JAReichert">
  <img src="https://i.imgur.com/k3DZ2sO.png" />
</a>

<a href="https://github.com/San-toast">
  <img src="https://i.imgur.com/yKpeQEL.png" />
</a></div>

## Acknowledgements

These were helpful packages used in this project.

- [EmailJS](https://www.emailjs.com/)
- [emoji-picker-react](https://www.npmjs.com/package/emoji-picker-react)
- [react-countdown](https://www.npmjs.com/package/react-countdown)
