import LoginFrom from "./components/Login/LoginFrom";
import SignUp from "./components/signup/SignUp";
import React from "react";
import MainLayout from "./components/mainLayout/MainLayout";
import { Route, Routes } from "react-router";

const App = () => {
  const token = localStorage.getItem("token") || [];

  console.log("token :M ", token);
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginFrom />} />
        <Route path="/" element={<MainLayout />} />
      </Routes>
      {/* <SignUp /> */}
    </>
  );
};

export default App;
