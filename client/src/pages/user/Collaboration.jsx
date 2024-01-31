// import { Button, Stack, TextField } from "@mui/material";
// import CTypography from "../../utility/CTypography";
// import SButton from "../../utility/SButton";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Box, Button, Stack, TextField } from "@mui/material";
// import Header from "../Admin/AdminLayout/Header/Header.jsx"
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import API from "../../services/axios.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CTypography from "../../utility/CTypography.jsx";
import { useRef } from "react";
import WalletSupport from "./WalletSupport.jsx";

const initialValues = {
  project_name: "",
  email: "",
  phone: "",
  description: "",
  supply: "",
  website: "",
  opensea: "",
  discord: "",
  twitter: "",
  file: "",
};

const Collaboration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // const [image, setImage] = useState([]);
  const fileInputRef = useRef(null);
  const handleFormSubmit = async (values, { resetForm }) => {
    console.log(values);

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
          "/collab",

          // values
          {
            project_name: values.project_name,
            email: values.email,
            description: values.description,
            supply: values.supply,
            phone: values.phone,
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
      } catch (error) {
        console.log(error);

        toast.error("An Error Occured", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
        });
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.log("failed to  upload", err);
    }
  };

  // setFieldValue("file", "");

  const handleFormClose = (resetForm) => {
    // setOpenPopup(!openPopup);
    resetForm();
  };

  return (
    <>
      <WalletSupport />
      <Stack
        px={{
          md: 10,
          sm: 5,
          xs: 2,
        }}
        py={{
          sm: 10,
          xs: 0,
        }}
        spacing={8}
        mx={{
          md: 10,
          sm: 5,
          xs: 2,
        }}>
        <Box>
          <TopSection />

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}>
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
                {/* <CTypography
                fontSize="48px"
                fontWeight={700}
                lineHeight="90px"
                textTransform="uppercase"
                pl={10}>
                Submit you Collab Request
              </CTypography> */}
                <Stack
                  display="grid"
                  paddingLeft={1}
                  fullWidth
                  // width=""
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  // gridTemplateRows="repeat(2, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                      gridRow: isNonMobile ? undefined : "span 4",
                    },
                  }}>
                  <TextField
                    inputProps={{
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        placeholder: "white",
                        borderRadius: "6px",
                      },
                    }}
                    borderColor={"#AD1AAF"}
                    color="secondary"
                    variant="outlined"
                    type="text"
                    placeholder=" Project Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.project_name}
                    name="project_name"
                    error={!!touched.project_name && !!errors.project_name}
                    helperText={touched.project_name && errors.project_name}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    inputProps={{
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        placeholder: "white",
                        borderRadius: "6px",
                      },
                    }}
                    borderColor={"#AD1AAF"}
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    type="text"
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    inputProps={{
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        placeholder: "white",
                        borderRadius: "6px",
                      },
                    }}
                    borderColor={"#AD1AAF"}
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    type="text"
                    placeholder="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    inputProps={{
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        placeholder: "white",
                        borderRadius: "6px",
                      },
                    }}
                    borderColor={"#AD1AAF"}
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    type="text"
                    placeholder="Total Supply"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.supply}
                    name="supply"
                    error={!!touched.supply && !!errors.supply}
                    helperText={touched.supply && errors.supply}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    inputProps={{
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        placeholder: "white",
                        borderRadius: "6px",
                      },
                    }}
                    borderColor={"#AD1AAF"}
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    type="text"
                    placeholder=" website"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.website}
                    name="website"
                    error={!!touched.website && !!errors.website}
                    helperText={touched.website && errors.website}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    inputProps={{
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        placeholder: "white",
                        borderRadius: "6px",
                      },
                    }}
                    borderColor={"#AD1AAF"}
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    type="text"
                    placeholder=" opensea"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.opensea}
                    name="opensea"
                    error={!!touched.opensea && !!errors.opensea}
                    helperText={touched.opensea && errors.opensea}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    inputProps={{
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        placeholder: "white",
                        borderRadius: "6px",
                      },
                    }}
                    borderColor={"#AD1AAF"}
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    type="text"
                    placeholder=" twitter"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.twitter}
                    name="twitter"
                    error={!!touched.twitter && !!errors.twitter}
                    helperText={touched.twitter && errors.twitter}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    inputProps={{
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        placeholder: "white",
                        borderRadius: "6px",
                      },
                    }}
                    borderColor={"#AD1AAF"}
                    size="medium"
                    color="secondary"
                    variant="outlined"
                    type="text"
                    placeholder=" discord"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.discord}
                    name="discord"
                    error={!!touched.discord && !!errors.discord}
                    helperText={touched.discord && errors.discord}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    inputProps={{
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        placeholder: "white",
                        borderRadius: "6px",
                      },
                    }}
                    borderColor={"#AD1AAF"}
                    color="secondary"
                    variant="outlined"
                    type="text"
                    placeholder="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    error={!!touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    inputProps={{
                      ref: fileInputRef,
                      style: {
                        color: "white",
                        borderStyle: "solid",
                        borderWidth: "2px 2px 2px 2px",
                        borderColor: "#AD1AAF",
                        borderRadius: "6px",
                      },
                    }}
                    id="image-file"
                    fullWidth
                    variant="outlined"
                    borderColor={"#AD1AAF"}
                    type="file"
                    // label="Add PFP"
                    // onBlur={handleBlur}
                    onChange={(event) =>
                      setFieldValue("file", event.target.files[0])
                    }
                    accept="image/*"
                    // value={values.file}
                    // name="file"
                    error={!!touched.file && !!errors.file}
                    // helperText={touched.file && errors.file}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Stack>
                <Box
                  display="flex"
                  justifyContent="end"
                  mt="20px"
                  pl={6}
                  mr={2}>
                  <Button
                    type="button"
                    color="secondary"
                    variant="outlined"
                    sx={{ mx: "20px" }}
                    onClick={handleFormClose}>
                    Reset
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
        <ToastContainer className="custom-toast-container" />
      </Stack>
    </>
  );
};

const checkoutSchema = yup.object().shape({
  project_name: yup.string().required("required"),
  email: yup.string().required("required"),
  phone: yup.string().required("required"),
  description: yup.string().required("required"),
  supply: yup.string().required("required"),
  website: yup.string(),
  opensea: yup.string(),
  discord: yup.string().required("required"),
  twitter: yup.string().required("required"),
});

export default Collaboration;

function TopSection() {
  return (
    <Stack spacing={4} marginBottom={8}>
      <CTypography
        fontSize={25}
        fontWeight={400}
        textAlign="center"
        fontFamily="Poppins"
        sx={{
          background: "linear-gradient(90.13deg, #FFFFFF 0%, #F81DFB 99.96%);",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
        It's Time Showcase Your Art to the NFT World
      </CTypography>

      <Stack
        direction="row"
        justifyContent="center"
        // alignItems="center"
        my={2}>
        <CTypography
          // fontSize={70}
          fontWeight={600}
          fontFamily="Oxanium"
          textTransform="capitalize"
          fontSize={{
            md: 50,
            sm: 30,
            xs: 25,
          }}>
          Submit your Collab Request
        </CTypography>
      </Stack>
    </Stack>
  );
}
