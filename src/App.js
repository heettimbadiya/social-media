import React from "react";
import LoginFrom from "./components/Login/LoginFrom";
import SignUp from "./components/signup/SignUp";
import ProfilePic from "./pages/ProfilePage/ProfilePic";
import { QueryClient, QueryClientProvider } from "react-query";
import MainLayout from "./components/mainLayout/MainLayout";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import PrivateRout from "./pages/PrivateRout/PrivateRout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
    },
  },
});

const App = () => {
  const token = localStorage.getItem("token") || [];

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Routes>
        {/* <Route element={<PrivateRout />}>
          <Route path="/" element={<MainLayout />} />
        </Route> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LoginFrom />} />
      </Routes>
      <MainLayout />
      </QueryClientProvider>
    </>
  );
};

export default App;
