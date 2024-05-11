import React from "react";
import LoginFrom from "./components/Login/LoginFrom";
import SignUp from "./components/signup/SignUp";
import ProfilePic from "./pages/ProfilePage/ProfilePic";
import { QueryClient, QueryClientProvider } from "react-query";
import MainLayout from "./components/mainLayout/MainLayout";
import { Route, Routes } from "react-router";

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
      <Routes>
        <Route path="/login" element={<LoginFrom />} />
        <Route path="/" element={<MainLayout />} />
      </Routes>
      <QueryClientProvider client={queryClient}>
        <ProfilePic />
      </QueryClientProvider>
    </>
  );
};

export default App;
