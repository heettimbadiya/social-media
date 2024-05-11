import LoginFrom from "./components/Login/LoginFrom";
import SignUp from "./components/signup/SignUp";
import React from "react";
import MainLayout from "./components/mainLayout/MainLayout";

const App = () => {
  return (
    <>
      <SignUp />
      <LoginFrom />
      <MainLayout />
    </>
  );
};

export default App;
