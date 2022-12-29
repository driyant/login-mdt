import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
