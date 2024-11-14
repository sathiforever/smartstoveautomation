import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "./assect/styles/styleComponent";
import App from "./App";
import LandingPage from "./Components/LandingPage";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<App />} />
      <Route path="/content/addoredit" element={<App />} />
      <Route path="/StoveSetting" element={<App />} />
    </Routes>
  );
};

export default RouterPage;
