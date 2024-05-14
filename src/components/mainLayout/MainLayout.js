import React, { useState } from "react";
import Box from "@mui/material/Box";
import { CssBaseline, styled, useTheme } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Header from "../../components/sidebar/Header";
import LoginFrom from "../Login/LoginFrom";
import { QueryClient, QueryClientProvider } from "react-query";
import ProfilePic from "../../pages/ProfilePage/ProfilePic";
export default function MainLayout() {
  const drawerWidth = 300;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: Infinity,
      },
    },
  });
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: open ? { md: `calc(100% - ${drawerWidth}px)` } : "100%",
          ml: { sm: `${drawerWidth}px` },
          display: { md: "none" },
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Header
            handleDrawerToggle={handleDrawerToggle}
            open={open}
            setOpen={setOpen}
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar
          open={open}
          handleDrawerClose={handleDrawerClose}
          window={window}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          setOpen={setOpen}
        />
      </Box>
      <Main open={open} sx={{ mt: { md: "0", xs: "40px" }, p: "0" }}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePic />} />
          </Routes>
        </QueryClientProvider>
      </Main>
    </Box>
  );
}
