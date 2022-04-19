import "./App.css";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
