import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import { Login, Register, ForgotPassword, List, View } from "./pages";

function App() {
  const { token } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <Navigate to="roadmaps"/> : <Navigate to="signin"/>} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="roadmaps" element={<List />} />
        <Route path="roadmaps/view" element={<View />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
