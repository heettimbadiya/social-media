import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import logo from "../../assets/images/Login/download.png";
import axios from "axios";
import { useNavigate } from "react-router";

function LoginFrom() {
  const theme = useTheme();
  const navigate = useNavigate();

  const initialValues = {
    user_name: "",
    password: "",
  };

  const validationSchema = Yup.object({
    user_name: Yup.string().required("Enter vaild Username"),
    password: Yup.string().required("Enter vaild Password"),
  });

  const handleSubmit = (values, action) => {
    return axios
      .post("http://localhost:9000/auth/login", values)
      .then((response) => {
        console.log(response);
        const userData = response.data.data;
        const authToken = response.data.token;
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", JSON.stringify(authToken));
        action.resetForm();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme.palette.dashboardBg,
        }}
      >
        <Grid display={"flex"} container alignItems={"center"}>
          <Grid container display={"flex"} justifyContent={"center"}>
            <Grid
              xl={8}
              lg={8}
              item
              bgcolor={"#fff"}
              display={"flex"}
              sx={{
                margin: { xs: "20px" },
                height: { lg: "600px" },
                borderRadius: "20px",
                boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Grid
                xs={12}
                xl={5}
                item
                sx={{
                  padding: { md: "48px", sm: "28px", xs: "18px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      objectFit: "contain",
                    }}
                  >
                    <img
                      src={logo}
                      style={{ height: "100%", width: "100%" }}
                      alt={logo}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    id="login-modal-title"
                    fontWeight={700}
                    fontSize={32}
                    gutterBottom
                    mt={3}
                    mb={0}
                  >
                    Sign in
                  </Typography>
                  <Typography fontSize={14} mb={2}>
                    Enter Your Details to Sign in
                  </Typography>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <Field
                        as={TextField}
                        fullWidth
                        margin="normal"
                        label="user_name"
                        variant="outlined"
                        name="user_name"
                        helperText={
                          <ErrorMessage
                            className="ErrorColor"
                            name="user_name"
                          />
                        }
                      />
                      <Field
                        as={TextField}
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        variant="outlined"
                        name="password"
                        helperText={
                          <ErrorMessage
                            className="ErrorColor"
                            name="password"
                          />
                        }
                      />
                      <Box display="flex" justifyContent="center" my={3}>
                        <Button
                          type="submit"
                          sx={{ width: "100%", borderRadius: "50px " }}
                          variant="contained"
                        >
                          Login
                        </Button>
                      </Box>
                    </Form>
                  </Formik>
                  <Box textAlign={"center"}>
                    <Typography fontSize={14} mb={2}>
                      Don't have an account? <Link> Sign up</Link>
                    </Typography>
                  </Box>
                  <hr />
                </Box>
              </Grid>
              <Grid
                item
                sm={12}
                xl={7}
                sx={{
                  backgroundColor: "#FA7B31",
                  padding: { xl: "0px 75px", md: "0px 45px" },
                  display: { md: "block center", xs: "none" },
                  alignItems: "center",
                  borderRadius: "0px 20px 20px 0px",
                }}
              >
                <Box color={theme.palette.common.white}>
                  <Typography
                    variant="h2"
                    id="login-modal-title"
                    fontSize={49}
                    fontWeight={700}
                    gutterBottom
                    mb={2}
                  >
                    Welcome to our community
                  </Typography>
                  <Typography fontSize={16}>
                    Fuse helps developers to build organized and well coded
                    dashboards full of beautiful and rich modules. Join us and
                    start building your application today.
                  </Typography>
                  <Typography fontSize={14} my={1}>
                    More than 17k people joined us, it's your turn
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default LoginFrom;
