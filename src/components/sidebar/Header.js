import { Box, IconButton, Typography, useTheme } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react'

const Header = ({ handleDrawerToggle, open ,setOpen}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <IconButton
        // color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          mr: 2,
          display: { md: "none" },
        }}
      >
        <MenuIcon />
      </IconButton>
      {!open ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setOpen(!open)}
          sx={{
            mr: 2,
            display: { sm: "block", xs: "none" },
            height: "50px",
            width: "50px",
          }}
        >
          <MenuIcon />
        </IconButton>
      ) : null}
      <Typography variant="h6" noWrap component="div">
        Responsive drawer
      </Typography>
    </Box>
  );
};

export default Header
    