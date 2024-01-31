import { Box, Button, Input, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../../components/admin/Header";
import axiosAPI from "../../../../services/axios.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  project_name: "",
  email: "",
  phone: "",
  description: "",
  file: "",
  supply: "",
  website: "",
  opensea: "",
  discord: "",
  twitter: "",
};

const CollabForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values, { resetForm }) => {
    console.log(values);

    // const file = values;
    // const filename = file.name;
    // console.log(filename);
    // // Check if the input has files selected
    const formData = new FormData();
    // Append all form fields
    formData.append("project_name", values.project_name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("description", values.description);
    formData.append("supply", values.supply);
    formData.append("file", values.file); // Append the image file
    formData.append("website", values.website);
    formData.append("opensea", values.opensea);
    formData.append("discord", values.discord);
    formData.append("twitter", values.twitter);

    // try {
    const res = await axiosAPI.post(
      "/collab",
      formData,
      // values
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart form data
        },
      }
    );
    console.log("Collboration Done", res);

    toast.success("✔ Collaboration Done!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    resetForm();
    // } catch (error) {
    //   console.log(error);

    //   toast.error("An Error Occured", {
    //     position: "top-center",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: 0,
    //     theme: "dark",
    //   });
    // }
  };

  const handleFormClose = (resetForm) => {
    // setOpenPopup(!openPopup);
    resetForm();
  };

  return (
    <Box m="20px">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Header
          title="ADD NEW COLLAB"
          subtitle="Create a New collaboration with NFT Project"
        />
        {/* <GridCloseIcon onClick={() => setOpenPopup(!openPopup)} /> */}
      </Box>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        enctype="multipart/form-data">
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              gridTemplateRows="repeat(2, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                  gridRow: isNonMobile ? undefined : "span 2",
                },
              }}>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label=" Project Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.project_name}
                name="project_name"
                error={!!touched.project_name && !!errors.project_name}
                helperText={touched.project_name && errors.project_name}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4", gridRow: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Total Supply"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.supply}
                name="supply"
                error={!!touched.supply && !!errors.supply}
                helperText={touched.supply && errors.supply}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                id="image-file"
                fullWidth
                variant="filled"
                type="file"
                // label="Add PFP"
                // onBlur={handleBlur}
                onChange={(event) =>
                  setFieldValue("file", event.target.files[0])
                }
                accept=".png, .jpg, .jpeg"
                // value={values.file}
                // name="file"
                error={!!touched.file && !!errors.file}
                // helperText={touched.file && errors.file}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label=" website"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.website}
                name="website"
                error={!!touched.website && !!errors.website}
                helperText={touched.website && errors.website}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label=" opensea"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.opensea}
                name="opensea"
                error={!!touched.opensea && !!errors.opensea}
                helperText={touched.opensea && errors.opensea}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label=" twitter"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.twitter}
                name="twitter"
                error={!!touched.twitter && !!errors.twitter}
                helperText={touched.twitter && errors.twitter}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label=" discord"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.discord}
                name="discord"
                error={!!touched.discord && !!errors.discord}
                helperText={touched.discord && errors.discord}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="button"
                color="secondary"
                variant="outlined"
                sx={{ mx: "20px" }}
                onClick={handleFormClose}>
                Cancel
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Add Collab
              </Button>
              <ToastContainer className="custom-toast-container" />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  project_name: yup.string().required("required"),
  email: yup.string().required("required"),
  phone: yup.string().required("required"),
  description: yup.string().required("required"),
  supply: yup.string().required("required"),
  // file: yup.string().required("required"),
  file: yup.string(),
  website: yup.string(),
  opensea: yup.string(),
  discord: yup.string().required("required"),
  twitter: yup.string().required("required"),
});

export default CollabForm;
