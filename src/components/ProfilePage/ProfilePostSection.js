import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Button,
  useMediaQuery,
  IconButton,
  Typography,
  Modal,
  Grid,
  FormControl,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { string, object } from "yup";
import img from "../../assets/images/profileSection/img_upload..jpg";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  border: "unset !important",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const ProfilePostSection = () => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [file, setFile] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const initialValues = {
    description: "",
    caption: "",
  };

  const validationSchema = object({
    caption: string().required("Title is required"),
    description: string().required("Description is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, action) => {
        console.log("value", { ...values, post_image: file });
    //   axios
    //     .post(`http://localhost:9000/api/post`, { ...values, post_image: file })
    //     .then((res) => console.log(res).catch((err) => console.log(err)));
      action.resetForm();
    },
  });

  return (
    <>
      <Container>
        <Box
          sx={{
            color: "blue",
            fontWeight: "500",
            textAlign: "center",
            mt: "100px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          <Typography onClick={handleOpen}>Create Your Post</Typography>
        </Box>
        <Modal
          size={{ xs: "sm" }}
          keepMounted
          open={open}
          onClose={handleClose}
          width={800}
          // sx={{ width: { md: "800px", xs: "100%" } }}
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
              Create Your Post
            </Typography>
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
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
                <Grid item xl={12} lg={12} md={6} sm={6} xs={12}>
                  <Box type="file">
                    <img
                      src={img} // Replace with your image path
                      alt="Upload Image"
                      onClick={handleImageClick}
                      style={{ cursor: "pointer", maxWidth: "200px" }}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </Box>
                </Grid>
                <Grid item xl={12} lg={12} md={6} sm={6} xs={12}>
                  <TextField
                    label="Title"
                    variant="outlined"
                    name="caption"
                    value={formik.values.caption}
                    onChange={formik.handleChange}
                    fullWidth
                    inputlabelprops={{
                      style: { color: "#5559CE" },
                    }}
                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                    helperText={formik.touched.caption && formik.errors.caption}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={6} sm={6} xs={12}>
                  <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    rows={4}
                    value={formik.values?.description}
                    onChange={formik.handleChange}
                    multiline
                    fullWidth
                    inputlabelprops={{
                      style: { color: "#5559CE" },
                    }}
                    error={
                      formik.touched.description &&
                      Boolean(formik.errors.description)
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
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
                    sx={{
                      backgroundColor: "#5559CE",
                      color: "#fff",
                      marginRight: "10px",
                      marginTop: "15px",
                      height: "35px",
                      "&:hover": { backgroundColor: "#5559CE" },
                    }}
                  >
                    Add Post
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default ProfilePostSection;
