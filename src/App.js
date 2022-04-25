import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import AddParty from "./components/AddParty/AddParty";
import Party from "./components/Party/Party";
import Error from "./components/Error/Error";
import WithNav from "./components/Navbar/WithNav";
import Playlist from "./components/Playlist/Playlist";
import EditParty from "./components/EditParty/EditParty";
import EditGuests from "./components/EditParty/EditGuests";
import InviteGuests from "./components/AddParty/InviteGuests";
import ChooseAvatar from "./components/ChooseAvatar/ChooseAvatar";
// import Comments from "./components/Comments/Comments";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<WithNav />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addparty" element={<AddParty />} />
            <Route path="/editparty" element={<EditParty />} />
            <Route path="/editguests" element={<EditGuests />} />
            <Route path="/party/:partyId" element={<Party />} />
            <Route path="/test" element={<InviteGuests />} />
            {/* <Route path="/comments" element={<Comments />} /> */}
            <Route path="/ChooseAvatar" element={<ChooseAvatar />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
