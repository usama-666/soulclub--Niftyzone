import { useState } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CTypography from "../../utility/CTypography";
import AuthButton from "../../utility/AuthButton.jsx";
import axiosAPI from "../../services/axios.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SignPage from "./SignPage";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    console.log(user);
    const validationErrors = {};
    if (!user.name.trim()) {
      validationErrors.name = "username is required";
    }

    if (!user.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      validationErrors.email = "email is not valid";
    }
    if (!user.phone) {
      validationErrors.phone = "Phone is required";
    } else if (!user.phone.match("[0-9]{10}")) {
      validationErrors.phone = "Enter Valid Phone no";
    }

    if (!user.password.trim()) {
      validationErrors.password = "password is required";
    } else if (user.password.length < 6) {
      validationErrors.password = "password should be at least 6 char";
    }

    if (user.cpassword !== user.password) {
      validationErrors.cpassword = "password not matched";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // const { name, email, phone, password, cpassword } = user;

      try {
        const res = await axiosAPI.post("/auth/register", user, {
          withCredentials: true,
        });

        // const data = await res;
        if (res.data.status === 422 || !res.data) {
          toast.error("An Error Occured", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
          });
          console.log("Request FAILED");
        } else {
          toast.success(`${res.data.message}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log("registered Successfully", res.data);
          console.log("registered Successfully", res.data.message);
          setUser({
            name: "",
            email: "",
            phone: "",
            password: "",
            cpassword: "",
          });
          navigate("/signin");
        }
      } catch (err) {
        console.log(err);
      }
      // navigate("/");
      // history.push("/");

      // alert("Form Submitted successfully");
    }
  };

  const handleSignin = () => {
    navigate("/signin");
  };
  return (
    <>
      <Stack
        sx={{
          px: {
            lg: 10,
            xs: 2,
          },
          py: {
            lg: 8,
            xs: 2,
          },
        }}>
        <Grid
          container
          alignItems="center"
          spacing={{
            xs: 10,
            lg: 0,
          }}>
          <Grid item xs={12} lg={6}>
            <SignPage />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            alignItems="center"
            justifyContent="space-between">
            <Box
              sx={{
                width: {
                  md: 600,
                  xs: "100%",
                  sm: 500,
                },
                position: "relative",
              }}>
              <Stack direction={"row"}>
                {/* <Card /> */}
                <form method="POST" onSubmit={PostData}>
                  <Box
                    display="flex"
                    flexDirection={"column"}
                    minWidth={400}
                    alignItems={"center"}
                    justifyContent={"center"}
                    marginLeft={5}
                    padding={3}
                    borderRadius={5}
                    boxShadow={"5px 5px 10px #AD1AAF"}
                    sx={{
                      ":hover": {
                        boxShadow: "10px 10px 20px #AD1AAF",
                      },
                      background:
                        "linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)",
                      borderWidth: "0.5px 0px",
                      borderStyle: "solid",
                      borderColor: "rgba(255, 255, 255, 0.4)",
                      backdropFilter: "blur(17.915px)",
                    }}>
                    <CTypography
                      fontSize="40px"
                      fontWeight={600}
                      lineHeight="80px"
                      textTransform="uppercase">
                      Signup
                    </CTypography>

                    <TextField
                      inputProps={{
                        style: {
                          color: "white",
                          borderStyle: "solid",
                          borderWidth: "2px 2px 2px 2px",
                          borderColor: "#AD1AAF",
                          placeholder: "white",
                          borderRadius: "10px",
                        },
                      }}
                      borderColor={"#AD1AAF"}
                      onChange={handleInputs}
                      name="name"
                      value={user.name}
                      margin="normal"
                      type={"text"}
                      variant="outlined"
                      placeholder="Name"
                      color="secondary"
                      backgroundColor="#fff"
                    />

                    {errors.name && (
                      <Typography sx={{ color: "#AD1AAF " }}>
                        {errors.name}
                      </Typography>
                    )}
                    <TextField
                      inputProps={{
                        style: {
                          color: "white",
                          borderStyle: "solid",
                          borderWidth: "2px 2px 2px 2px",
                          borderColor: "#AD1AAF",
                          placeholder: "white",
                          borderRadius: "10px",
                        },
                      }}
                      borderColor={"#AD1AAF"}
                      color="secondary"
                      onChange={handleInputs}
                      name="email"
                      value={user.email}
                      margin="normal"
                      type={"email"}
                      variant="outlined"
                      placeholder="Email"
                      backgroundColor="#fff"
                    />
                    {errors.email && (
                      <Typography sx={{ color: "#AD1AAF " }}>
                        {errors.email}
                      </Typography>
                    )}

                    <TextField
                      inputProps={{
                        style: {
                          color: "white",
                          borderStyle: "solid",
                          borderWidth: "2px 2px 2px 2px",
                          borderColor: "#AD1AAF",
                          placeholder: "white",
                          borderRadius: "10px",
                        },
                      }}
                      borderColor={"#AD1AAF"}
                      color="secondary"
                      onChange={handleInputs}
                      name="phone"
                      value={user.phone}
                      margin="normal"
                      type={"number"}
                      variant="outlined"
                      placeholder=" Phone no"
                      backgroundColor="#fff"
                      pattern="[1-9]{1}[0-9]{9}"
                    />
                    {errors.phone && (
                      <Typography sx={{ color: "#AD1AAF " }}>
                        {errors.phone}
                      </Typography>
                    )}

                    <TextField
                      inputProps={{
                        style: {
                          color: "white",
                          borderStyle: "solid",
                          borderWidth: "2px 2px 2px 2px",
                          borderColor: "#AD1AAF",
                          placeholder: "white",
                          borderRadius: "10px",
                        },
                      }}
                      borderColor={"#AD1AAF"}
                      color="secondary"
                      onChange={handleInputs}
                      name="password"
                      value={user.password}
                      margin="normal"
                      type={"password"}
                      variant="outlined"
                      placeholder="Password"
                      backgroundColor="#fff"
                    />
                    {errors.password && (
                      <Typography sx={{ color: "#AD1AAF " }}>
                        {errors.password}
                      </Typography>
                    )}
                    <TextField
                      inputProps={{
                        style: {
                          color: "white",
                          borderStyle: "solid",
                          borderWidth: "2px 2px 2px 2px",
                          borderColor: "#AD1AAF",
                          placeholder: "white",
                          borderRadius: "10px",
                        },
                      }}
                      outline="none"
                      borderColor={"#AD1AAF"}
                      color="secondary"
                      onChange={handleInputs}
                      name="cpassword"
                      value={user.cpassword}
                      margin="normal"
                      type={"password"}
                      variant="outlined"
                      placeholder=" Confirm Password"
                      backgroundColor="#fff"
                    />
                    {errors.cpassword && (
                      <Typography sx={{ color: "#AD1AAF " }}>
                        {errors.cpassword}
                      </Typography>
                    )}

                    <AuthButton type="submit" endIcon={<HowToRegIcon />}>
                      Signup
                    </AuthButton>
                    {/* <Link to="/signin"> */}
                    <Button
                      endIcon={<LoginIcon />}
                      onClick={handleSignin}
                      style={{
                        color: "#fff",
                      }}
                      sx={{ marginTop: 3, borderRadius: 3 }}>
                      Change To Login
                    </Button>
                    {/* </Link> */}
                  </Box>
                </form>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default Signup;
