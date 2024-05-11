import React from "react";
import Box from "@mui/material/Box";
import { Grid, Link, TextField, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/signup/download.png";
import * as Yup from "yup";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";

function SignUp() {
  const theme = useTheme();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    password: "",
    user_name: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Enter vaild First Name"),
    last_name: Yup.string().required("Enter vaild Last Name"),
    email: Yup.string().email().required("Enter vaild Email"),
    contact: Yup.string().required("Enter vaild Contact").max(10).min(10),
    user_name: Yup.string().required("Enter vaild Username"),
    password: Yup.string()
      .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$")
      .required("Enter vaild Password"),
  });

  const handleSubmit = (values, action) => {
    return axios
      .post("http://localhost:9000/auth/register", values)
      .then((response) => {
        console.log(response.data);
        action.resetForm();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.dashboardBg,
      }}
    >
      <Grid container display={"flex"} alignItems={"center"}>
        <Grid container display={"flex"} justifyContent={"center"}>
          <Grid
            xl={8}
            lg={8}
            item
            bgcolor={"#fff"}
            display={"flex"}
            sx={{
              margin: { xs: "20px" },
              height: { lg: "100%" },
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
                  Register
                </Typography>
                <Typography fontSize={14} mb={1}>
                  Enter Your Details to Register
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
                      label="First Name"
                      variant="outlined"
                      name="first_name"
                      helperText={
                        <ErrorMessage
                          className="ErrorColor"
                          name="first_name"
                        />
                      }
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      label="Last Name"
                      variant="outlined"
                      name="last_name"
                      helperText={
                        <ErrorMessage className="ErrorColor" name="last_name" />
                      }
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      label="Email"
                      variant="outlined"
                      name="email"
                      helperText={
                        <ErrorMessage className="ErrorColor" name="email" />
                      }
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      label="Password"
                      variant="outlined"
                      name="password"
                      helperText={
                        <ErrorMessage className="ErrorColor" name="password" />
                      }
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      label="Contact"
                      variant="outlined"
                      name="contact"
                      helperText={
                        <ErrorMessage className="ErrorColor" name="contact" />
                      }
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      label="User Name"
                      variant="outlined"
                      name="user_name"
                      helperText={
                        <ErrorMessage className="ErrorColor" name="user_name" />
                      }
                    />
                    <Box display="flex" justifyContent="center" my={3}>
                      <Button
                        sx={{ width: "100%", borderRadius: "50px " }}
                        variant="contained"
                        type="submit"
                      >
                        Register
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
                padding: "0px 75px",
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
  );
}

export default SignUp;
