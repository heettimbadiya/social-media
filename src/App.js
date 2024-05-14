import React from "react";
import LoginFrom from "./components/Login/LoginFrom";
import SignUp from "./components/signup/SignUp";
import ProfilePic from "./pages/ProfilePage/ProfilePic";
import { QueryClient, QueryClientProvider } from "react-query";
import MainLayout from "./components/mainLayout/MainLayout";
import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import Home from "./pages/Home/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
    },
  },
});

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfilePic />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LoginFrom />} />
        <Route
          path="/private"
          element={<PrivateRoute element={<MainLayout />} />}
        />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
