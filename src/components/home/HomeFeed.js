import { Avatar, Box, Grid, useTheme } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const HomeFeed = () => {
  const theme = useTheme();
  const [icon, setIcon] = useState(false);

  const handleToster = () => toast.success("Wow so easy!");
 

  return (
    <>
      <Box py={"50px"}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Box
              sx={{
                borderBottom: "1px solid #00000026",
                width: { md: "500px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: "10px" }}>
                  <Box>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png"
                      sx={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      color: theme.palette.black,
                      marginLeft: "10px",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    heet_timbadiya_
                  </Box>
                </Box>
                <Box>
                  <MoreHorizIcon
                    sx={{
                      color: theme.palette.black,
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  border: "1px solid #00000026",
                  overflow: "hidden",
                }}
              >
                <Grid item>
                  <Box sx={{ height: "600px", width: { md: "400px" } }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/How%20To%20Post%20on%20IG.jpg?width=595&height=400&name=How%20To%20Post%20on%20IG.jpg"
                      sx={{
                        height: "100%",
                        borderRadius: "unset",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/How%20To%20Post%20on%20IG.jpg?width=595&height=400&name=How%20To%20Post%20on%20IG.jpg"
                      alt="img1"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: "15px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    {icon ? (
                      <FavoriteIcon
                        onClick={() => setIcon(!icon)}
                        sx={{
                          color: "#FF3040",
                          cursor: "pointer",
                          fontSize: "30px",
                          transition: ".3s",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                        }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        onClick={() => {
                          setIcon(!icon);
                          handleToster();
                        }}
                        sx={{
                          color: theme.palette.black,
                          fontSize: "30px",
                          cursor: "pointer",
                          transition: ".3s",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                        }}
                      />
                    )}
                  </Box>
                  <Box>
                    <ChatBubbleOutlineOutlinedIcon
                      sx={{
                        color: theme.palette.black,
                        mx: "18px",
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                  <Box>
                    <SendIcon
                      sx={{
                        color: theme.palette.black,
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon
                    sx={{
                      color: theme.palette.black,
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer />
    </>
  );
};

export default HomeFeed;
