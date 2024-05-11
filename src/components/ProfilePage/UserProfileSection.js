import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import avatar from "../../assets/images/profileSection/userAvatar/useravatar.jpg";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import useGetCurrentUser from "../../hooks/useGetCurrentUser";

const UserProfileSection = () => {
  const theme = useTheme();
  const { data } = useGetCurrentUser(2);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  console.log("User : ", data);

  return (
    <>
      <Box
        sx={{
          display: { md: "none", xs: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          p: "10px",
          borderBottom: `1px solid ${theme.palette.darkGrayBack}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          heet_timbadiya_{" "}
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ExpandMoreIcon />
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={handleMenuOpen}>
            <i class="fa-solid fa-bars"></i>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                width: "150px",
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box sx={{borderBottom: `1px solid ${theme.palette.darkGrayBack}`,pb: "30px"}}>
        <Container>
          <Grid
            container
            sx={{ p: { md: "50px", xs: "20px" }, alignItems: "center" }}
          >
            <Grid item xs={4}>
              <Box
                sx={{
                  textAlign: { md: "center", xs: "start" },
                  height: { sm: "150px", xs: "95px" },
                }}
              >
                <img
                  src={avatar}
                  alt="error"
                  style={{
                    borderRadius: "50%",
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{
                  display: { md: "flex", xs: "block" },
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    mr: "10px",
                    display: { md: "block", xs: "none" },
                  }}
                >
                  heet_timbadiya_
                </Typography>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                                      justifyContent: { sm: "start", xs: "center" },
                    ml: "5px"
                  }}
                >
                  <Box sx={{ textAlign: "center", fontSize: "16px" }}>
                    <Box sx={{ fontWeight: "500" }}>1</Box>
                    <Box>Posts</Box>
                  </Box>
                  <Box
                    sx={{ textAlign: "center", fontSize: "16px", mx: "18px" }}
                  >
                    <Box sx={{ fontWeight: "500" }}>239</Box>
                    <Box>Followers</Box>
                  </Box>
                  <Box
                    sx={{ textAlign: "center", fontSize: "16px" }}
                  >
                    <Box sx={{ fontWeight: "500" }}>249</Box>
                    <Box>Following</Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: { md: "0px", xs: "10px" },
                    display: { sm: "flex", xs: "none" },
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "unset",
                      color: theme.palette.black,
                      fontWeight: "500",
                      borderRadius: "8px",
                      fontWeight: "500",
                      p: " 5px 18px",
                      fontSize: "13.5px",
                      backgroundColor: theme.palette.grayBack,
                      mx: { md: "10px", xs: "0" },
                      "&:hover": {
                        backgroundColor: theme.palette.darkGrayBack,
                      },
                    }}
                  >
                    Edit profile
                  </Button>
                  <Button
                    sx={{
                      textTransform: "unset",
                      color: theme.palette.black,
                      fontWeight: "500",
                      borderRadius: "8px",
                      ml: { xs: "10px", md: "0" },
                      fontWeight: "500",
                      p: " 5px 18px",
                      fontSize: "13.5px",
                      backgroundColor: theme.palette.grayBack,
                      "&:hover": {
                        backgroundColor: theme.palette.darkGrayBack,
                      },
                    }}
                  >
                    View Archive
                  </Button>
                </Box>
                <Box sx={{ ml: "10px", display: { md: "block", xs: "none" } }}>
                  <SettingsIcon />
                </Box>
              </Box>
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  alignItems: "center",
                  mt: { md: "25px", xs: "15px" },
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: "500" }} component={"span"}>
                    1{" "}
                  </Typography>
                  Post
                </Box>
                <Box sx={{ ml: "30px" }}>
                  <Typography sx={{ fontWeight: "500" }} component={"span"}>
                    239{" "}
                  </Typography>
                  Followers
                </Box>
                <Box sx={{ ml: "30px" }}>
                  <Typography sx={{ fontWeight: "500" }} component={"span"}>
                    249{" "}
                  </Typography>
                  Following
                </Box>
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Box
                  sx={{
                    fontWeight: "500",
                    mb: "3px",
                    mt: { md: "25px", xs: "15px" },
                  }}
                >
                  Heet Timbadiya
                </Box>
                <Box>JAI SHREERAM 🚩🚩</Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Box
              sx={{
                fontWeight: "500",
                mb: "3px",
              }}
            >
              Heet Timbadiya
            </Box>
            <Box>JAI SHREERAM 🚩🚩</Box>
          </Box>
          <Box
            sx={{
              mt: { md: "0px", xs: "10px" },
              display: { sm: "none", xs: "flex" },
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                textTransform: "unset",
                color: theme.palette.black,
                fontWeight: "500",
                borderRadius: "8px",
                fontWeight: "500",
                p: "5px 30px",
                fontSize: "13.5px",
                backgroundColor: theme.palette.grayBack,
                mx: { md: "10px", xs: "0" },
                "&:hover": {
                  backgroundColor: theme.palette.darkGrayBack,
                },
              }}
            >
              Edit profile
            </Button>
            <Button
              sx={{
                textTransform: "unset",
                color: theme.palette.black,
                fontWeight: "500",
                borderRadius: "8px",
                ml: { xs: "10px", md: "0" },
                fontWeight: "500",
                p: "5px 30px",
                fontSize: "13.5px",
                backgroundColor: theme.palette.grayBack,
                "&:hover": {
                  backgroundColor: theme.palette.darkGrayBack,
                },
              }}
            >
              View Archive
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default UserProfileSection;
