import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme, styled, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const drawerWidth = 300;

export default function Sidebar({
  open,
  handleDrawerClose,
  mobileOpen,
  handleDrawerTransitionEnd,
  setOpen,
  handleDrawerToggle,
}) {
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    ...theme.mixins.toolbar,
    justifyContent: "end",
    backgroundColor: theme.palette.darkBlue,
    color: theme.palette.textGray,
  }));

  const drawer = (
    <Box>
      <List sx={{ px: "10px" }}>
        {[
          {
            title: "Home",
            icon: (
              <HomeIcon
                sx={{
                  color: theme.palette.black,
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              />
            ),
            to: "/",
          },
          {
            title: "Profile",
            icon: (
              <PersonIcon
                sx={{
                  color: theme.palette.black,
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              />
            ),
            to: "/profile",
          },
        ].map((text, index) => (
          <>
            <NavLink to={text.to} onClick={handleDrawerToggle}>
              <ListItem
                key={text}
                disablePadding
                sx={{
                  transition: ".4s",
                  "&:hover": {
                    borderRadius: "10px",
                    overflow: "hidden",
                    backgroundColor: "#F2F2F2",
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText
                    primary={text.title}
                    sx={{ color: theme.palette.black }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: theme.palette.darkBlue,
            color: theme.palette.textGray,
          },
        }}
      >
        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: "none", xs: "block" },
              height: "50px",
              width: "50px",
              "&:hover": { backgroundColor: theme.palette.sidebarHover },
            }}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Box
          sx={{ pt: "20px", pb: "30px", textAlign: "center", fontSize: "30px" }}
        >
          Wink
        </Box>

        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { md: "block", xs: "none" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #00000026",
          },
        }}
      >
        <Box
          sx={{ pt: "40px", pb: "30px", textAlign: "center", fontSize: "30px" }}
        >
          Wink
        </Box>
        <Box sx={{ overflow: "auto" }}>
          <List sx={{ px: "10px" }}>
            {[
              {
                title: "Home",
                icon: (
                  <HomeIcon
                    sx={{
                      color: theme.palette.black,
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                ),
                to: "/",
              },
              {
                title: "Profile",
                icon: (
                  <PersonIcon
                    sx={{
                      color: theme.palette.black,
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                ),
                to: "/profile",
              },
            ].map((text, index) => (
              <>
                <NavLink to={text.to}>
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{
                      transition: ".4s",
                      "&:hover": {
                        borderRadius: "10px",
                        overflow: "hidden",
                        backgroundColor: "#F2F2F2",
                      },
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon>{text.icon}</ListItemIcon>
                      <ListItemText
                        primary={text.title}
                        sx={{ color: theme.palette.black }}
                      />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              </>
            ))}
          </List>
          <Divider sx={{ border: "1px solid #00000026" }} />
        </Box>
      </Drawer>
    </Box>
  );
}
