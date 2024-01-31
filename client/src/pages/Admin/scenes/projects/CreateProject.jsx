import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../../components/admin/Header";
import API from "../../../../services/axios.js";
import { GridCloseIcon } from "@mui/x-data-grid";
import { usePopup } from "../../MyContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const initialValues = {
  project_name: "",
  email: "",
  description: "",
  supply: "",
  website: "",
  opensea: "",
  discord: "",
  twitter: "",
  file: "",
};

const CreateProject = () => {
  const { openPopup, setOpenPopup } = usePopup();

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = async (values, { resetForm }) => {
    console.log(values);
    // Make sure values.date is a Date object
    // const date =
    // values.date instanceof Date ? values.date : new Date(values.date);

    // const formattedDate = format(new Date(values.date), "yyyy-MM-dd");
    // const file = values;
    // const filename = file.name;
    // console.log(filename);
    // // Check if the input has files selected

    const formCloud = new FormData();

    formCloud.append("file", values.file);
    formCloud.append("upload_preset", "niftyzone");

    try {
      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/df8oadkfq/image/upload",
        formCloud
      );
      console.log(cloudinaryResponse.data.url);

      try {
        const res = await API.post(
          "/projects",

          // values
          {
            project_name: values.project_name,
            email: values.email,
            description: values.description,
            supply: values.supply,
            twitter: values.twitter,
            discord: values.discord,
            website: values.website,
            opensea: values.opensea,
            file: cloudinaryResponse.data.url,
          }
          // {
          //   headers: {
          //     "Content-Type": "multipart/form-data", // Set the content type to multipart form data
          //   },
          // }
        );
        console.log("Project Submitted Successfully", res);
        toast.success("✔  Project Submitted!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        console.log("Failed to save Project", error);

        toast.error("❌ Failed to Upload Project", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
        });
      }
    } catch (err) {
      console.log("failed to  upload", err);
    }

    resetForm();
    setOpenPopup(!openPopup);
  };
  // const handleFormClose = (resetForm) => {
  //   // setOpenPopup(!openPopup);
  //   resetForm();
  // };

  return (
    <Box m="20px">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Header title="ADD NFT Project" subtitle="Create a New Project " />
        <GridCloseIcon onClick={() => setOpenPopup(!openPopup)} />
      </Box>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}>
        {({
          values,
          setFieldValue,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
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
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
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
                // accept=".png, .jpg, .jpeg"
                accept="image/*"
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
                onClick={() => setOpenPopup(!openPopup)}>
                Cancel
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Add Project
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
  description: yup.string().required("required"),
  supply: yup.string().required("required"),
  website: yup.string(),
  opensea: yup.string(),
  discord: yup.string().required("required"),
  twitter: yup.string().required("required"),
});

export default CreateProject;
