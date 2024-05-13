import { Avatar, Box, Button, Grid, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const HomeFeed = () => {
  const theme = useTheme();
  // const [icon, setIcon] = useState(false);
  const [posts, setPosts] = useState([]);
  const [follow, setUnFollow] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchAllPosts();
  }, []);

  function fetchAllPosts() {
    axios
      .get("http://localhost:9000/api/post", { headers: { auth: token } })
      .then((response) => {
        setPosts(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleclick(postid) {
    // setIcon(!icon);
    return axios
      .post(`http://localhost:9000/api/post/${postid}`, null, {
        headers: { auth: token },
      })
      .then((response) => {
        console.log(response);
        fetchAllPosts();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
    function followers(follow) {
    console.log("follow", follow);
    // axios.post(`http://localhost:9000/api/user/${follow}`, null, {
    //   headers: { auth: token },
    // });
  }
  return (
    <>
      <Box>
        <Grid container justifyContent={"center"}>
          {posts?.map((res, ind) => {
            const url = res.post_image;
            const finalUrl = url.split("\\");
            return (
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                my={3}
              >
                <Box
                  sx={{
                    borderBottom: "1px solid #00000026",
                    width: { sm: "500px" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: "10px",
                      }}
                    >
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src={`${process.env.REACT_APP_API_URL}/${finalUrl[1]}/${finalUrl[2]}`}
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
                        {res.description}
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Box>
                        <Button
                          variant="outlined"
                          sx={{
                            color: "black",
                            borderColor: "black",
                            marginRight: "10px",
                            textTransform: "unset",
                            }}
                          onClick={() => {
                            followers(user.id);
                            setUnFollow(!follow);
                          }}
                        >
                          {follow ? "Unfollow" : "Follow"}
                        </Button>
                      </Box>
                      <Box>
                        {" "}
                        <MoreHorizIcon
                          sx={{
                            color: theme.palette.black,
                            fontSize: "30px",
                            cursor: "pointer",
                          }}
                        />
                      </Box>
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
                      <Box sx={{ height: "600px", width: { sm: "400px" } }}>
                        <Avatar
                          alt="Remy Sharp"
                          src={`${process.env.REACT_APP_API_URL}/${finalUrl[1]}/${finalUrl[2]}`}
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
                        {res.is_liked == 0 ? (
                          <FavoriteIcon
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
                              handleclick(res.id);
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
                  <Box
                    sx={{
                      color: theme.palette.black,
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                    pb={5}
                  >
                    {res.caption}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <ToastContainer />
    </>
  );
};

export default HomeFeed;
