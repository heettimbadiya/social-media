import {
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { string, object } from "yup";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/images/profileSection/img_upload..jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  border: "unset !important",
  width: { xs: "100%", sm: "60%", md: "50%" },
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const EditProfileModal = ({
  setOpen,
  open,
  user,
  currentUser,
  onProfileUpdate,
}) => {
  const [file, setFile] = useState();
  const token = JSON.parse(localStorage.getItem("token"));
  const [initialValues, setInitialValues] = useState({
    first_name: "",
    email: "",
    last_name: "",
    user_name: "",
    contact: "",
    bio: "",
  });

  useEffect(() => {
    if (currentUser) {
      setInitialValues({
        first_name: currentUser.data.first_name,
        email: currentUser.data.email,
        last_name: currentUser.data.last_name,
        user_name: currentUser.data.user_name,
        contact: currentUser.data.contact,
        bio: currentUser.data.bio,
      });
    }
  }, [currentUser]);

  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const validationSchema = object({
    first_name: string().required("Firstname is required"),
    last_name: string().required("Lastname is required"),
    user_name: string().required("Username is required"),
    email: string().required("Email is required"),
    contact: string()
      .required("Contact is required")
      .min(10, "Contact number must be 10 digits")
      .max(10, "Contact number must be 10 digits"),
    bio: string().required("Bio is required"),
  });

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, action) => {
      const formData = new FormData();
      formData.append("user_name", values.user_name);
      formData.append("first_name", values.first_name);
      formData.append("last_name", values.last_name);
      formData.append("email", values.email);
      formData.append("contact", values.contact);
      formData.append("bio", values.bio);
      formData.append("profile_pic", file);

      console.log("Formdata : ", formData);

      try {
        const res = await axios.put(
          `http://localhost:9000/api/user/${user.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              auth: token,
            },
          }
        );
        toast.success("Profile Edit Successfully"); // Show success toaster
        onProfileUpdate();
        action.resetForm();
        handleClose();
      } catch (err) {
        toast.error("Failed to Edit");
        console.log(err);
      }
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        size={{ xs: "sm" }}
        keepMounted
        open={open}
        onClose={handleClose}
        sx={{ overflow: "scroll" }}
        width={"100%"}
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="keep-mounted-modal-caption"
            variant="h6"
            component="h2"
          >
            Edit Profile
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            onReset={formik.handleReset}
            encType="multipart/form-data"
          >
            <Grid
              container
              spacing={2}
              justifyContent={"flex-end"}
              sx={{
                padding: "20px 10px 10px",
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#5559CE",
                  },
                  "&:hover fieldset": {
                    borderColor: "#5559CE",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#5559CE",
                    borderWidth: "2px",
                  },
                },
              }}
            >
              <Grid item xs={12}>
                <Box type="file" sx={{ textAlign: "center" }}>
                  <img
                    src={img}
                    alt="Upload Image"
                    onClick={handleImageClick}
                    style={{ cursor: "pointer", maxWidth: "200px" }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    name="profile_pic"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  name="user_name"
                  value={formik.values?.user_name}
                  onChange={formik.handleChange}
                  fullWidth
                  inputlabelprops={{
                    style: { color: "#5559CE" },
                  }}
                  error={
                    formik.touched.user_name && Boolean(formik.errors.user_name)
                  }
                  helperText={
                    formik.touched.user_name && formik.errors.user_name
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Firstname"
                  variant="outlined"
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  fullWidth
                  inputlabelprops={{
                    style: { color: "#5559CE" },
                  }}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Lastname"
                  variant="outlined"
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  fullWidth
                  inputlabelprops={{
                    style: { color: "#5559CE" },
                  }}
                  error={
                    formik.touched.last_name && Boolean(formik.errors.last_name)
                  }
                  helperText={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  fullWidth
                  inputlabelprops={{
                    style: { color: "#5559CE" },
                  }}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact"
                  variant="outlined"
                  name="contact"
                  type="text"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  fullWidth
                  inputlabelprops={{
                    style: { color: "#5559CE" },
                  }}
                  error={
                    formik.touched.contact && Boolean(formik.errors.contact)
                  }
                  helperText={formik.touched.contact && formik.errors.contact}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Bio"
                  variant="outlined"
                  name="bio"
                  rows={4}
                  value={formik.values?.bio}
                  onChange={formik.handleChange}
                  multiline
                  fullWidth
                  inputlabelprops={{
                    style: { color: "#5559CE" },
                  }}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
              </Grid>

              <Grid
                item
                xl={12}
                lg={12}
                md={6}
                sm={6}
                xs={12}
                sx={{ textAlign: "right" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleClose}
                  sx={{
                    backgroundColor: "#5559CE",
                    color: "#fff",
                    marginRight: "10px",
                    marginTop: "15px",
                    height: "35px",
                    "&:hover": { backgroundColor: "#5559CE" },
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default EditProfileModal;
