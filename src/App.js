import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import PlaneLayout from "./pages/pagelayouts/PlaneLayout";
import Welcome from "./pages/Welcome";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirmation from "./pages/CodeConfirmation";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/pagelayouts/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <PlaneLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirmation />} />
          <Route path="/allow_notification" element={<AllowNotification />} />
        </Routes>
      </PlaneLayout>
      <AppLayout >
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
