import React from "react";
import ProfilePic from "./pages/ProfilePage/ProfilePic";
import { QueryClient, QueryClientProvider } from "react-query";

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
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProfilePic />
      </QueryClientProvider>
    </>
  );
};

export default App;
